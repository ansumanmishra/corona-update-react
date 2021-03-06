import React, {Component} from "react";


export default class CovidList extends Component{
    render() {
        const {covid19Data} = this.props;
        return (
            <>
                <tr>
                    <td><b>{covid19Data.country}</b></td>
                    <td>{covid19Data.cases.total} { covid19Data.cases.new ?  (<span style={{color: '#b5b525'}}><b>({covid19Data.cases.new})</b></span> ) : ('') }</td>
                    <td>{covid19Data.deaths.total} { covid19Data.deaths.new ? (<span style={{color: 'red'}}><b>({covid19Data.deaths.new})</b></span>) : ('') }</td>
                    <td><span style={{color: 'orange'}}><b>{covid19Data.cases.critical}</b></span></td>
                    <td><span style={{color: 'green'}}><b>{covid19Data.cases.recovered}</b></span></td>
                    <td><span style={{color: 'blue'}}><b>{covid19Data.cases.active}</b></span></td>
                </tr>
            </>
        )
    }
}
