import React, { useState } from "react";
import "./Weather.css";
import axios    from "axios";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            iconUrl: "/",
            description: response.data.weather[0].description,
            data: "Friday"
        })
        
       
    }
    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                       <input type="search" placeholder="Type a city..." className="Form-control w-100" autoFocus="on" />
                    </div>
                    <div className="col-3">
                       <input type="submit" value="Search" className="btn w-100" />
                    </div>
                </div>
            </form>
                <h1>{weatherData.city}</h1>
            <ul>
                    <li>{weatherData.data}</li>
                    <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src="{weatherData.iconUrl}" alt='weather icon' />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>

                </div>
                <div className="col-6">
                    <ul>
                        
                            <li>Humidity {weatherData.humidity}%</li>
                            <li>Wind {weatherData.wind}km/h</li>
                    </ul>

                </div>

            </div>
        </div>
    )

    }
    else {
        const apiKey = "3a9443f3da6d108da14d3f4bfbedd54c";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
    return "Loading..."
    }
}