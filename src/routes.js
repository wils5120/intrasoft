import react from 'react';
import { NativeRouter } from 'react-router-native';

import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import ComponentLook from './components/Listado';
import App from './index';


const login = StackNavigator({
    logins:{
        screen: ComponentLogin
    }
})
