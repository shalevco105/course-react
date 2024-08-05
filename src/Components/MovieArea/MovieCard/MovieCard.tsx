import { useNavigate } from "react-router-dom";
import { MovieModel } from "../../../Models/MovieModel";
import "./MovieCard.css";

type MovieCardProps = {
    movie: MovieModel;
};

export function MovieCard(props: MovieCardProps): JSX.Element {
    const navigate = useNavigate();

    function displayDetails() {
        navigate("/movies/details/" + props.movie.externalId);
    }

    return (
        <div className="MovieCard" onClick={displayDetails}>
            <div>
                {props.movie.externalId}| {props.movie.name} <br />
                Length: {props.movie.length} <br />
                Price: {props.movie.price}$
            </div>
            <div>
                <img src={props.movie.imageUrl} alt={props.movie.externalId.toString()} />
            </div>
        </div>
    );
}
