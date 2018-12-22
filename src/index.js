import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Navigator,TouchableHighlight} from 'react-native';
import { ComponentLogin } from './components/login';
import { ComponentListar } from './components/Listado'

var NavigatorBarTour = {
  LeftButton: function(route, Navigator, index){
    return(
      <TouchableHighlight onPress= {() =>{
          if(index > 0){
            navigator.pop();
          }
        }}>
         
        <Text style={styles.info}>Atras</Text>
      </TouchableHighlight>
    )
  },

  RightButton: function(route, Navigator, index){
    return null;
  },
  Title: function (route, Navigator, index) {
    return(
      <Text style={styles.titles}>
        {route.name}
      </Text>
    )
  }
}

const Login = require('./components/login');
export default class App extends Component {

  renderScene(route, Navigator){
    switch (route.name){
      case ComponentLogin:
        return (
          <ComponentLogin navigator= {navigator} route={route}/>
        );
      case ComponentListar:
          return(
            <ComponentListar navigator= {navigator} route={route}/>
          )
    }
  }
  render() {
    return (
      <Navigator style={styles.navegador}
      initialRoute = {{name:'Login'}}
      configureScene = {(route)=>{
        if(route.sceneConfig){
          return route.sceneConfig
        }
        return route.SceneConfigs.FloatFromRight
      }}

      navigatorBar = {
        <Navigator.navigatorBar
          routeMapper = { NavigatorBarTour}/>
      }
      />
     );
    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    fontSize:20
  },
  instruction: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  info:{
    marginTop: 10,
    marginLeft: 20,
    color: '#007AFF'
  },
  titles: {
    marginTop: 10,
    color: '#007AFF'
  },
  navegador: {
    backgroundColor: '#fff'
  }
});
