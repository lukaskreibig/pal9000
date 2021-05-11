import { Link } from "react-router-dom";
import "./Photo.css"

const Photo = ({ photos }) => {
    return(
        <div className="photo-container">
            <Link to={`/photos/${photos.id}`}>
              <img alt='' src={photos.img_src} />
            </Link>           
        </div>
    )
}

export default Photo;