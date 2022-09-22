import React from "react";

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
                        <div><img src={props.url} alt='weather icon'  /></div>
                         <div>
                            <span className="WeatherForecast-Temperature-Min">{minTemp()}</span>
                        ...
                            <span className="WeatherForecast-Temperature-Max">{maxTemp()}</span>
                        
                        </div>                   

        </div>
    )
}