import { RandomBackground } from "../../SharedArea/RandomBackground/RandomBackground";
import "./Facebook.css";

function Facebook(): JSX.Element {
    return (
        <div className="Facebook">
			<span>
                Shalev's Facebook page: 
                <a href="https://www.linkedin.com/in/shalev-cohen%F0%9F%87%AE%F0%9F%87%B1-a80b77232/" target="_blank">Click Me</a>
            </span>
        </div>
    );
}

export default RandomBackground(Facebook);
