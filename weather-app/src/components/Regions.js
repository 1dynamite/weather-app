import React from 'react'
import './Regions.css'

const regions = [
    {id:1512569,name:"Tashkent"},
    {id:1216265,name:"Samarkand"},
    {id:1484846,name:"Andijan"},
    {id:1217662,name:"Bukhara"},
    {id:453752,name:"Karakalpakstan"},
    {id:1114926,name:"Surxondaryo"},
    {id:1216311,name:"Qashqadaryo"},
    {id:1484845,name:"Fergana"},
    {id:1512770,name:"Sirdaryo"},
    {id:1513131,name:"Navoiy"},
    {id:1513157,name:"Namangan"},
    {id:1513886,name:"Jizzakh"},
    {id:1484843,name: "Khwarazm"}
]


let Region = ({updateState, dispatch}) => {

    const handleClick = (e) => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?id=' + e.target.dataset.id;
            url += '&units=metric&appid=eee7c5979be05769d7538babd7acbd3d';
            
            fetch(url)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                dispatch(updateState(data));
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='containerA'>
            {
                regions.map((region) => {
                    return (
                        <p 
                            className='region'
                            key={region.id}
                            data-id={region.id}
                            onClick={handleClick}
                        >
                            {region.name}
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Region