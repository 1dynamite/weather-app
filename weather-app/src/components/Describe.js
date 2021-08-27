import React from 'react'
import './Describe.css'

let Describe = ({description, iconUrl}) => {
    
    return (
        <div className='container-describe'>
            <img src={iconUrl} alt="weather icon"/>
            <p>{description}</p>
        </div>
    )
}

export default Describe