import { useContext } from "react";
import "./LinkedIn.css";
import { MiniThemeContext } from "../../../Utils/MiniTheme";

export function LinkedIn(): JSX.Element {

    const theme = useContext(MiniThemeContext);

    return (
        <div className="LinkedIn" style={theme}>
            <a style={{color: "white"}} href="https://www.linkedin.com/in/shalev-cohen%F0%9F%87%AE%F0%9F%87%B1-a80b77232/">
                Shalev's LinkedIn Page</a>
        </div>
    );
}
