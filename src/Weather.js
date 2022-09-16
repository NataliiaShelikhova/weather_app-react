import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";



export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultcity);
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000)
        })
        
       
    }
    
    function handleSubmit(event) {
        event.preventFefault();
        search();
    }
    function handleCity(event) {
        setCity(event.target.value);
        
    }
    function search() {
      const apiKey = "3a9443f3da6d108da14d3f4bfbedd54c";
    
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(handleResponse)
    }
    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9" >
                       <input type="search" placeholder="Type a city..." className="Form-control w-100" autoFocus="on" onChange={handleCity} />
                    </div>
                    <div className="col-3">
                       <input type="submit" value="Search" className="btn w-100"  />
                    </div>
                </div>
                </form>
                <WeatherInfo data={weatherData} />
             
        </div>
    )

    }
    else {
        search();
    return "Loading..."
    }
    
}