import React, {Component} from "react";
import CovidList from "./CovidList";
import CovidSummary from "./CovidSummary";

import './Covid.css';

export default class Covid extends Component {

    state = {
        covid19Data: '',
        country: '',
        summary: ''
    }

    componentDidMount() {
        this.getCovid19Data();
    }

    getCovid19Data() {
        const url = this.props.country ? `https://covid-193.p.rapidapi.com/statistics?country=${this.props.country}` : 'https://covid-193.p.rapidapi.com/statistics';
        fetch(url, {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'covid-193.p.rapidapi.com',
                'x-rapidapi-key': 'a316a440c7mshef26a6ba017b84dp134470jsnad309b4509c1',
            }
        })
            .then(response => response.json())
            .then(data => {
                let covid19Data= data.response.sort( (a, b) => parseInt(b.cases.total, 10) - parseInt(a.cases.total, 10));
                let summary = covid19Data.filter(res => res.country === 'All');
                covid19Data = covid19Data.filter(res => res.country !== 'All');

                this.setState({
                    ...this.state,
                    covid19Data,
                    summary,
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.country !== this.props.country) {
            this.getCovid19Data();
        }
    }

    handleCountyChange = (e) => {
        this.setState({
            ...this.state,
            country: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getCovid19Data();
    }

    handleShowAll = () => {
        this.setState({
            ...this.state,
            country: '',
        }, () => {
            this.getCovid19Data();
        });
    }

    render() {
        let covidData;
        let covidSummary = '';

        if (this.state.covid19Data) {
            covidData = this.state.covid19Data.map(w => {
                return (
                    <CovidList covid19Data={w} key={w.country}/>
                )
            });
            if (this.state.summary.length) {
                covidSummary = <div className="covid-block"><CovidSummary summary={this.state.summary}/></div>;
            }
        }

        return (
            <>
                {covidSummary}
                <div className="container">
                    <div>
                        <div style={{textAlign: 'right', marginTop: '20px', marginBottom: '20px'}}><button className="btn btn-success" onClick={this.handleShowAll}>Show All</button></div>
                        <table className="table table-striped table-bordered">
                            <thead className="thead-light">
                            <tr>
                                <th>Country</th>
                                <th>Cases</th>
                                <th>Deaths</th>
                                <th>Critical</th>
                                <th>Recovered</th>
                                <th>Active</th>
                            </tr>
                            </thead>
                            <tbody>
                                {covidData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
