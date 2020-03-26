import React, {useState} from 'react';

import'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Weather from "./component/Weather/Weather";
import Covid from "./component/Covid/Covid";
import Header from "./component/Header";

function App() {
    const [country, setCountry] = useState('');

    const handleCountryChange = (country) => {
        setCountry(country);
    };

  return (
    <div className="App">
        <Header handleCountryChange={handleCountryChange}/>
        {/*<Weather />*/}
        <Covid country={country}/>
    </div>
  );
}

export default App;
