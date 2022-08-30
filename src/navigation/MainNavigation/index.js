import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TAB, LOGIN, ONBOARDING, SPLASH_SCREEN} from 'constants/navigationRoute';

import Login from 'screens/Authentication/Login';

import CommonNavigation from 'navigation/CommonNavigation';
import OnBoardingScreen from 'screens/Authentication/OnBoarding';
import SplashScreen from 'screens/SplashScreen';

const Stack = createNativeStackNavigator();

function MainNavigation() {
  const isLoggedIn = true;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? TAB : ONBOARDING}
        screenOptions={{headerShown: false}}>
        {/* Screens for logged in users */}
        {isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name={TAB} component={CommonNavigation} />
            <Stack.Screen name={LOGIN} component={Login} />
            <Stack.Screen name={ONBOARDING} component={OnBoardingScreen} />
          </Stack.Group>
        ) : (
          //  Screens for not logged in users
          <Stack.Group>
            <Stack.Screen name={ONBOARDING} component={OnBoardingScreen} />
            <Stack.Screen name={LOGIN} component={Login} />
            <Stack.Screen name={TAB} component={CommonNavigation} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
