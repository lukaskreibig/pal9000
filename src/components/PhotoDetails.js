import { Link } from "react-router-dom";

const PhotoDetails = ({ photos, routeProps }) => {
    const foundMatch = photos.find(
        (photo) => photo.id === +routeProps.match.params.id
      );
   
    return(
        <div className="photo-container-details">
           <div className="polaroid-details">         
              <img style={{height: "250px", width: "320px"}} alt={foundMatch.rover.name} src={foundMatch.img_src} />              
              <p className="photo-details">Name: {foundMatch.rover.name}</p>
              <p className="photo-details">Landing Date: {foundMatch.rover.landing_date}</p>
              <p className="photo-details">Launch Date: {foundMatch.rover.launch_date}</p>
              <p className="photo-details">Camera Name: {foundMatch.camera.full_name}</p>  
              <Link to="/photoblog">  
                <button className="btn">Go back to Gallery</button>
              </Link>            
            
             
              </div>            
        </div>
    )
}

export default PhotoDetails;