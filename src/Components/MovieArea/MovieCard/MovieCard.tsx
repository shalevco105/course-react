import { useNavigate, useParams } from "react-router-dom";
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
                {props.movie.movie_name} <br />
                Price: {props.movie.movie_length} 
            </div>
            <div>
                <img src={props.movie.movie_picUrl} />
            </div>
        </div>
    );
}
