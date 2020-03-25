import React, {Component} from "react";

export default class WeatherPreSelectedList extends Component {
    render() {
        const {preSelectedCities, preCityCLick} = this.props;

        return (
            <>
                {
                    preSelectedCities.map( city => <button className="btn btn-success" key={city} onClick={() => preCityCLick(city)}>{city}</button>)
                }
            </>
        )
    }
}
