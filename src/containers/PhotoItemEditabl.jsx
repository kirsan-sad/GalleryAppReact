import React, {useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import ModalGenre from './modals/ModalGenre';
import EditPhoto from "./forms/EditPhoto";
import { deletePhotoAsync, putPhotoAsync } from '../redux/asyncActions/photos';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const PhotoItemEditabl = ({id}) => {
    const dispatch = useDispatch();

    const photos = useSelector((state) => state.allPhotos.photos);
    const photo = photos.find(p => p.index === id);
    const [open, setOpen] = useState(false);

    const handleDelete = (id) => {
        if(window.confirm("Confir delete?")){
            dispatch(deletePhotoAsync(id));
        }
    };

    const handleEdit = (index, photoForUpdate) => {
        console.log(index, photoForUpdate)
        dispatch(putPhotoAsync(index, photoForUpdate));
    }
    
        const { title, name } = photo;
        const imageUrl = `${process.env.REACT_APP_IMAGES_THUMB_URL}${name}`;
        return (
                <div className="card">
                  <div className="image">
                      <IconButton color="primary" aria-label="edit photo" component="span" onClick={() => setOpen(true)}>
                          <ModeEditIcon />
                      </IconButton>
                      <IconButton color="primary" aria-label="delete photo" component="span" onClick={() => handleDelete(id)}>
                          <DeleteIcon />
                      </IconButton>
                      <div>
                          <img src={imageUrl} alt={title} style={{width: "230px"}}/>
                      </div>
                  </div>
                  <ModalGenre title="Edit" open={open} >
                      <EditPhoto setOpen={setOpen} handleEdit={handleEdit} photo={photo}/>
                  </ModalGenre>  
                </div>
              );
}

export default PhotoItemEditabl