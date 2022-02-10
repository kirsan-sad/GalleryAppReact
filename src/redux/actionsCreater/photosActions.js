import { ActionTypes } from "../constants/action-types";

export const setPhotos = (photos) => {
    return {
        type: ActionTypes.SET_PHOTOS,
        payload: photos
    };
};

export const addPhoto = (photo) => {
    return {
        type: ActionTypes.UPLOAD_PHOTO,
        payload: photo
    };
};

export const putPhoto = (photo) => {
    return {
        type: ActionTypes.PUT_PHOTO,
        payload: photo
    };
};

export const deletePhoto = (id) => {
    return {
        type: ActionTypes.DELETE_PHOTO,
        payload: id
    };
};