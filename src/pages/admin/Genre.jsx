import React, { useEffect, useState } from 'react';
import { addGenreAsync } from '../../redux/asyncActions/genres';
import GenreItemWithoutPhotos from '../../containers/GenreItemWithoutPhotos';
import { useSelector, useDispatch } from "react-redux";
import ModalGenre from "../../containers/modals/ModalGenre";
import AddGenre from '../../containers/forms/AddGenre';

import Button from '@mui/material/Button';

const Genre = () => {
    const dispatch = useDispatch();

  /*     useEffect(() => {
        dispatch(fetchGenresAsync());
    }, []); */

    const genres = useSelector((state) => state.genres.genres);
    const [open, setOpen] = useState(false);

    const handlePostGenre = (genre) => {
        dispatch(addGenreAsync(genre));
    }

  return (
    <div className="ui grid container">
        <Button variant="contained" onClick={() => setOpen(true)}>Add new Genre</Button>

        <table className="ui single line table">
            <thead>
                <tr>
                <th>Index</th>
                <th>Name</th>
                <th>Description</th>
                <th>Photos</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            { genres.map((genre) => {
                return <GenreItemWithoutPhotos key={genre.index} genre={genre}/>
            }) }
            </tbody>
        </table>
        <ModalGenre title="Add new Genre" open={open} >
           <AddGenre setOpen={setOpen} handlePostGenre={handlePostGenre}/>
        </ModalGenre>
    </div>
    );
};

export default Genre;
