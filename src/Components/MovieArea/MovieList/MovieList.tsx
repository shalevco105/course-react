import { useEffect, useState } from "react";
import { MovieModel } from "../../../Models/MovieModel";
import { movieService } from "../../../Services/MovieService";
import "./MovieList.css";
import { MovieCard } from "../MovieCard/MovieCard";
import { notify } from "../../../Utils/notify";
import { useTitle } from "../../../Utils/UseTitle";

export function MovieList(): JSX.Element {

    useTitle("Shalev's Movies");

    const [movies, setMovies] = useState<MovieModel[]>([]);

    useEffect(() => {

        movieService.getAllMovies()
            .then(dbMovies => setMovies(dbMovies))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="MovieList">
            <h1>Click to Edit or Delete</h1>
            {movies.map(movie => <MovieCard key={movie.externalId} movie={movie} />)}
        </div>
    );
}
