import { Link } from "react-router-dom";

const PhotoDetails = ({ photos, routeProps }) => {
    const foundMatch = photos.find(
        (photo) => photo.id === +routeProps.match.params.id
      );
      console.log(foundMatch)
    return(
        <div className="photo-container">
            <Link to="/photodetails">
              <img alt='' src={foundMatch.photos.img_src} />
            </Link>
          <p>{foundMatch.photos.id}</p>
        </div>
    )
}

export default PhotoDetails;