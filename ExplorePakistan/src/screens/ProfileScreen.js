// ProfileScreen.js
import React, { useState, useEffect } from 'react';
import {
  View, Text, StyleSheet, Image, TouchableOpacity, ScrollView,
  ActivityIndicator, Alert, TextInput, Modal
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { launchImageLibrary } from 'react-native-image-picker';

const API = "http://192.168.43.98:8000";

const ProfileScreen = ({ navigation }) => {
  const [expandedSections, setExpandedSections] = useState({
    savedVillages: false,
    recentActivities: false,
  });
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editVisible, setEditVisible] = useState(false);
  const [bio, setBio] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const fetchProfileData = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');

      const userRes = await axios.get(`${API}/api/user/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(userRes.data);

      const profileRes = await axios.get(`${API}/api/user-profile/`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (profileRes.data.length > 0) {
        setProfile(profileRes.data[0]);
        setBio(profileRes.data[0].bio);
      }
    } catch (error) {
      console.error("Failed to fetch user/profile:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (res) => {
      if (!res.didCancel && !res.errorCode) {
        const file = res.assets[0];
        setProfileImage({
          uri: file.uri,
          name: file.fileName,
          type: file.type,
        });
      }
    });
  };

  const handleProfileUpdate = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    const formData = new FormData();
    formData.append('bio', bio);
    if (profileImage) formData.append('profile_image', profileImage);

    try {
      await axios.patch(`${API}/api/user-profile/${profile.id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      setEditVisible(false);
      fetchProfileData();
    } catch (err) {
      console.error("Failed to update profile:", err.response?.data || err.message);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="red" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={profile?.profile_image ? { uri: `${API}${profile.profile_image}` } : require('../assets/images/profile_1.jpg')}
          style={styles.profileImage}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{user?.first_name} {user?.last_name}</Text>
          <Text style={styles.profileUsername}>{user?.username}</Text>
          <Text style={styles.profileDetail}>Email: {user?.email}</Text>
          <Text style={styles.profileDetail}>Bio: {profile?.bio || 'No bio'}</Text>
          <Text style={styles.profileDetail}>City: {user?.city_name || '---'}</Text>
          <Text style={styles.profileDetail}>Village: {user?.village_name || '---'}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <ScrollView style={styles.preferencesContainer}>
        <TouchableOpacity onPress={() => setEditVisible(true)}>
          <PreferenceItem title="Edit Profile" icon={require('../assets/icons/edit.png')} />
        </TouchableOpacity>
        <PreferenceItem title="Saved Villages" icon={require('../assets/icons/saved.png')} />
        <PreferenceItem title="Emergency Contact" icon={require('../assets/icons/emergency.png')} />
        <TouchableOpacity onPress={handleLogout}>
          <PreferenceItem title="Logout" icon={require('../assets/icons/power.png')} />
        </TouchableOpacity>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal visible={editVisible} transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>Edit Profile</Text>
            <TextInput
              style={styles.input}
              value={bio}
              onChangeText={setBio}
              placeholder="Enter bio"
            />
            <TouchableOpacity onPress={handleImagePick} style={styles.imagePickBtn}>
              <Text>Pick Profile Image</Text>
            </TouchableOpacity>
            <View style={styles.modalBtns}>
              <TouchableOpacity onPress={handleProfileUpdate}><Text>Save</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => setEditVisible(false)}><Text>Cancel</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const PreferenceItem = ({ title, icon }) => (
  <View style={styles.preferenceItem}>
    <View style={styles.preferenceLeft}>
      <Image source={icon} style={styles.preferenceIcon} />
      <Text style={styles.preferenceText}>{title}</Text>
    </View>
    <Image source={require('../assets/icons/right-arrow.png')} style={styles.arrowIcon} />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  profileHeader: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  profileImage: { width: 90, height: 90, borderRadius: 45, marginRight: 15 },
  profileTextContainer: { flex: 1 },
  profileName: { fontSize: 18, fontWeight: 'bold' },
  profileUsername: { fontSize: 16, color: '#888' },
  profileDetail: { fontSize: 14, marginTop: 4 },
  divider: { height: 1, backgroundColor: '#ccc', margin: 10 },
  preferencesContainer: { paddingHorizontal: 20 },
  preferenceItem: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee'
  },
  preferenceLeft: { flexDirection: 'row', alignItems: 'center' },
  preferenceIcon: { width: 24, height: 24, marginRight: 10 },
  preferenceText: { fontSize: 16 },
  arrowIcon: { width: 16, height: 16, tintColor: '#aaa' },
  modalOverlay: { flex: 1, backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginVertical: 10 },
  imagePickBtn: { backgroundColor: '#eee', padding: 10, borderRadius: 6, marginVertical: 5 },
  modalBtns: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }
});

export default ProfileScreen;
