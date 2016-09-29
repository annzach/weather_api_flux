import $ from 'jquery';
import ServerActions from './actions/ServerActions';

const API ={
 fetchWeather(){
  $.get(`http://api.wunderground.com/api/40c0621a32103129/conditions/q/autoip.json`,(data,status)=>{
    console.log('status',status);
    console.log('data',data);
    ServerActions.receiveWeather(data);
  })
 },
 fetchMyWeather(place){
  console.log("in api",place)
   var str = place.split(',');
   var state = str[0];
   var city =str[1];
   $.get(`http://api.wunderground.com/api/40c0621a32103129/conditions/q/${state}/${city}.json`,(data,status)=>{
    console.log('status',status);
    console.log('data',data);
    ServerActions.receiveWeather(data);
  })
 }
}

export default API;