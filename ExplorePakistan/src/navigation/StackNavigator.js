import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegionalInsightScreen from "../screens/RegionalInsightScreen"; // Import your screen

const Stack = createNativeStackNavigator();

const RegionalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RegionalInsight" component={RegionalInsightScreen} />
    </Stack.Navigator>
  );
};

export default RegionalStackNavigator;
