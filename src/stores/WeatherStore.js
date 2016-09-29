import {EventEmitter} from 'events';
import AppDispatcher from '../AppDispatcher';

let _weather='';
class WeatherStore extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action=> {
      switch(action.type){
        case 'RECEIVE_WEATHER':
        _weather = action.payload.weather;
        this.emit('CHANGE');
        break;
      }
    })
  }

  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.on('CHANGE',cb);
  }
  getWeather(){
    console.log('_weather in store', _weather)
    return _weather;
  }
}

export default new WeatherStore();