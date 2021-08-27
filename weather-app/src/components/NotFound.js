import React from 'react'
import sadCloud from './sad-cloud.png'
import  './NotFound.css'

let NotFound = () => {
    return (
        <div className='container'>
            <div style={{textAlign: 'center'}}>
                <img style={{width: '10rem'}} src={sadCloud} alt='sad cloud'/>
                <h2>Oops...</h2>
                <h3>Location not found</h3>
                <p>Please try a different location</p>
            </div>
        </div>
    )
}

export default NotFound