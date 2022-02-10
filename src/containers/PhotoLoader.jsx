import React from 'react';
import ContentLoader from "react-content-loader"

const PhotoLoader = (props) => (
    <ContentLoader 
    speed={1}
    width={270}
    height={270}
    viewBox="0 0 270 270"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="20" rx="0" ry="0" width="250" height="250" />
  </ContentLoader>
);

export default PhotoLoader;
