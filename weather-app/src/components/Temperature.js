import React from 'react'
import './Temperature.css'

let Temperature = ({temp}) => {
    return (
        <div className='container-temperature'>
            <div className='circle'></div>
            <h1 style={{padding: '0rem 0.5rem', marginBottom: '0.5rem'}}>{temp}</h1>
        </div>
    )
}

export default Temperature