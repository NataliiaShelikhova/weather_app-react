
import React from "react";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    function handleResponce(responce) {
        return
    }
    let ApiKey = "3a9443f3da6d108da14d3f4bfbedd54c";
    let longitude = props.coord.lon ;
    let latitude =  props.coord.lat ;

    let ApiUrl = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;
    axios.get(ApiUrl).then(handleResponce);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="DayWeek">
                        
                        Monday

                    </div>
                   <img href="https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png" alt="Rain" />
                    <div>
                        <span className="WeatherForecast-Temperature-Min">11</span>
                        ...
                        <span className="WeatherForecast-Temperature-Max">19</span>
                    </div>

                </div>

            </div>

        </div>
    )
}