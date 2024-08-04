import { useEffect, useState } from "react";
import { MovieModel } from "../../../Models/MovieModel";
import { movieService } from "../../../Services/MovieService";
import "./MovieList.css";
import { MovieCard } from "../MovieCard/MovieCard";
import { notify } from "../../../Utils/notify";
import { useTitle } from "../../../Utils/UseTitle";

export function MovieList(): JSX.Element {

    useTitle("Northwind Movies");

    const [movies, setMovies] = useState<MovieModel[]>([]);

    useEffect(() => {

        movieService.getAllMovies()
            .then(dbMovies => setMovies(dbMovies))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="MovieList">
            {movies.map(p => <MovieCard key={p.externalId} movie={p} />)}
        </div>
    );
}
