import { UserNav } from "../../UserArea/UserNav/UserNav";
import "./Header.css";

export function Header(): JSX.Element {
    return (
        <div className="Header">
            <UserNav />
        </div>
    );
}
