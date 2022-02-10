import { setPhotos, addPhoto, putPhoto, deletePhoto } from "../actionsCreater/photosActions";
import axios from 'axios';

export const fetchPhotosAsync = () => {
    return async (dispatch) => {
        await axios.get(`${process.env.REACT_APP_BASE_API_URL}Photos`)
       .then(({ data }) => {
          dispatch(setPhotos(data));
        });
    };
};

export const uploadPhotoAsync = (formData) => {
    return (dispatch) => {
        console.log(formData);
        axios.post(`${process.env.REACT_APP_BASE_API_URL}Photos/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }})
        .then(({ data }) => {
            console.log(data);
            dispatch(addPhoto(data));
          })
          .catch(({response}) =>
              console.log("error:", response.data)
          );
    };
};

export const putPhotoAsync = (id, putData) => {
    return (dispatch) => {
        axios.put(`${process.env.REACT_APP_BASE_API_URL}Photos/${id}`, putData, {
            headers: {
                'Content-Type': 'application/json',
            }})
       .then(({ data }) => {
          console.log(data);
          dispatch(putPhoto(data));
        })
        .catch(({response}) =>
        console.log("error:", response.data)
        );
    };
};


export const deletePhotoAsync = (id) => {
    return (dispatch) => {
        axios.delete(`${process.env.REACT_APP_BASE_API_URL}Photos/${id}`)
       .then((data) => {
          dispatch(deletePhoto(id));
        })
        .catch(({response}) =>
            console.log("error:", response)
        );
    };
};