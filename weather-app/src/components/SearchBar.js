import React, {useState} from 'react'
import './SearchBar.css'

let SearchBar = ({updateState, dispatch}) => {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + value;
        url += '&units=metric&appid=eee7c5979be05769d7538babd7acbd3d';
        
        fetch(url)
        .then(data => data.json())
        .then(data => {
            console.log(data)
            dispatch(updateState(data));
        }).catch(e => {
            console.log(e);
        });
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className='wrapper'>
            <input 
                value={value}
                onChange={handleChange}
                type='text' 
                placeholder='Another location'
                className='search'
            />
            <i className="fa fa-search icon" onClick={handleSubmit}></i>
        </div>
    )
}

export default SearchBar