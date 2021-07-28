import React from "react";

const Weather = props => (
 
    <div className="infoWeath">
    { props.city &&
      <div>
        <p>Location: {props.city},  {props.country}</p>
        <p>Cloud Cover: {props.cloudCover}</p>
        <p>Wind speed: {props.speed} km/h</p>
        <p>Temperature: {props.temp}</p>
        <p>Pressure: {props.pressure}</p>
        <p>Sunrise: {props.sunset}</p>
      </div>
    }
                  
        <p className="error"> {props.error }</p>  
    </div>
  );  

export default Weather;
