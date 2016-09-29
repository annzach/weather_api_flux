import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Weather from './Weather'

export default class Layout extends Component {
  constructor(){
    super();

  }
  render(){
    return (
    <MuiThemeProvider>
    <Weather/>
    </MuiThemeProvider>
    )
  }
}