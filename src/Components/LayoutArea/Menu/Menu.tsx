import { NavLink } from "react-router-dom";
import "./Menu.css";
import { TotalMovies } from "../../MovieArea/TotalMovies/TotalMovies";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/movies" end>Movies</NavLink>
            <NavLink to="/movies/new">Add Movie</NavLink>

            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>


            <TotalMovies />

        </div>
    );
}
