import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Import Screens
import ExploreScreen from '../screens/ExploreScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ExploreVillageScreen from '../screens/ExploreVillageScreen';
import RegionalStackNavigator from "./StackNavigator"; // Import the stack navigator

// Import Custom Icons
import RegionalIcon from '../assets/icons/insights.png';
import ExploreIcon from '../assets/icons/explore1.png';
import NotificationIcon from '../assets/icons/notification.png';
import ProfileIcon from '../assets/icons/profile.png';


const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,  // ✅ Apply to all labels
        tabBarActiveTintColor: '#e63946',  // ✅ Active label color
        tabBarInactiveTintColor: 'gray',  // ✅ Inactive label color
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'Regional Insight') {
            iconSource = RegionalIcon;
          } else if (route.name === 'Explore') {
            iconSource = ExploreIcon;
          } else if (route.name === 'Notification') {
            iconSource = NotificationIcon;
          } else if (route.name === 'Profile') {
            iconSource = ProfileIcon;
          }
          return (
            <Image
              source={iconSource}
              style={[
                styles.icon,
                focused && styles.focusedIcon,
              ]}
            />
          );
        },
        headerShown: false,  // Hide header for all screens
      })}
    >
       <Tab.Screen name="Regional Insight" component={RegionalStackNavigator} options={{ tabBarLabel: "Regional Insights" }} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 5,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop:8
  },
  icon: {
    width: 30,  // ✅ Increased icon size for all tabs
    height: 30,
    tintColor: 'gray',
    resizeMode: 'contain',
    marginTop:8
  },
  focusedIcon: {
    tintColor: '#e63946',  // ✅ Change icon color when focused
  },
});

export default BottomTabs;
