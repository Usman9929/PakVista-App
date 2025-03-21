import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegionalInsightScreen from "../screens/RegionalInsightScreen"; // Import your screen
import ExploreVillageScreen from "../screens/ExploreVillageScreen";
import PopularSites from "../screens/PopularSites";
import RegionEvents from "../screens/RegionEvents";


const Stack = createNativeStackNavigator();

const RegionalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegionalInsight" component={RegionalInsightScreen} />
      <Stack.Screen name="ExploreVillageScreen" component={ExploreVillageScreen} />
      <Stack.Screen name="PopularSites" component={PopularSites} />
      <Stack.Screen name="RegionEvents" component={RegionEvents} />
    </Stack.Navigator>
  );
};

export default RegionalStackNavigator;
