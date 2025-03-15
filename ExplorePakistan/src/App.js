import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen'
import RegionalInsightScreen from './screens/RegionalInsightScreen';
import BottomTabs from './navigation/BottomTab';
import SignupScreen from './screens/Signup';
import ExploreVillage from './screens/ExploreVillageScreen'
import ExploreVillageScreen from './screens/ExploreVillageScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ExploreVillages" component={ExploreVillage} />
        <Stack.Screen name="ExploreVillagesScreen" component={ExploreVillageScreen} />
        <Stack.Screen
          name="RegionalInsight"
          component={RegionalInsightScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainTabs" component={BottomTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;