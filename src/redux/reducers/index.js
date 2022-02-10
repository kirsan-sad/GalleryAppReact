import { combineReducers } from "redux";
import { genresReducer } from "./genresReducer";
import { photosReducer } from "./photosReducer";


const rootReducer = combineReducers({
    allPhotos: photosReducer,
    genres: genresReducer
});

export default rootReducer;
