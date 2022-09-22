import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let tempMax = Math.round(props.data.temp.max);
        return `${tempMax}`;
    }
     function minTemp() {
        let tempMin = Math.round(props.data.temp.min);
        return `${tempMin}`;
    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "|Wed", "Thu", "Fri", "Sat"]
        return days[day];
    }
    return (
        <div>
             <div className="DayWeek">{day()}</div>
            <div>
                <WeatherIcon code={props.data.weather[0].icon} size={36} /></div>
                         <div>
                            <span className="WeatherForecast-Temperature-Min">{minTemp()}</span>
                        ...
                            <span className="WeatherForecast-Temperature-Max">{maxTemp()}</span>
                        
                        </div>                   

        </div>
    )
}