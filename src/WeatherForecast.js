
import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    useEffect( () => {
        setLoaded(false);
        
    }, [props.coord])

    function handleResponce(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    
    }
    if (loaded) {
        return (
          <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} url={props.data.iconUrl} />
                        
                                </div>
                            );

                        } else {
                            return null;
                        }
                       
                    })}
                

            </div>

        </div>
    )
    

    } else {
    let apiKey = "01ae8315a818ed90119f38b049928c5d";
    let longitude = props.coord.lon ;
    let latitude =  props.coord.lat ;

    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponce);
        
    return (null);
        
    
      

    }
   
}