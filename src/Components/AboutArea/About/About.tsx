import { useTitle } from "../../../Utils/UseTitle";
import { Clock } from "../../SharedArea/Clock/Clock";
import Facebook from "../Facebook/Facebook";
import { LinkedIn } from "../LinkedIn/LinkedIn";
import { Song } from "../Song/Song";
import "./About.css";

function About(): JSX.Element {

    useTitle("Shalev's App About");

    return (
        <div className="About">
            <LinkedIn />
            <Song />
            <Clock />
            <Facebook />
        </div>
    );
}

export default About;
