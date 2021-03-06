import React, {useState} from "react";

const Header = ({handleCountryChange}) => {
    const [country, setCountry] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCountryChange(country);
    };

    const handleCityChange = (e) => {
        const value = e.target.value;
        setCountry(value);
        handleCountryChange(value);
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light">
                <a className="navbar-brand">Corona Virus Update</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li style={{color: 'white'}}>
                            {/*{new Date().toLocaleString()}*/}
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={(e) => handleSubmit(e)}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Country" onChange={(e) => handleCityChange(e)} value={country} aria-label="Search" />
                    </form>
                </div>
            </nav>
        </>
    )
};

export default Header;
