import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegionalInsightScreen from "../screens/RegionalInsightScreen"; // Import your screen
import ExploreVillageScreen from "../screens/ExploreVillageScreen";
import PopularSites from "../screens/PopularSites";
import RegionEvents from "../screens/RegionEvents";
import EmergencyContact from "../screens/EmergencyContact";
import SearchScreen from "../screens/SearchScreen";
import ReligousFestivalScreen from "../screens/Region_Events_Screens/ReligousFestivalScreen";
import CulturalandSeasonalFestival from "../screens/Region_Events_Screens/CulturalandSeasonalFestival";
import FolkandTraditionalCelebration from "../screens/Region_Events_Screens/FolkandTraditionalCelebration";
import InternationalllyInspiredEvents from "../screens/Region_Events_Screens/InternationalllyInspiredEvents";
import NationalObservances from "../screens/Region_Events_Screens/NationalObservances";
import RegionalEventsEthnicFestivals from "../screens/Region_Events_Screens/RegionalEventsEthnicFestivals";
import AdventureAndSportsEvents from "../screens/Region_Events_Screens/AdventureAndSportsEvents";
AdventureAndSportsEvents




const Stack = createNativeStackNavigator();

const RegionalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegionalInsight" component={RegionalInsightScreen} />
      <Stack.Screen name="ExploreVillageScreen" component={ExploreVillageScreen} />
      <Stack.Screen name="PopularSites" component={PopularSites} />
      <Stack.Screen name="RegionEvents" component={RegionEvents} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContact} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ReligousFestivalScreen" component={ReligousFestivalScreen} />
      <Stack.Screen name="CulturalandSeasonalFestival" component={CulturalandSeasonalFestival} />
      <Stack.Screen name="FolkandTraditionalCelebration" component={FolkandTraditionalCelebration} />
      <Stack.Screen name="InternationalllyInspiredEvents" component={InternationalllyInspiredEvents} />
      <Stack.Screen name="NationalObservances" component={NationalObservances} />
      <Stack.Screen name="RegionalEventsEthnicFestivals" component={RegionalEventsEthnicFestivals} />
      <Stack.Screen name="AdventureAndSportsEvents" component={AdventureAndSportsEvents} />
      
    </Stack.Navigator>
  );
};

export default RegionalStackNavigator;
