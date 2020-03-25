import React, {Component} from "react";

import './Weather.css';

export default class WeatherList extends Component{

    farenhitToCelsius(farenhit) {
        farenhit = parseFloat(farenhit);
        return parseInt((farenhit-32) / 1.8);
    }

    render() {
        const {weatherData} = this.props;
        const {temp, feels_like, temp_min, temp_max} = weatherData.main;
        const time = new Date(weatherData.dt * 1000).toLocaleString();
        const icon = weatherData.weather[0].icon;

        return (
            <>
                <div className="weather-block">
                    {time} <br />
                    <img src={`http://openweathermap.org/img/w/${icon}.png`} style={{fontSize: '20px'}}></img>
                    Temperature: {this.farenhitToCelsius(temp)}&deg;C<br />
                    {this.farenhitToCelsius(temp_min)}&deg;C &nbsp; {this.farenhitToCelsius(temp_max)}&deg;C <br />
                    Feels: {this.farenhitToCelsius(feels_like)}&deg;C<br />
                </div>
            </>
        )
    }
}
