import React from 'react';
import { useSelector } from "react-redux";
import {useParams} from "react-router-dom";
import PhotoItem from '../containers/PhotoItem';

import { SRLWrapper } from "simple-react-lightbox";

const PhotosByGenre = () => {
  const {id} = useParams();
  const genres = useSelector((state) => state.genres.genres);
  const photos = genres.find(genre => genre.index == id).photos;

  return <SRLWrapper>
      <div className="ui grid container">
          
           {
             photos.map((id) => {
             return <PhotoItem id={id} key={id} /> 
             })
           }
          
        </div>
        </SRLWrapper>;
};

export default PhotosByGenre;
