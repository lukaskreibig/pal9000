import { Link } from "react-router-dom";

const PhotoDetails = ({ photos, routeProps }) => {
    const foundMatch = photos.find(
        (photo) => photo.id === +routeProps.match.params.id
      );
      console.log(foundMatch)
    return(
        <div className="photo-container">
            <Link to="/photos/:id">
              <img alt='' src={foundMatch.img_src} />
            </Link>
          <p>{foundMatch.id}</p>
        </div>
    )
}

export default PhotoDetails;