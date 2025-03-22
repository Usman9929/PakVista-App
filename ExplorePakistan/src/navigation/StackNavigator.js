import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegionalInsightScreen from "../screens/RegionalInsightScreen"; // Import your screen
import ExploreVillageScreen from "../screens/ExploreVillageScreen";
import PopularSites from "../screens/PopularSites";
import RegionEvents from "../screens/RegionEvents";
import EmergencyContact from "../screens/EmergencyContact";
import SearchScreen from "../screens/SearchScreen";


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
      
    </Stack.Navigator>
  );
};

export default RegionalStackNavigator;
