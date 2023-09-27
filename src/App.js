import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {

  const apiKey = 'aaa9c7fa8abe73e9f574c9544651762b'

  const [data, setData] = useState({});

  const getWeatherDetails = () => {
    const apiURL = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=' +apiKey
    axios.get()
  }

  return (
    <>
      <div className="col-md-12">
        <div className="weatherBg">
          <h1 className="heading">Weather App</h1>

          <div className="d-grid gap-1 col-3 mt-3">
            <input type="text" className="search-Location" />
            <button className="btn btn-primary">Search</button>
          </div>
          
          <div className="weatherResult">
            {/* <div className="logobox">
              <img className="logo" src="https://plus.unsplash.com/premium_photo-1681488162344-542e0b7c3378?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"/>
            </div> */}
            
            <div className="txt1">
              <h5 className="city">Karachi,Pakistan</h5>
            </div>

            <div className="txt2">
              <h6 className="temp">35°C</h6>
            </div>
            
          </div>

        </div>

      
      </div>
    </>
  );
};

export default App;
