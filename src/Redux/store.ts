import { configureStore, createSlice } from "@reduxjs/toolkit";
import { MovieModel } from "../Models/MovieModel";
import { addMovie, deleteMovie, initMovies, loginUser, logoutUser, registerUser, updateMovie } from "./reducers";
import { UserModel } from "../Models/UserModel";
import { logger } from "./middleware";

export type AppState = {
    movies: MovieModel[];
    user: UserModel;
};
const movieSlice = createSlice({
    name: "movies",
    initialState: [],
    reducers: { initMovies, addMovie, updateMovie, deleteMovie }
});

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: { registerUser, loginUser, logoutUser }
});

export const movieActions = movieSlice.actions;
export const userActions = userSlice.actions;

export const store = configureStore<AppState>({
    reducer: {
        movies: movieSlice.reducer,
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger) as any
});
