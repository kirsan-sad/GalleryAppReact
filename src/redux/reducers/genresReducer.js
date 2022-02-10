import { ActionTypes } from "../constants/action-types";

const initialState = {
    genres: [],
    isLoaded: false,
};

export const genresReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_GENRES:
            return {...state, genres:payload, isLoaded:true}
        case ActionTypes.ADD_GENRE:
            return {...state, genres: [...state.genres, payload]}
        case ActionTypes.PUT_GENRE:
            const {index, name, description} = payload;
            return {...state, genres: [...state.genres.map(genre => {
                if(genre.index == index){
                    genre.name = name;
                    genre.description = description;
                }
                return genre;
            })]}
        case ActionTypes.DELETE_GENRE:
            return {...state, genres: state.genres.filter((genre) => genre.index !== payload)}
        default:
            return state;
    }
};

