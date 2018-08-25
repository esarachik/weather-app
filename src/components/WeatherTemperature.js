import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

const stateToIconName = weatherState =>  weatherState ? weatherState : 'day-sunny';

const getWeatherIcon = weatherState => <WeatherIcons name={stateToIconName(weatherState)} size="2x" />;

const WeatherTempertaure = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature} Cº`}</span>
    </div>
);

WeatherTempertaure.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string
};

export default WeatherTempertaure;