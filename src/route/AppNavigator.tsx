import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppRoutes} from './types/NavigationTypes';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import SignUp from '../screens/SigUp';
import SignIn from '../screens/SigIn';
import Home from '../screens/Home';

const AppStack = createStackNavigator<AppRoutes>();

const MyNavigation = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'SignUp'}>
          <AppStack.Screen
            name="SignIn"
            component={SignIn}
            options={{...MyNavigation}}
          />
          <AppStack.Screen
            name="SignUp"
            component={SignUp}
            options={{...MyNavigation}}
          />
          <AppStack.Screen
            name="Home"
            component={Home}
            options={{...MyNavigation, gestureEnabled: false}}
          />
        </AppStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppNavigator;
