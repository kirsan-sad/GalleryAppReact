import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { Grid, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    imput:{
        marginTop: 20
    }
}));

function AddGenre(props) {
    const [genreName, setGenreName] = useState("");
    const [genreDescription, setGenreDescription] = useState("");
    const { setOpen, handlePostGenre } = props;
    const classes = useStyle();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(genreName && genreDescription)
        {
            const genre = JSON.stringify({
                "name": genreName,
                "description": genreDescription
            });
            handlePostGenre(genre);
            setOpen(false);
        }
    };

    return <>
            <form onSubmit={handleSubmit}>
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
            </form>
    </>;
}

export default AddGenre;
