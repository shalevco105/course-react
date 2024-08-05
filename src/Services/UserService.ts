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
        await this.signIn(appConfig.registerUrl, user, userActions.loginUser)
    }

    public async login(credentials: CredentialsModel) {
        await this.signIn(appConfig.loginUrl, credentials, userActions.loginUser)
    }

    public logout() {
        const action = userActions.logoutUser();
        store.dispatch(action);
        localStorage.removeItem("token");
    }

    private async signIn(url: string, body: object, userAction: (user: UserModel) => any) {
        const response = await axios.post<string>(url, body);
        const data = response.data;
        const decryptedData: { user: UserModel, token: string } = JSON.parse(decrypt(data))
        const action = userAction(decryptedData.user);
        store.dispatch(action);
        localStorage.setItem("token", decryptedData.token);
    }
}

export const userService = new UserService();
