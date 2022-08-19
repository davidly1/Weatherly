import React, { useState } from 'react';
import axios from 'axios'
import InputCity from './InputCity'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

  const findLocation = (e) => {
    if (e.key === 'Enter') {
      axios.get(apiUrl)
        .then((res) => {
          setData(res.data)
        })
    }
  }

  const onChangeInput = (e) => setLocation(e.target.value)

  return (
    <div className="App">
      <div className="search-box">
        <InputCity location={location} 
        findLocation={findLocation} 
        onChangeInput={onChangeInput}
        />
      </div>
      <div className="container">
        <div className="location-box">
          <div className="location">
            {data.sys ? <p>{data.name}, {data.sys.country}</p> : null}
          </div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {data.main ? <h1>{(data.main.temp - 273.15).toFixed(2)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels_like">
            {data.main ? <p>Feels Like: {(data.main.feels_like - 273.15).toFixed(2)}°C</p> : null}
          </div>
          <div className="humidity">
            {data.main ? <p>Humidity: {data.main.humidity}%</p> : null}
          </div>
          <div className="wind">
            {data.wind ? <p>Wind speed: {(data.wind.speed * 3.6).toFixed(2)}km/h</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;