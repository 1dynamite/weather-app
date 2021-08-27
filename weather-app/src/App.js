import './App.css';
import WeatherDetails from './components/WeatherDetails';
import Regions from './components/Regions'
import SearchBar from './components/SearchBar';
import DateCity from './components/DateCity';
import Describe from './components/Describe';
import Temperature from './components/Temperature';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateState,
  selectCloudy,
  selectHumidity,
  selectWind,
  selectRain,
  selectTemperature,
  selectLocation,
  selectDescription,
  selectIcon
} from './features/counter/counterSlice';

function App() {
  const temp = useSelector(selectTemperature);
  const location = useSelector(selectLocation);
  const description = useSelector(selectDescription);
  const cloudy = useSelector(selectCloudy);
  const humidity = useSelector(selectHumidity);
  const wind = useSelector(selectWind);
  const rain = useSelector(selectRain);
  const iconUrl = useSelector(selectIcon);
  const dispatch = useDispatch();

  useEffect(() => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?id=' + 1512569;
            url += '&units=metric&appid=eee7c5979be05769d7538babd7acbd3d';
            
            fetch(url)
            .then(data => data.json())
            .then(data => {
                dispatch(updateState(data));
            });
  }, [dispatch])

  const backgroundSelector = () => {
    switch(description){
      case 'Drizzle':
        return 'lightgray'
      case 'Rain':
        return 'lightgray'
      case 'Clouds':
        return 'lightgray'
      case 'Clear':
        return 'lightblue'
      default: return 'lightblue'
    }
  }
  return (
    <div 
      className='wrapper-app'
      style={{backgroundColor: backgroundSelector()}}
    >
        <div className='main-view'>
              <div className='main-info'>
                <div><Temperature temp={temp}/></div>
                <div><DateCity location={location}/></div>
                <div><Describe iconUrl={iconUrl} description={description}/></div>
              </div>
        </div>
        <div className='main-panel'>
            <SearchBar dispatch={dispatch} updateState={updateState}/>
            <Regions dispatch={dispatch} updateState={updateState}/>
            <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.6)'}}></div>
            <WeatherDetails
                cloudy={cloudy}
                humidity={humidity}
                wind={wind}
                rain={rain}
            />
        </div>
    </div>
  );
}

export default App;
