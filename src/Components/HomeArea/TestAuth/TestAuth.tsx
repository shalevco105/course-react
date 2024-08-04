import axios, { AxiosRequestConfig } from "axios";
import "./TestAuth.css";
import { notify } from "../../../Utils/notify";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/store";
import { UserModel } from "../../../Models/UserModel";

export function TestAuth(): JSX.Element {

    const user = useSelector<AppState, UserModel>(store => store.user);

    async function testUser() {
        try {
            const response = await axios.get("http://localhost:3030/api/categories/");
            console.log(response.data);
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    async function testAdmin() {
        try {
            const response = await axios.get("http://localhost:3030/api/movies/out-of-stock");
            console.log(response.data);
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="TestAuth">

            {user && <button onClick={testUser}>Test User</button>}

            {user?.role === "Admin" && <button onClick={testAdmin}>Test Admin</button>}

        </div>
    );
}
