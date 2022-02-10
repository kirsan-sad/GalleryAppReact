import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import { Grid, TextField } from '@mui/material';
import Button from '@mui/material/Button';

const useStyle = makeStyles(theme => ({
    imput:{
        marginTop: 20
    }
}));

function EditGenre({genre, setOpen, handleEditGenre}) {
    const { index, name, description } = genre;
    const [genreName, setGenreName] = useState(name);
    const [genreDescription, setGenreDescription] = useState(description);
    const classes = useStyle();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(genreName && genreDescription)
        {
            const genreForUpdate = JSON.stringify({
                "index": index,
                "name": genreName,
                "description": genreDescription
            });

            handleEditGenre(index, genreForUpdate);
            setOpen(false);
        }
    };

  return <form onSubmit={handleSubmit}>
      <Grid container>
      <TextField 
            onChange={(e) => setGenreName(e.target.value)}
            className={classes.imput}
            variant="outlined"
            label="Name"
            value={genreName}
            fullWidth
            required
            />
            <TextField 
            onChange={(e) => setGenreDescription(e.target.value)}
            className={classes.imput}
            variant="outlined"
            label="Description"
            value={genreDescription}
            fullWidth
            />
       </Grid>
       <Button type="submit">Save</Button>
       <Button onClick={() => setOpen(false)}>Cancel</Button> 
  </form>;
}

export default EditGenre;
