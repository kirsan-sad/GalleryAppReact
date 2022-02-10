import React, {useState} from 'react';

import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup({genres, genreIds, setGenreIds}) {
  const [isChecked, setIsChecked] = useState(genres.map((genre) => {
      if(genreIds.includes(genre.index)){
        return true;
      }
      return false;
    }));

  const handleChange = (event, position) => {
      const id = +event.target.name;
      
      if(!genreIds.includes(id))
      {
        setGenreIds([...genreIds, id]);
      } else {
        setGenreIds(genreIds.filter(genreId => genreId !== id));
      }

      const updatedCheckedState = isChecked.map((item, index) =>
        index === position ? !item : item
      );
      setIsChecked(updatedCheckedState);
  };

 const error = genreIds.length < 1;

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl 
          sx={{ m: 3 }} 
          component="fieldset" 
          variant="standard" 
          required 
          error={error}
       >
        <FormLabel component="legend">Pick the genres</FormLabel>
        <FormGroup>
          {
              genres.map((genre, index) => {
                  return <FormControlLabel control={<Checkbox onChange={(e) => handleChange(e, index)} checked={isChecked[index]} name={genre.index}/>} label={genre.name} key={genre.index} />
              })
          }
        </FormGroup>
        <FormHelperText>Min 1 genre required</FormHelperText>
      </FormControl>
    </Box>
  );
}
