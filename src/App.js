import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'moment';
import $ from "jquery";

class App extends Component {
  componentDidMount( ){

    // var zipcode_to_timezone = require( 'zipcode-to-timezone' );
    // var tz = zipcode_to_timezone.lookup($('#zipinput').val());
    // console.log(tz);  

    $("#zipweather").click(function() {

    var zipcode_to_timezone = require( 'zipcode-to-timezone' );
    var tz = zipcode_to_timezone.lookup($('#zipinput').val());
    console.log(tz);  
    var mynumber = $('#zipinput').val();
    // $('#zipinput').val('');
    console.log(mynumber);
    $.get("https://api.openweathermap.org/data/2.5/weather?zip=" +mynumber+ 
    ",us&units=imperial&appid=8e54c1c75f86eaf2c6cffb36fe1a15b0", function(data){
      console.log(data);
      $("#title-city").append("City:");
      $("#name-city").append("<span>" +data.name+"</span>");
      $("#image").append('<img src="http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png">');
      $("#weather-city").append("<span>" +data.weather[0].description+"</span>");
      $("#title-temp").append("Temperature: </p>");
      $("#value-temp").append("<p>" +data.main.temp+ " °F</p>");
      $("#title-timezone").append("<p>Timezone:</p>");
      $("#value-timezone").append("<p>" +tz+ "</p>");
      
    }

     );
  });

}    
  render() { 
    return ( 
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-md-4 box-middle">
          <h2 className="title">
            Weather App&nbsp;&nbsp;<i className="fas fa-cloud"></i>
          </h2>
          <label>Type in Your ZIPCODE to get weather :</label>
          <input type="text" placeholder="Enter a 5 digits Number" className="form-control" id="zipinput"></input>
          
          <button
            type="button" 
            id="zipweather"
            className="weather-button">
            Get Weather
          </button>
        </div>
      </div>
      
      <div className="row bloc-two">
          <div className="col-md-6 offset-md-3 bloc-bellow">
              <div className="row">
                  <div className="col-md-4 col-xs-12 align-one">
                  <h3 id="title-city"></h3>
                  <h3 id="name-city"></h3>
                  <div id="image"></div>
                  <h3 id="weather-city"></h3>    
                  </div>
                  <div className="col-md-8 col-xs-12 align-two">
                  <h3 id="title-temp"></h3>
                  <h3 id="value-temp"></h3>
                  <h3 id="title-timezone"></h3>
                  <h3 id="value-timezone"></h3>

                  </div>   
              </div>      
          </div>
      </div>  
    </div>

      
    );
  }
}

export default App;
