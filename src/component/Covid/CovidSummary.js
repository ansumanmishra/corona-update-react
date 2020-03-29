import React from "react";

const CovidSummary = ({summary}) => {
    if (!summary.length) {
        return <></>;
    }
    const cases = summary[0].cases;
    return (
        <>
            <div className="summary-individual-block">
                <p>New: <br/>
                {cases.new}</p>
                <p>Active: <br/>
                {cases.active}</p>
                <p>Critical: <br/>
                {cases.critical}</p>
                <p>Recovered: <br/>
                {cases.recovered}</p>
                <p>Total: <br/>
                {cases.total}</p>
            </div>
        </>
    )
};

export default CovidSummary;
