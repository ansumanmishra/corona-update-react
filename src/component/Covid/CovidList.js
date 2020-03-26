import React, {Component} from "react";


export default class CovidList extends Component{
    render() {
        const {covid19Data} = this.props;
        return (
            <>
                <tr>
                    <td>{covid19Data.country}</td>
                    <td>{covid19Data.cases.total}  <span style={{color: '#b5b525'}}><b>({covid19Data.cases.new})</b></span></td>
                    <td>{covid19Data.deaths.total} <span style={{color: 'red'}}><b>({covid19Data.deaths.new})</b></span></td>
                    <td>{covid19Data.cases.critical}</td>
                    <td><span style={{color: 'green'}}>{covid19Data.cases.recovered}</span></td>
                    <td>{covid19Data.cases.active}</td>
                </tr>
            </>
        )
    }
}
