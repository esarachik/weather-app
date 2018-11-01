import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';


const stateToIconName = weatherState =>  weatherState ? weatherState : 'day-sunny';

const getWeatherIcon = weatherState => <WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />;

const WeatherTempertaure = ({temperature, weatherState}) => (
    <div className="WeatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` Cº`}</span>

    </div>
);

WeatherTempertaure.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTempertaure;