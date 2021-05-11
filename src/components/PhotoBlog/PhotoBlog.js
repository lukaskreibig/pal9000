import Photo from "./Photo";

const PhotoBlog = ({ photos }) => { 
 
  return (
    <div className="photoblog-container">
      {photos.map((photos) => (
        <Photo key={photos.id} photos={photos} />
      ))}      
    </div>
  );
};

export default PhotoBlog;
