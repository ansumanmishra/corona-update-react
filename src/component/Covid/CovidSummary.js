import React from "react";

const CovidSummary = ({summary}) => {
    if (!summary.length) {
        return <></>;
    }
    const cases = summary[0].cases;
    return (
        <>
            <div className="summary-individual-block">
                <p>new: <br/>
                {cases.new}</p>
                <p>active: <br/>
                {cases.active}</p>
                <p>critical: <br/>
                {cases.critical}</p>
                <p>recovered: <br/>
                {cases.recovered}</p>
                <p>total: <br/>
                {cases.total}</p>
            </div>
        </>
    )
};

export default CovidSummary;
