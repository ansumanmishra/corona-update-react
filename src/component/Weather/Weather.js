import React, {Component} from "react";

import WeatherList from './WeatherList';
import WeatherCity from "./WeatherCity";
import WeatherPreSelectedList from "./WeatherPreSelectedList";

class Weather extends Component {
    state = {
        weatherData: [],
        city: 'Bern',
        preSelectedCities: ['Bern', 'Bhubaneswar', 'Cuttack', 'Hyderabad'],
    };

    getWeatherDataFromApi() {
        const url = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=imperial&APPID=246d81ad63dba613bf2967fe6b3f0192`;
        fetch(url)
            .then(response => response.json())
            .then( res => {
                this.setState({
                    ...this.state,
                    weatherData: res.list,
                })
            });
    }

    componentDidMount() {
        this.getWeatherDataFromApi(this.state.city);
    }

    handleCityChange = (city) => {
        this.setState({
            city: city,
        }, () => {
            this.getWeatherDataFromApi();
        });

    };

    handlePreCityClick = (city) => {
        this.setState({
            city: city,
        }, () => {
            this.getWeatherDataFromApi();
        });
    }

    render() {
        let weather = 'No data found'
        if (this.state.weatherData) {
            weather = this.state.weatherData.map(w => {
                return (
                    <WeatherList key={w.dt} weatherData={w}/>
                )
            });
        }

        return (
            <>
                <div className="container">
                    <div>
                        <div style={{width: '50%', display: 'inline-block'}}><WeatherCity handleCityChange={this.handleCityChange} city={this.state.city}/></div>
                        <div style={{width: '50%', display: 'inline-block'}}><WeatherPreSelectedList preSelectedCities={this.state.preSelectedCities} preCityCLick={this.handlePreCityClick}/></div>
                        <h4>{this.state.city}</h4>
                    </div>
                    <div className="weather-list-block">
                        <div className="row">{weather}</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Weather;
