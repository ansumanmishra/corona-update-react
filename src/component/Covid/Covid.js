import React, {Component} from "react";
import CovidList from "./CovidList";
import CovidSummary from "./CovidSummary";

import './Covid.css';

export default class Covid extends Component {

    preventionData = [
      'Plan and calculate your essential needs for the next three weeks and get only what is bare minimum needed.',
      'Be considerate : While buying essentials\n',
      'Lockdown means LOCKDOWN! Avoid going out unless absolutely necessary. Stay safe!  \n',
      'Be compassionate! Help those in need like the elderly and poor. They are facing a crisis you cannot even imagine!  \n',
      'Panic mode : OFF! ❌ ESSENTIALS ARE ON! ✔️  \n',
      'If you have symptoms and suspect you have coronavirus - reach out to your doctor or call state helplines. 📞 Get help.  \n',
      'Help the medical fraternity by staying at home!  \n',
      'Going out to buy essentials? Social Distancing is KEY! Maintain 2 metres distance between each other in the line.   \n',
        'Stand Against FAKE News and WhatsApp Forwards! Do NOT ❌ forward a message until you verify the content it contains. ',
        'The hot weather will not stop the virus! You can! Stay home, stay safe.',
        'Avoid going out during the lockdown. Help break the chain of spread.',
        'Do not Hoard groceries and essentials. Please ensure that people who are in need do not face a shortage because of you!',
    ];

    state = {
        covid19Data: '',
        country: '',
        summary: '',
        loading: true,
    };

    getRandomPreventionQuote = () => {
        return this.preventionData[Math.floor(Math.random() * this.preventionData.length)];
    }

    randomPreventionQuote = this.getRandomPreventionQuote();

    componentDidMount() {
        this.getCovid19Data();
    }

    getCovid19Data() {
        this.setState({
            ...this.state,
            loading: true,
        });
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
                    loading: false,
                });

                this.randomPreventionQuote = this.getRandomPreventionQuote();

            })
            .catch(err => {
                console.error(err);
            });
    }

    handleShowAll = () => {
        this.getCovid19Data();
    }

    render() {
        let covidData;
        let covidSummary = '';

        if (this.state.covid19Data) {
            covidData = this.state.covid19Data.filter( data => {
                if (this.props.country) {
                    if (data.country.toLowerCase().includes(this.props.country)) {
                        return data;
                    }
                } else {
                    return data;
                }
            }).map(w => {
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
                <div style={{color: 'deeppink', marginTop: '20px', marginBottom: '20px', fontWeight: 'bold'}}>{this.randomPreventionQuote}</div>
                {covidSummary}
                <div className="container">
                    <div>
                        <div style={{textAlign: 'right', marginTop: '20px',}}>
                            <i className="fas fa-sync-alt" title="reload" onClick={this.handleShowAll} style={{fontSize: '20px', cursor: 'pointer', color: 'green', marginRight: '10px'}}></i>
                        </div>
                        <table className="table table-striped table-bordered">
                            <thead className="thead-light">
                            <tr>
                                <th>Country 🏴󠁧󠁢󠁳󠁣󠁴󠁿</th>
                                <th>Cases 😷 </th>
                                <th>Deaths ⚰️</th>
                                <th>Critical 💉</th>
                                <th>Recovered 🏃🏾</th>
                                <th>Active 🏥</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.loading ?  (
                                    <tr><td colSpan="6">{this.state.loading ? ( <span>Loading...</span>) : ('')}</td></tr>
                                ) : ( <>{covidData}</> )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}
