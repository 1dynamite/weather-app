import React from 'react'
import './WeatherDetails.css'

let WeatherDetails = (props) => {
    return (
        <div className='container'>
            <p className='header'>Weather Details</p>
            <div className='weather-detail'>
                <p className='label'>Cloudy</p>
                <p>{props.cloudy + '%'}</p>
            </div>
            <div className='weather-detail'>
                <p className='label'>Humidity</p>
                <p>{props.humidity + '%'}</p>
            </div>
            <div className='weather-detail'>
                <p className='label'>Wind</p>
                <p>{props.wind + 'm/s'}</p>
            </div>
            <div className='weather-detail'>
                <p className='label'>Rain</p>
                <p>{props.rain + 'mm'}</p>
            </div>
        </div>
    )
}

export default WeatherDetails