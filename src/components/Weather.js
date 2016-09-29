import React,{Component} from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import WeatherActions from '../actions/WeatherActions'
import WeatherStore from '../stores/WeatherStore'
import API from '../API'
import '../style.css'

const style = {
  margin: 12,
};
export default class Weather extends Component{
  constructor(){
    super();
      this.state ={
      weather:WeatherStore.getWeather()
    }
    this.getWeather = this.getWeather.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    console.log('will mount', API.fetchWeather());
    WeatherStore.startListening(this._onChange);
  }

   componentWillUnmount() {
    WeatherStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      weather:WeatherStore.getWeather()
     
    })
  }
   
  getWeather(){
    let place = this.refs;
    console.log('place',place.state.input.value);
    let findPlace = place.state.input.value
    WeatherActions.fetchMyWeather(findPlace);
  }
  render(){
      const {weather} = this.state;
      let icon_url="" , country ="", temperature_string ="" , location ="";
    if(weather){
       var WeatherData = JSON.stringify(weather);
       location = weather.current_observation.display_location.city;
       country = weather.current_observation.display_location.country;
       icon_url =weather.current_observation.icon_url;
       temperature_string= weather.current_observation.temperature_string;
    }
       else{
        icon_url =" ",country ="", temperature_string ="" , location ="";
       }

  return (
    <div className ="main">
      <div>
        <AppBar
          title="Weather Now"
          iconClassNameRight="muidocs-icon-navigation-expand-more" />
      </div>
      <TextField id="txtid" hintText=" State, City" ref="state"/>
      <RaisedButton label="Go" primary={true} style={style} onClick={this.getWeather}/>
      <div className ="data">
         <div className="move">
           <div>
              <img src={icon_url} alt ="N/A" width="150px"/>
            </div>
            <div>
              <h4>{location}</h4>
            </div>
            <div>
              <h3>{country}</h3>
            </div>
            <div>
              <h3>{temperature_string}</h3>
            </div>
          </div>
      </div>
  </div>
  )
  }
}