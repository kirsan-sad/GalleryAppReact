import { ActionTypes } from "../constants/action-types";

export const setGenres = (genres) => {
    return {
        type: ActionTypes.SET_GENRES,
        payload: genres
    };
};

export const putGenres = (genres) => {
    return {
        type: ActionTypes.PUT_GENRE,
        payload: genres
    };
};

export const deleteGenre = (id) => {
    return {
        type: ActionTypes.DELETE_GENRE,
        payload: id
    };
};

export const addGenre = (genre) => {
    return {
        type: ActionTypes.ADD_GENRE,
        payload: genre
    };
};