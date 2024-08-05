import axios from "axios";
import { MovieModel } from "../Models/MovieModel";
import { appConfig } from "../Utils/AppConfig";
import { movieActions, store } from "../Redux/store";

class MovieService {
    public async getAllMovies() {
        if (store.getState().movies.length > 0) return store.getState().movies;
        const response = await axios.get<MovieModel[]>(`${appConfig.moviesUrl}data/`);
        const movies = response.data;
        const action = movieActions.initMovies(movies);
        store.dispatch(action);
        return movies;
    }

    public async getOneMovie(externalId: number) {
        const desiredMovie = store.getState().movies.find(p => p.externalId === externalId);
        if (desiredMovie) return desiredMovie;
        const response = await axios.get<MovieModel>(`${appConfig.moviesUrl}externalId/` + externalId);
        const movie = response.data;
        return movie;
    }

    public async addMovie(movie: MovieModel) {
        const response = await axios.post<MovieModel>(`${appConfig.moviesUrl}create/`, movie);
        const dbMovie = response.data;
        const action = movieActions.addMovie(dbMovie);
        store.dispatch(action);
    }

    public async updateMovie(movie: MovieModel) {
        const response = await axios.put<MovieModel>(`${appConfig.moviesUrl}${movie.externalId}`, movie);
        const dbMovie = response.data;
        const action = movieActions.updateMovie(dbMovie);
        store.dispatch(action);
    }

    public async deleteMovie(externalId: number) {
        await axios.delete(appConfig.moviesUrl + externalId);
        const action = movieActions.deleteMovie(externalId);
        store.dispatch(action);
    }
}

export const movieService = new MovieService();
