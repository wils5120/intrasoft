import react from 'react';
import { NativeRouter } from 'react-router-native';
import {createStackNavigator} from 'react-navigation';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import ComponentLook from './components/Listado';
import App from './index';
import ComponentLogin from './components/login';


const login = createStackNavigator({

    Home: {screen: ComponentLogin},
    Profile: {screen: ComponentLook}

});


export default login;
