import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Favourites from './pages/Favourites';
import Music from './pages/Music';

const {Navigator, Screen} = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main" headerMode="none">
        <Screen name="Main" component={Main} />
        <Screen name="Favourites" component={Favourites} />
        <Screen name="Music" component={Music} />
      </Navigator>
    </NavigationContainer>
  );
}
