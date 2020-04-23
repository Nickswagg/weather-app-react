import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "zipcodes";
import $ from "jquery";


function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-md-4 box-middle">
          <h2 className="title">
            Weather App&nbsp;&nbsp;<i className="fas fa-cloud"></i>
          </h2>
          <label>Type in Your ZIPCODE to get weather :</label>
          <input type="text" className="form-control" id="zipinput"></input>
          <button
            type="button" onclick= "getzip()"
            id="zipweather"
            className="btn btn-primary btn-lg"
          >
            GET WEATHER
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
