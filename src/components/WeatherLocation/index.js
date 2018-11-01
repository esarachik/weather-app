import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

const WeatherLocation = () => (
	<div className="weatherLocation">
		<Location city={"Buenos Aires"} />
		<WeatherData />
	</div>        
);
 
export default WeatherLocation;
