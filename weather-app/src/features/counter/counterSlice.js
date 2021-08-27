import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cloudy: 0,
  humidity: 0,
  wind: 0,
  rain: 0,
  temperature: 0,
  location: '',
  description: '',
  icon: ''
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    updateState: (state, action) => {
      state.cloudy = action.payload.clouds ? action.payload.clouds.all : 0;
      state.humidity = action.payload.main.humidity !== 'undefined' ? action.payload.main.humidity : 0;
      state.wind = action.payload.wind ? action.payload.wind.speed : 0;
      state.rain = action.payload.rain ? action.payload.rain['1h'] : 0;
      state.temperature = action.payload.main.temp;
      state.location = action.payload.name;
      state.description = action.payload.weather[0].main;
      state.icon = "http://openweathermap.org/img/wn/" + action.payload.weather[0].icon + "@2x.png";
    },
  }
});

export const { updateState } = counterSlice.actions;


export const selectCloudy = (state) => state.counter.cloudy;
export const selectHumidity = (state) => state.counter.humidity;
export const selectWind = (state) => state.counter.wind;
export const selectRain = (state) => state.counter.rain;
export const selectTemperature = (state) => state.counter.temperature;
export const selectLocation = (state) => state.counter.location;
export const selectDescription = (state) => state.counter.description;
export const selectIcon = (state) => state.counter.icon;


/* export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}; */

export default counterSlice.reducer;
