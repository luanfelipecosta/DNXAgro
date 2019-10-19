import React from 'react';
import {
  createAppContainer,
  // createSwitchNavigator,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
// screens
import Login from './screens/Login';
import Scan from './screens/Scan';
// import Splash from './screens/SplashScreen';


console.disableYellowBox = true;

const PrivateRoutes = createStackNavigator({
  Login,
  Scan,
});

const AppNavigator = createAppContainer(PrivateRoutes);

export default AppNavigator;
