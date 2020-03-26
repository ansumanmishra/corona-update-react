import React, {useState} from 'react';

import'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Weather from "./component/Weather/Weather";
import Covid from "./component/Covid/Covid";
import Header from "./component/Header";
import Footer from "./component/Footer";

function App() {
    const [country, setCountry] = useState('');

    const handleCountryChange = (country) => {
        setCountry(country);
    };

  return (
    <div className="App">
        <Header handleCountryChange={handleCountryChange}/>
        {/*{<Weather />}*/}
        <Covid country={country}/>
        <Footer />
    </div>
  );
}

export default App;
