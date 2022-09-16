import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                       <input type="search" placeholder="Type a city..." className="Form-control" />
                    </div>
                    <div className="col-3">
                       <input type="submit" value="Search" className="btn" />
                    </div>
                </div>
            </form>
            <h1>CITY</h1>
            <ul>
                <li>Friday 15:00</li>
                <li>rain</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="/" alt='weather icon' />
                    6°C

                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation 15%</li>
                        <li>Humidity 70%</li>
                        <li>Wind 10km/h</li>
                    </ul>

                </div>

            </div>
        </div>
    )
}