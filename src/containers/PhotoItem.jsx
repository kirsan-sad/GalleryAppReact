import React from 'react'
import { useSelector } from "react-redux";

import { SRLWrapper } from "simple-react-lightbox";

const PhotoItem = ({id}) => {
    const photos = useSelector((state) => state.allPhotos.photos);
    const photo = photos.find(p => p.index === id);
    
        const { title, name } = photo;
        const imageUrl = `${process.env.REACT_APP_IMAGES_THUMB_URL}${name}`;
        const fullImageUrl = `${process.env.REACT_APP_IMAGES_URL}${name}`;
        return (
                <div className="card">
                  <div className="image" style={{padding: "10px"}}>
                    <div>
                      <a href={fullImageUrl}>
                        <img src={imageUrl} alt={title} style={{width: "230px"}}/>
                      </a>
                      </div>
                  </div>
                </div>
              );
}

export default PhotoItem
