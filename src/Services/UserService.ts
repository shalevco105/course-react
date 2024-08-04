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
        const decryptedData = decrypt(data) as { username: string, token: string };
        console.log("sss: " + decryptedData)
        const dbUser = decryptedData.username;
        console.log(data)
        console.log(decryptedData)
        // const action = userActions.registerUser(dbUser);
        // store.dispatch(action);
        // localStorage.setItem("token", token);
    }

    public async login(credentials: CredentialsModel) {
        const response = await axios.post<{ token: string, username: string }>(appConfig.loginUrl, credentials);
        const data = response.data;
        const token = data.token;
        const username = data.username;
        const container = jwtDecode<{ user: UserModel }>(token);
        const dbUser = container.user;
        const action = userActions.loginUser(dbUser);
        store.dispatch(action);
        localStorage.setItem("token", token);
    }

    public logout() {
        const action = userActions.logoutUser();
        store.dispatch(action);
        localStorage.removeItem("token");
    }
}

export const userService = new UserService();
