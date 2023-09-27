import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {

  const apiKey = 'aaa9c7fa8abe73e9f574c9544651762b'

  const [data, setData] = useState({});
  const [inputCity, setInputCity] = useState('');

  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log('response', res.data)
      setData(res.data);
    }).catch((err) => {
      console.log('err', err)
    })
  }

  const handleChangeInput = (e) => {
    console.log('value', e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }

  return (
    <>
      <div className="col-md-12">
        <div className="weatherBg">
          <h1 className="heading">Weather App</h1>

          <div className="d-grid gap-1 col-3 mt-3">
            <input type="text" className="search-Location" onChange={handleChangeInput} value={inputCity}/>
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>
          </div>
          
          <div className="weatherResult">
            
            <div className="txt1">
              <h5 className="city">{data.name}</h5>
            </div>

            <div className="txt2">
              <h6 className="temp">{((data?.main?.temp)-273.15) .toFixed(2)}°C</h6>
            </div>
            
          </div>

        </div>

      
      </div>
    </>
  );
};

export default App;
