
export default function Title(props) {
    const getBannerMessage = () => {
        if (props.location === "/") {
          return "Hey there!";
        } else if (props.location === "/about") {
          return "The Team";
        } else if (props.location === "/shop") {
          return "Our Shop";
        } else if (props.location === "/photoblog") {
          return "Our Photo Blog";
        } else if (props.location.includes("/photos")) {
          return "Photo Details";   
        }    
      };
      
    return (
        <div className="wrapper">
            <h1 className="title">{getBannerMessage()}</h1>
        </div>
    )
}