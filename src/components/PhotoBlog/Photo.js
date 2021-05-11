import "./Photo.css"

const Photo = ({ photos }) => {
    return(
        <div className="photo-container">
            <img alt='' src={photos.img_src} />
            <p>{photos.id}</p>
        </div>
    )
}

export default Photo;