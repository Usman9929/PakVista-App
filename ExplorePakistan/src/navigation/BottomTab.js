import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

// Screens
import ExploreScreen from '../screens/ExploreScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegionalStackNavigator from './StackNavigator';
import NewsFeedScreen from '../screens/NewsFeedScreen';

// Icons
import RegionalIcon from '../assets/icons/insights.png';
import ExploreIcon from '../assets/icons/explore1.png';
import NotificationIcon from '../assets/icons/notification.png';
import ProfileIcon from '../assets/icons/profile.png';
import NewsFeedIcon from '../assets/icons/home.png';

const Tab = createBottomTabNavigator();

const BottomTabs = ({ isGuest, cityData }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarActiveTintColor: '#e63946',
        tabBarInactiveTintColor: 'gray',
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === 'NewsFeed') iconSource = NewsFeedIcon;
          else if (route.name === 'Regional Insight') iconSource = RegionalIcon;
          else if (route.name === 'Explore') iconSource = ExploreIcon;
          else if (route.name === 'Notification') iconSource = NotificationIcon;
          else if (route.name === 'Profile') iconSource = ProfileIcon;

          return <Image source={iconSource} style={[styles.icon, focused && styles.focusedIcon]} />;
        },
        headerShown: false,
      })}
    >
      {!isGuest && (
        <Tab.Screen name="NewsFeed" component={NewsFeedScreen} options={{ tabBarLabel: 'News Feed' }} />
      )}

      <Tab.Screen
        name="Regional Insight"
        component={RegionalStackNavigator}
        initialParams={{ cityData }} // Pass city data to Regional
        options={{ tabBarLabel: 'Regional Insights' }}
      />

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
    marginTop: 8,
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: 'gray',
    resizeMode: 'contain',
    marginTop: 8,
  },
  focusedIcon: {
    tintColor: '#e63946',
  },
});

export default BottomTabs;
