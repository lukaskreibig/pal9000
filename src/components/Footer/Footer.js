import React from "react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [weather, setWeather] = useState([]);

  //    useEffect(() => {

  //    }, [])

  const getWeather = () => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=hmQzrNOsgpVUxXUO72gZNvkHopWAcDFfpHiCUlw1&feedtype=json&ver=1.0"
    )
      .then((response) => response.json())
      .then((data) => setWeather(data[0]));
    // {
    //   const {
    //       sol_keys,
    //       validity_checks,
    //       ...solData
    //   } = data

    //   return Object.entries(solData).map(([sol, data]) => {
    //       return {
    //           sol: sol,
    //           maxTemp: data.AT.mx,
    //           minTemp: data.AT.mn,
    //           windSpeed: data.HWS.av,
    //           windDirectionDegrees: data.WD.most_common.compass_degrees,
    //           windDirectionCardinal: data.WD.most_common.compass_point,
    //           date: new Date(data.First_UTC)
    //       }
    //   })

    console.log(weather);
  };
  // getWeather().then(sols => {
  //     console.log(sols)
  // })

  return (
    <>
      <div className="wrapper">
        {/* Footer wrapper */}
        <div className="footer-wrapper">
          {/* Orbiting planets */}
          <div className="logo">
            <div className="spinner-box">
              <div className="solar-system">
                <div className="earth-orbit orbit">
                  <div className="planet earth"></div>
                  <div className="venus-orbit orbit">
                    <div className="planet venus"></div>
                    <div className="mercury-orbit orbit">
                      <div className="planet mercury"></div>
                      <div className="sun"></div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="weather"></div>
        </div>
      </div>
    </>
  );
}
