import React, { useState } from 'react';
import CheckboxesGroup from "./CheckboxesGroup";

import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles';

const useStyle = makeStyles(theme => ({
    imput:{
        marginTop: 20
    }
}));

const Input = styled('input')({
    display: 'none',
  });

function AddPhoto(props) {
    const { setOpen, handlePostPhoto, genres } = props;
    const [photoTitle, setpPotoTitle] = useState("");
    const [genreIds, setGenreIds] = useState([]);
    const [file, setFile] = useState("");
    const [preview, setPreview] = useState("");
    
    console.log("genre", genreIds);
    const classes = useStyle();

    const handleSubmit = (e) => {
        e.preventDefault();

         if(photoTitle && genreIds)
        {
            const formData = new FormData();
            formData.append('Title', photoTitle);
            formData.append('Genres', genreIds);
            formData.append('uploadedFile', file);

            handlePostPhoto(formData);
            setOpen(false);
        } 
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        const url = URL.createObjectURL(file);
        setPreview(url);
    }

    return <>
            <form onSubmit={handleSubmit}>
              <Grid container>
                <TextField 
                    onChange={(e) => setpPotoTitle(e.target.value)}
                    className={classes.imput}
                    variant="outlined"
                    label="Title"
                    value={photoTitle}
                    fullWidth
                    required
                />
                <CheckboxesGroup genres={genres} genreIds={genreIds} setGenreIds={setGenreIds}/>
                <TextField
                  id="outlined-full-width"
                  label="Image Upload"
                  style={{ margin: 8 }}
                  name="upload-photo"
                  type="file"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{
                      shrink: true,
                  }}
                  variant="outlined"
                  onChange={ handleChange }
                  required
                />
                {
                  preview.length > 0 &&
                  <Card  style={{maxWidth: 345}}>
                      <CardMedia
                          component="img"
                          height="250"
                          image={preview}
                      />
                  </Card>
                }
              </Grid>
                <Button type="submit">Save</Button>
                <Button onClick={() => setOpen(false)}>Cancel</Button> 
            </form>
    </>;
}

export default AddPhoto;
