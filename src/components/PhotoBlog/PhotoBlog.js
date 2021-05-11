import { useEffect, useState } from "react";
import Photo from "./Photo";

const PhotoBlog = () => {
  const [photos, setPhotos] = useState([]);

  const getImages = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=MrtkEfpCKuSFETDqfHPzxYBd2CW09acPNjkJrh9X"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  };
  console.log(photos);

  useEffect(getImages, []);

  return (
    <div className="photoblog-container">
      {photos.map((photos) => (
        <Photo photos={photos} />
      ))}      
    </div>
  );
};

export default PhotoBlog;
