import API from '../API'
const WeatherActions = {
  fetchMyWeather(place){
    API.fetchMyWeather(place)
  }
}

export default WeatherActions;