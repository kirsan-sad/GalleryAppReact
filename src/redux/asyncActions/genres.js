import { setGenres, putGenres, deleteGenre, addGenre } from "../actionsCreater/genresActions";
import axios from 'axios';

export const fetchGenresAsync = () => {
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_BASE_API_URL}Genres`)
       .then(({ data }) => {
          dispatch(setGenres(data));
        });
    };
};

export const putGenreAsync = (id, putData) => {
    return (dispatch) => {
        axios.put(`${process.env.REACT_APP_BASE_API_URL}Genres/${id}`, putData, {
            headers: {
                'Content-Type': 'application/json',
            }})
       .then(({ data }) => {
          dispatch(putGenres(data));
        })
        .catch(({response}) =>
        console.log("error:", response)
        );
    };
};

export const deleteGenreAsync = (id) => {
    return (dispatch) => {
        axios.delete(`${process.env.REACT_APP_BASE_API_URL}Genres/${id}`)
       .then((data) => {
          dispatch(deleteGenre(id));
        })
        .catch(({response}) =>
            console.log("error:", response.data.errors.Description)
        );
    };
};

export const addGenreAsync = (genre) => {
    return (dispatch) => {
         axios.post(`${process.env.REACT_APP_BASE_API_URL}Genres/`, genre, {
            headers: {
                'Content-Type': 'application/json',
            }})
        .then(({ data }) => {
            dispatch(addGenre(data));
          })
          .catch(({response}) =>
              console.log("error:", response.data.errors.Description)
          );
    };
};