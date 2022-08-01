import React, { useState } from 'react';
import axios from 'axios'

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

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          onKeyPress={findLocation}
          placeholder='Enter a location'
        />
      </div>
      <div className="container">
        <div className="location">
          {data.sys ? <p>{data.name}, {data.sys.country}</p> : null}
          <div className="temp">
            {data.main ? <h1>{(data.main.temp - 273.15).toFixed(2)}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>Description: {data.weather[0].description}</p> : null}
          </div>
        </div>
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
  );
}

export default App;