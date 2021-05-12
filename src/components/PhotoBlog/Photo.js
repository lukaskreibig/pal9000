import { Link } from "react-router-dom";
import "./Photo.css"

const Photo = ({ photos }) => {
    return(
        <div className="photo-container">
            <div className="polaroid">
            <Link to={`/photos/${photos.id}`}>
              <img style={{height: "250px", width: "300px"}}  alt='' src={photos.img_src} />
              <p className="photos-name">Camera Name: {photos.camera.full_name}</p>  
              <button className="btn">View Details</button>
            </Link>           
            </div>
        </div>
    )
}

export default Photo;