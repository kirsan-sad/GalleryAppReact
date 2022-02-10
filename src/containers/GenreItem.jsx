import React from 'react'
import { useSelector } from "react-redux";
import PhotoItem from './PhotoItem';
import PhotoLoader from "./PhotoLoader";
import { Link } from "react-router-dom";

const GenreItem = ({ genre }) => {
  const isLoaded = useSelector((state) => state.allPhotos.isLoaded);
  const { index, name, photos } = genre;

    return (
      <div>
         <Link to={`/genre/${index}`}>
           <h2 className="ui center aligned header" style={{padding: "10px 0 5px"}}>{name}</h2>
          </Link>
          
          <div className="ui four cards">
            {isLoaded ? photos.map((photo, index) => {
               if(index < 4){
                 return <PhotoItem key={photo} id={photo}/>;
                }
            }) : Array.from(Array(4), (_, i) => <PhotoLoader key={i} />)}
          </div>
          
      </div>
    );
}

export default GenreItem
