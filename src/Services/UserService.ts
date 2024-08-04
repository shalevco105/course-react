import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { store, userActions } from "../Redux/store";
import { CredentialsModel } from "../Models/CredentialsModel";
import { decrypt } from "./EncryptionService";

class UserService {

    public constructor() {
        const token = localStorage.getItem("token");

        if (token) {
            const container = jwtDecode<{ user: UserModel }>(token);
            const dbUser = container.user;
            const action = userActions.loginUser(dbUser);
            store.dispatch(action);
        }
    }

    public async register(user: UserModel) {
        const response = await axios.post<string>(appConfig.registerUrl, user);
        const data = response.data;
        const decryptedData: { user: UserModel, token: string } = JSON.parse(decrypt(data));
        const action = userActions.registerUser(decryptedData.user);
        store.dispatch(action);
        localStorage.setItem("token", decryptedData.token);
    }

    public async login(credentials: CredentialsModel) {
        const response = await axios.post<string>(appConfig.loginUrl, credentials);
        const data = response.data;
        const decryptedData: { user: UserModel, token: string } = JSON.parse(decrypt(data))
        const action = userActions.loginUser(decryptedData.user);
        store.dispatch(action);
        localStorage.setItem("token", decryptedData.token);
    }

    public logout() {
        const action = userActions.logoutUser();
        store.dispatch(action);
        localStorage.removeItem("token");
    }
}

export const userService = new UserService();
