import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Import Screens
import RegionalInsightScreen from '../screens/RegionalInsightScreen';
import ExploreScreen from '../screens/ExploreScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';

// Import Custom Icons
import RegionalIcon from '../assets/icons/insights.png';
import ExploreIcon from '../assets/icons/explore1.png';
import NotificationIcon from '../assets/icons/notification.png';
import ProfileIcon from '../assets/icons/profile.png';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tab.Screen
        name="RegionalInsight"  
        component={RegionalInsightScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={RegionalIcon} style={[styles.icon, focused && styles.focusedIcon]} />
          ),
          headerShown: false, 
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={ExploreIcon} style={[styles.icon, focused && styles.focusedIcon]} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={NotificationIcon} style={[styles.icon, focused && styles.focusedIcon]} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image source={ProfileIcon} style={[styles.icon, focused && styles.focusedIcon]} />
          ),
        }}
      />
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
  icon: {
    width: 30,
    height: 30,
    tintColor: 'gray',
    marginTop:20
  },
  focusedIcon: {
    tintColor: '#e63946',  // Change this color based on your theme
  },
});

export default BottomTabs;
