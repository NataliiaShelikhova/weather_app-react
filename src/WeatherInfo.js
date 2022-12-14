import React from "react";
import CurrentDate from "./CurrentDate";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
               <h1>{props.data.city}</h1>
            <ul>
                    <li>
                        <CurrentDate date={props.data.date} />
                    </li>
                    <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <WeatherIcon code={props.data.icon}  />
                       </div>
                        <div className="col-6" >
                    <WeatherTemperature celsius={props.data.temperature} />
                        </div>   
                    </div>
                </div>
                <div className="col-6">
                    <ul className="list">
                        
                            <li>Humidity {props.data.humidity}%</li>
                            <li>Wind {props.data.wind}km/h</li>
                    </ul>

                </div>

            </div>

        </div>
    )
}