import React, {Component} from "react";

export default class WeatherCity extends Component {
    state = {
        city: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleCityChange(this.state.city);
    }

    render() {
        return (
            <>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <div className="form-group" style={{width: '200px', textAlign: 'right'}}>
                        <label htmlFor="city"></label>
                        <input type="text" placeholder="Enter City" className="form-control" id="city" onChange={(e) => this.handleInputChange(e)} value={this.state.city}/>
                    </div>

                </form>
            </>
        )
    }

    handleInputChange = (e) => {
        this.setState({
            city: e.target.value,
        })
    }
}
