import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  const [expandedSections, setExpandedSections] = useState({
    savedVillages: false,
    recentActivities: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={require('../assets/images/profile_1.jpg')} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Ziyab Shahzada</Text>
          <Text style={styles.profileUsername}>ziyab_8929</Text>
          <Text style={styles.profileDetail}>Villager of Koharai Malakand</Text>
          <Text style={styles.profileDetail}>shahzada@gmail.com</Text>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Preferences Section */}
      <ScrollView style={styles.preferencesContainer}>
        {/* Personalized Data & Preferences */}
        <TouchableOpacity style={styles.preferenceItem} onPress={() => toggleSection('savedVillages')}>
          <View style={styles.preferenceLeft}>
            <Image source={require('../assets/icons/controller.png')} style={styles.preferenceIcon} />
            <Text style={styles.sectionTitle}>Personalized Data & Preferences</Text>
          </View>
          <Image source={require('../assets/icons/right-arrow.png')} style={[styles.arrowIcon, expandedSections.savedVillages && styles.arrowIconExpanded]} />
        </TouchableOpacity>

        {expandedSections.savedVillages && (
          <>
            <PreferenceItem title="Saved Villages" icon={require('../assets/icons/saved.png')} />
            <PreferenceItem title="Recent Activities" icon={require('../assets/icons/recent.png')} />
            <PreferenceItem title="Notification" icon={require('../assets/icons/notification.png')} />
          </>
        )}

        {/* User Action */}
        <TouchableOpacity style={styles.preferenceItem} onPress={() => toggleSection('recentActivities')}>
          <View style={styles.preferenceLeft}>
            <Image source={require('../assets/icons/user.png')} style={styles.preferenceIcon} />
            <Text style={styles.sectionTitle}>User Action</Text>
          </View>
          <Image source={require('../assets/icons/right-arrow.png')} style={[styles.arrowIcon, expandedSections.recentActivities && styles.arrowIconExpanded]} />
        </TouchableOpacity>

        {expandedSections.recentActivities && (
          <>
            <PreferenceItem title="Edit Profile" icon={require('../assets/icons/edit.png')} />
            <PreferenceItem title="My Requests" icon={require('../assets/icons/request.png')} />
            <PreferenceItem title="Emergency Contact" icon={require('../assets/icons/emergency.png')} />
          </>
        )}

        <PreferenceItem title="Setting" icon={require('../assets/icons/settings.png')} />
        <PreferenceItem title="Log out" icon={require('../assets/icons/power.png')} />
      </ScrollView>
    </View>
  );
};

const PreferenceItem = ({ title, icon }) => (
  <TouchableOpacity style={styles.preferenceItem}>
    <View style={styles.preferenceLeft}>
      <Image source={icon} style={styles.preferenceIcon} />
      <Text style={styles.preferenceText}>{title}</Text>
    </View>
    <Image source={require('../assets/icons/right-arrow.png')} style={styles.arrowIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  profileUsername: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  profileDetail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 20,
  },
  preferencesContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  preferenceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  preferenceText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 20,
  },
  preferenceIcon: {
    width: 24,
    height: 24,
    tintColor: '#666',
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
    transform: [{ rotate: '0deg' }],
  },
  arrowIconExpanded: {
    transform: [{ rotate: '90deg' }],
  },
});

export default ProfileScreen;
