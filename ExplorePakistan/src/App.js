import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegionalInsightScreen from './screens/RegionalInsightScreen';
import BottomTabs from './navigation/BottomTab';
import SignupScreen from './screens/Signup';
import ExploreVillageScreen from './screens/ExploreVillageScreen';
import RegionEvents from './screens/RegionEvents';
import EmergencyContact from './screens/EmergencyContact';
import SearchScreen from './screens/SearchScreen';
import VillageDetail from './screens/VillageDetail';
import ReligousFestivalScreen from './screens/Region_Events_Screens/ReligousFestivalScreen';
import CulturalandSeasonalFestival from './screens/Region_Events_Screens/CulturalandSeasonalFestival';
import RegionalEventsEthnicFestivals from './screens/Region_Events_Screens/RegionalEventsEthnicFestivals';
import FolkandTraditionalCelebration from './screens/Region_Events_Screens/FolkandTraditionalCelebration';
import NationalObservances from './screens/Region_Events_Screens/NationalObservances';
import InternationalllyInspiredEvents from './screens/Region_Events_Screens/InternationalllyInspiredEvents';
import AdventureAndSportsEvents from './screens/Region_Events_Screens/AdventureAndSportsEvents';
import TopTabNavigator from './screens/Explore_City/TopTabNavigator';
import About from './screens/Village Detail Screen/About';
import SignificantPeaple from './screens/Village Detail Screen/SignificantPeaple';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ExploreVillageScreen" component={ExploreVillageScreen} />
        <Stack.Screen name="RegionEvents" component={RegionEvents} />
        <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="VillageDetail" component={VillageDetail} />
        <Stack.Screen name="ReligousFestivalScreen" component={ReligousFestivalScreen} />
        <Stack.Screen name="CulturalandSeasonalFestival" component={CulturalandSeasonalFestival} />
        <Stack.Screen name="RegionalEventsEthnicFestivals" component={RegionalEventsEthnicFestivals} />
        <Stack.Screen name="FolkandTraditionalCelebration" component={FolkandTraditionalCelebration} />
        <Stack.Screen name="NationalObservances" component={NationalObservances} />
        <Stack.Screen name="InternationalllyInspiredEvents" component={InternationalllyInspiredEvents} />
        <Stack.Screen name="AdventureAndSportsEvents" component={AdventureAndSportsEvents} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="SignificantPeaple" component={SignificantPeaple} />
        <Stack.Screen name="ExploreCity" component={TopTabNavigator} />

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
