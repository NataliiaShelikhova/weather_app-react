import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>CITY</h1>
            <ul>
                <li>Friday 15:00</li>
                <li>rain</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src="/" alt='weather icon' />
                    <span className="temperature">6</span><span className="unit">°C</span>

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