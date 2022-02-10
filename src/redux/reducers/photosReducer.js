import { ActionTypes } from "../constants/action-types";

const initialState = {
    photos: [],
    isLoaded: false
};

export const photosReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_PHOTOS:
            return {...state, photos:payload, isLoaded:true}
        case ActionTypes.GET_PHOTO_BY_ID:
            return state.photos.find(photo => photo.index === payload);
        case ActionTypes.UPLOAD_PHOTO:
            return {...state, photos: [...state.photos, payload], isLoaded:true};
        case ActionTypes.PUT_PHOTO:
            const {index, title, genres} = payload;
            return {...state, photos: [...state.photos.map(photo => {
                if(photo.index == index){
                    photo.title = title;
                    photo.genres = genres;
                }
                return photo;
            })]}    
        case ActionTypes.DELETE_PHOTO:
            return {...state, photos: state.photos.filter((photo) => photo.index !== payload)}    
        default:
            return state;
    }
};