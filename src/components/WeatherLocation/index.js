import React,  { Component } from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import './styles.css';

const data = {
	temperature: 5, 
	weatherState: "cloud", 
	humidity: 10, 
	wind: '10 m/s'
}
const data2 = {
	temperature: 5, 
	weatherState: "day-sunny", 
	humidity: 10, 
	wind: '10 m/s'
}

class WeatherLocation extends Component {
	constructor(){
		super();
		this.state = {
			city: 'Buenos Aires',
			data: data
		};
	}
	handleUpdateClick = () =>  {
		this.setState({city: 'Buenos Aires!', data: data2})
	}
	render(){
		const { city, data } = this.state;
		return(
			<div className="weatherLocation">
				<Location city={city} />
				<WeatherData data={data}></WeatherData>
				<button onClick={this.handleUpdateClick}>Actualizar</button>
			</div>        
		);
	}
}
 
export default WeatherLocation;
