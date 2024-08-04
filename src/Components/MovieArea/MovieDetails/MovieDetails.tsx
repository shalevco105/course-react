import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useEffect, useState } from "react";
import { movieService } from "../../../Services/MovieService";
import { MovieModel } from "../../../Models/MovieModel";
import { notify } from "../../../Utils/notify";
import { NavLink } from "react-router-dom";

export function MovieDetails(): JSX.Element {

    const params = useParams();
    const id = +params.prodId;

    const [movie, setMovie] = useState<MovieModel>();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOneMovie(id)
            .then(dbMovie => setMovie(dbMovie))
            .catch(err => notify.error(err));
    }, []);

    async function deleteMe() {
        try {
            await movieService.deleteMovie(id);
            notify.success("Movie has been deleted.");
            navigate("/movies");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="MovieDetails">

            <h3>Name: {movie?.movie_name}</h3>
            <h3>Price: {movie?.movie_length}</h3>
            <img src={movie?.movie_picUrl} />

            <br /> <br />

            <NavLink to="/movies">Back</NavLink>
            <span> | </span>
            <NavLink to={"/movies/edit/" + movie?.externalId}>Edit</NavLink>
            <span> | </span>
            <NavLink to="#" onClick={deleteMe}>Delete</NavLink>

        </div>
    );
}
