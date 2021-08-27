import React from 'react'
import './DateCity.css'

let DateCity = ({location}) => {
    return (
        <div className='container-datecity'>
            <h3 className='city-name'>{location}</h3>
            <p className='date-datecity'>{new Date().toLocaleTimeString() + ', ' + new Date().toDateString()}</p>
        </div>
    )
}

export default DateCity