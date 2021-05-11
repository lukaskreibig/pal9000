import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PhotoBlog from './components/PhotoBlog/PhotoBlog';
import PhotoDetails from './components/PhotoDetails';
import "./index.css";

export default function App() {
  const [photos, setPhotos] = useState([]);

  const getImages = () => {
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=MrtkEfpCKuSFETDqfHPzxYBd2CW09acPNjkJrh9X"
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data.photos));
  };  
  useEffect(getImages, []);

  return (
    <div className="wrapper">
      <Header />          
      <Switch>
      {/*  <Route exact path='/' component={Home} /> */}     
      <Route
          path='/photoblog'
          render={() => (
            <PhotoBlog photos={photos} />
          )}
        />
      <Route
          path='/photos/:id'
          render={(routeProps) => (
            <PhotoDetails routeProps={routeProps} photos={photos} />
          )}
        />
      {/* <Route path='/RockShop' component={RockShop} />  */} 
      {/* <Route path='/contact' component={Contact} />  */}  
      </Switch>
      <Footer />
    </div>
  )
}
