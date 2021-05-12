import "./shop.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Banner from "./components/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import PhotoBlog from "./components/PhotoBlog/PhotoBlog";
import PhotoDetails from "./components/PhotoDetails";
import "./index.css";
import ShopList from "./components/ShopList";
import axios from "axios";
import Home from "./components/Home/Home";

export default function App() {
  const [minerals, setMinerals] = useState([]);
  const [buy, setBuy] = useState([]);

  const getMinerals = () => {
    axios
      .get(
        "https://lit-escarpment-01617.herokuapp.com/https://salty-escarpment-83550.herokuapp.com/api/rocks"
      )
      .then((response) => response.data)
      .then((data) => {
        setMinerals(data);
      });
  };

  useEffect(getMinerals, []);

  function handleBuy(value) {
    setBuy([...buy, minerals.find((mineral) => value === mineral.id)]);
  }

  function deleteBuy(e) {
    setBuy(buy.filter((element) => element.id !== e));
  }
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
      <div className="background-app">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
        <div className="shopWrapper"></div>
        <Banner />
        <Switch>
          <Route
            path="/photoblog"
            render={() => <PhotoBlog photos={photos} />}
          />
          <Route
            path="/photos/:id"
            render={(routeProps) => (
              <PhotoDetails routeProps={routeProps} photos={photos} />
            )}
          />
          <Route path="/shop">
            <ShopList
              minerals={minerals}
              handleBuy={handleBuy}
              deleteBuy={deleteBuy}
              buy={buy}
            />
          </Route>
          <Route
            exact path="/"
            render={(routeProps) => (
              <Home />
            )}
          />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
