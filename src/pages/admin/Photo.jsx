import React, { useState } from 'react';
import { uploadPhotoAsync } from '../../redux/asyncActions/photos';
import { useSelector, useDispatch } from "react-redux";
import ModalGenre from "../../containers/modals/ModalGenre";
import AddPhoto from '../../containers/forms/AddPhoto';
import PhotoItemEditabl from '../../containers/PhotoItemEditabl';

import Button from '@mui/material/Button';


const Photo = () => {
    const dispatch = useDispatch();

    const genres = useSelector((state) => state.genres.genres);
    const isLoaded = useSelector((state) => state.allPhotos.isLoaded);
    const photos = useSelector((state) => state.allPhotos.photos);
    const [open, setOpen] = useState(false);

    const handlePostPhoto = (photo, fileImage) => {
        dispatch(uploadPhotoAsync(photo, fileImage));
    }

    return (
    <div className="ui grid container">
        <Button variant="contained" onClick={() => setOpen(true)}>Add new Photo</Button>
          <div className="ui grid container">
               {
                  photos.map((photo) => {
                      return <PhotoItemEditabl id={photo.index} key={photo.index} /> 
                  })
               }
          </div>
        <ModalGenre title="Add new Photo" open={open} >
              <AddPhoto setOpen={setOpen} handlePostPhoto={handlePostPhoto} genres={genres} />
        </ModalGenre>
    </div>
    )
}

export default Photo