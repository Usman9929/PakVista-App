import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API = "http://192.168.43.98:8000"; // Replace with your backend IP

const ProfileScreen = () => {
  const [expandedSections, setExpandedSections] = useState({
    savedVillages: false,
    recentActivities: false,
  });
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      const response = await axios.get(`${API}/userprofile/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.length > 0) {
        setProfile(response.data[0]);
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="red" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={
            profile?.profile_image
              ? { uri: `${API}${profile.profile_image}` }
              : require('../assets/images/profile_1.jpg')
          }
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{profile?.user || 'User'}</Text>
          <Text style={styles.profileUsername}>{profile?.user?.username || '---'}</Text>
          <Text style={styles.profileDetail}>{profile?.bio || 'No bio available'}</Text>
          <Text style={styles.profileDetail}>{profile?.user?.email || '---'}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <ScrollView style={styles.preferencesContainer}>
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
  // ... (keep all your previous styles unchanged)
});

export default ProfileScreen;
