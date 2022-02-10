import React, {useEffect} from 'react';
import { fetchPhotosAsync } from '../redux/asyncActions/photos';
import { fetchGenresAsync } from '../redux/asyncActions/genres';
import GenreItem from '../containers/GenreItem';
import { useSelector, useDispatch } from "react-redux";
import { SRLWrapper } from "simple-react-lightbox";


const GenresList = () => {
    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres.genres);

    useEffect(() => {
        dispatch(fetchPhotosAsync());
        dispatch(fetchGenresAsync());
    }, []);

    return (
    <div className="ui grid container">
      <SRLWrapper>
        {
            genres.map((genre) => {
                if(genre.photos.length !== 0){
                    return <GenreItem key={genre.index} genre={genre}/>
                }
            })
        }
      </SRLWrapper>
    </div>
    )
}

export default GenresList
