import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, Image } from 'react-native';

const notifications = [
  {
    id: '1',
    username: 'Shahzad_12',
    message: "Timergara's beauty is unmatched; it's truly a hidden gem.",
    time: '9:41',
    image: require('../assets/images/profile_1.jpg') // Make sure this path is correct
  },
  {
    id: '2',
    username: 'Ahmad_32',
    message: "Timergara preserves centuries-old traditions, connecting past to present beautifully.",
    time: '9:40',
    image: require('../assets/images/profile_2.jpg')
  },
  {
    id: '3',
    username: 'Ziyab-15',
    message: "Every corner of Timergara tells a story worth capturing.",
    time: '9:38',
    image: require('../assets/images/profile_3.jpg')
  },
  {
    id: '4',
    username: 'Siyab_34',
    message: "Our mountains and valleys make Timergara a peaceful paradise.",
    time: '9:35',
    image: require('../assets/images/profile_4.jpg')
  },
  {
    id: '5',
    username: 'Zohaib_65',
    message: "Visiting Timergara is experiencing nature, culture, and warm hospitality.",
    time: '9:32',
    image: require('../assets/images/user.jpg')
  },
  {
    id: '6',
    username: 'Ali_54',
    message: "Timergara thrives with potential, blending culture and economic growth.",
    time: '9:30',
    image: require('../assets/images/profile_3.jpg')
  },
  {
    id: '7',
    username: 'Anees_435',
    message: "Timergara whispers dreams of mountains, rivers, and endless skies.",
    time: '9:28',
    image: require('../assets/images/profile_4.jpg')
  },
  {
    id: '8',
    username: 'Waqas_54',
    message: "Timergara calls to explorers seeking adventure and peaceful solitude.",
    time: '9:25',
    image: require('../assets/images/profile_1.jpg')
  },
];

const NotificationItem = ({ username, message, time, image }) => (
  <View style={styles.notificationItem}>
    <View style={styles.avatarContainer}>
      <Image 
        source={image} 
        style={styles.avatarImage}
      />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
    <Text style={styles.time}>{time}</Text>
  </View>
);

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>
      
      {/* Notification List */}
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            username={item.username}
            message={item.message}
            time={item.time}
            image={item.image}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContent: {
    paddingBottom: 60,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  message: {
    color: '#333',
  },
  time: {
    color: '#888',
    fontSize: 12,
    marginLeft: 8,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  navItem: {
    color: '#888',
  },
  activeNavItem: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default NotificationScreen;