import React, {useState} from 'react';
import CheckboxesGroup from "./CheckboxesGroup";
import {useSelector} from "react-redux";

import { makeStyles } from '@material-ui/core';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const useStyle = makeStyles(theme => ({
    imput:{
        marginTop: 20
    }
}));

const EditPhoto = ({photo, setOpen, handleEdit}) => {
    const [photoTitle, setPhotoTitle] = useState(photo.title);
    const [genreIds, setGenreIds] = useState([...photo.genres]);
    const genres = useSelector((state) => state.genres.genres);
    const classes = useStyle();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(photoTitle && genreIds)
        {
            if(photoTitle && genreIds)
            {
                const photoForUpdate = JSON.stringify({
                    "index": photo.index,
                    "title": photoTitle,
                    "genres": genreIds
                });
    
                handleEdit(photo.index, photoForUpdate);
                setOpen(false);
            } 
        }
    };

    return <form onSubmit={handleSubmit}>
    <Grid container>
       <TextField 
          onChange={(e) => setPhotoTitle(e.target.value)}
          className={classes.imput}
          variant="outlined"
          label="Name"
          value={photoTitle}
          fullWidth
          required
        />
        <CheckboxesGroup genres={genres} genreIds={genreIds} setGenreIds={setGenreIds}/>
     </Grid>
     <Button type="submit">Save</Button>
     <Button onClick={() => setOpen(false)}>Cancel</Button> 
</form>;
}

export default EditPhoto