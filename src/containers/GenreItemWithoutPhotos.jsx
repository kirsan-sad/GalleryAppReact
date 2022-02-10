import React, {useState} from 'react'
import ModalGenre from './modals/ModalGenre';
import EditGenre from "./forms/EditGenre";
import { useDispatch } from "react-redux";
import { deleteGenreAsync, putGenreAsync } from '../redux/asyncActions/genres';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const GenreItemWithoutPhotos = ({ genre }) => {
    //const [editVisble, seteditVisble] = useState(false);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const { index, description, name, photos } = genre;

    const handleDeleteGenre = (id) => {
        if(window.confirm("Confir delete?")){
            dispatch(deleteGenreAsync(id));
        }
    };

    const handleEditGenre = (index, genreForUpdate) => {
        dispatch(putGenreAsync(index, genreForUpdate));
    }

    return (
            <>
                <tr>
                <td>{index}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{photos.length}</td>
                <td>
                  <IconButton color="primary" aria-label="edit genre" component="span" onClick={() => setOpen(true)}>
                      <ModeEditIcon />
                  </IconButton>
                  <IconButton color="primary" aria-label="delete genre" component="span" onClick={() => handleDeleteGenre(index)}>
                      <DeleteIcon />
                  </IconButton>
                </td>
                </tr>

            <ModalGenre title="Edit" open={open} >
                <EditGenre setOpen={setOpen} handleEditGenre={handleEditGenre} genre={genre}/>
            </ModalGenre>
            </>
    );
}

export default GenreItemWithoutPhotos
