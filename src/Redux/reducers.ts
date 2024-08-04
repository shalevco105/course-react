import { Action, PayloadAction } from "@reduxjs/toolkit";
import { MovieModel } from "../Models/MovieModel";
import { UserModel } from "../Models/UserModel";

export function initMovies(previousState: MovieModel[], action: PayloadAction<MovieModel[]>) {
    const newState: MovieModel[] = action.payload;
    return newState;
}

export function addMovie(previousState: MovieModel[], action: PayloadAction<MovieModel>) {
    const newState: MovieModel[] = [...previousState];
    newState.push(action.payload);
    return newState;
}

export function updateMovie(previousState: MovieModel[], action: PayloadAction<MovieModel>) {
    const newState: MovieModel[] = [...previousState];
    const index = newState.findIndex(p => p.externalId === action.payload.externalId);
    if (index >= 0) newState[index] = action.payload;
    return newState;
}

export function deleteMovie(previousState: MovieModel[], action: PayloadAction<number>) {
    const newState: MovieModel[] = [...previousState];
    const index = newState.findIndex(p => p.externalId === action.payload);
    if (index >= 0) newState.splice(index, 1);
    return newState;
}

export function registerUser(previousState: UserModel, action: PayloadAction<UserModel>) {
    const newState: UserModel = action.payload;
    return newState;
}

export function loginUser(previousState: UserModel, action: PayloadAction<UserModel>) {
    const newState: UserModel = action.payload;
    return newState;
}

export function logoutUser(previousState: UserModel, action: Action) {
    const newState: UserModel = null;
    return newState;
}

