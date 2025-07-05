import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
} from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { CityContext } from '../App';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const headerImages = [
  require('../assets/images/timergaraImage_1.jpg'),
  require('../assets/images/timergaraImage_2.jpg'),
  require('../assets/images/timergaraImage_3.jpg'),
  require('../assets/images/timergaraImage_4.jpg'),
  require('../assets/images/timergaraImage_5.jpg'),
  require('../assets/images/timergaraImage_6.jpg'),
  require('../assets/images/timergaraImage_8.jpg'),
];

const BASE_URL = 'http://192.168.43.98:8000';

const RegionalInsightScreen = () => {
  const navigation = useNavigation();
  const { cityData } = useContext(CityContext);

  const [allVillages, setAllVillages] = useState([]);
  const [loadingVillages, setLoadingVillages] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchVillages = async () => {
    if (!cityData?.City_id) return;
    try {
      const response = await axios.get(`${BASE_URL}/village-profile/`, {
        params: { city: cityData.City_id },
      });
      const approvedVillages = response.data.filter(v => v.is_approved);
      setAllVillages(approvedVillages);
    } catch (error) {
      console.error('Error fetching villages:', error.message);
    } finally {
      setLoadingVillages(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchVillages();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 3000);

    fetchVillages();

    return () => clearInterval(interval);
  }, [cityData?.City_id]);

  const handleVillagePress = (village) => {
    navigation.navigate('VillageDetail', {
      villageData: village,
      cityName: cityData.City_name,
    });
  };

  if (!cityData) {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'red', textAlign: 'center', marginTop: 20 }}>
          City data is not available. Please go back and select a city again.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.guestcontainer}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* Header Image */}
      <Image source={headerImages[currentImageIndex]} style={styles.headerImage} />

      {/* About City */}
      <View style={styles.aboutSection}>
        <Text style={styles.guettitle}>About {cityData.City_name}</Text>
        <Text style={styles.guestdescription}>{cityData.City_description}</Text>
      </View>

      {/* Grid Buttons */}
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
          <GuestButton
            title="Explore Villages"
            icon={require('../assets/icons/explore.png')}
            onPress={() =>
              navigation.navigate('ExploreVillageScreen', {
                cityId: cityData.City_id,
                cityName: cityData.City_name,
                villages: allVillages,
              })
            }
            style={styles.gridButtonPrimary}
            textStyle={styles.gridButtonPrimaryText}
          />
          <GuestButton
            title="Explore City"
            icon={require('../assets/icons/popular_site.png')}
            onPress={() => navigation.navigate('ExploreCity', { cityData })}
            style={styles.gridButtonSecondary}
          />
        </View>
        <View style={styles.gridRow}>
          <GuestButton
            title="Region Events"
            icon={require('../assets/icons/reigon_event.png')}
            onPress={() => navigation.navigate('RegionEvents', { cityId: cityData.City_id })}
            style={styles.gridButtonTertiary}
          />
          <GuestButton
            title="Search"
            icon={require('../assets/icons/search.png')}
            onPress={() => navigation.navigate('SearchScreen')}
            style={styles.gridButtonAccent}
          />
        </View>
        <View style={styles.gridRow}>
          <GuestButton
            title="Emergency"
            icon={require('../assets/icons/emergency.png')}
            onPress={() => navigation.navigate('EmergencyContact', { cityData })}
            style={styles.gridButtonWarning}
          />
          <GuestButton
            title="Login"
            icon={require('../assets/icons/login.png')}
            onPress={() => navigation.navigate('Login')}
            style={styles.gridButtonNeutral}
          />
        </View>
      </View>

      {/* Village Cards */}
      <View style={styles.villageSection}>
        <Text style={styles.guetsubtitle}>Villages in {cityData.City_name}</Text>

        {loadingVillages ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        ) : allVillages.length > 0 ? (
          <>
            <View style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              paddingHorizontal: 12,
              marginBottom: 20,
            }}>
              {allVillages.slice(0, 4).map((village) => {
                const villageImageUrl = village.Image?.startsWith('http')
                  ? village.Image
                  : `${BASE_URL}${village.Image || '/media/village_images/default.jpg'}`;

                return (
                  <TouchableOpacity
                    key={village.village_code}
                    style={{
                      width: cardWidth,
                      backgroundColor: '#fff',
                      borderRadius: 12,
                      marginBottom: 16,
                      overflow: 'hidden',
                      elevation: 3,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 3,
                    }}
                    onPress={() => handleVillagePress(village)}
                  >
                    <Image
                      source={{ uri: villageImageUrl }}
                      style={{ width: '100%', height: 100, backgroundColor: '#ccc' }}
                      resizeMode="cover"
                    />
                    <View style={{ padding: 10 }}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#2c3e50' }}>
                        {village.village_name}
                      </Text>
                      <Text style={{ fontSize: 12, color: '#888' }}>
                        Population: {village.population}
                      </Text>
                      <Text style={{ fontSize: 12, color: '#888' }}>
                        Climate: {village.climate}
                      </Text>
                      <Text style={{ color: '#555', fontSize: 12 }} numberOfLines={2}>
                        {village.description?.length > 100
                          ? `${village.description.substring(0, 100)}...`
                          : village.description}
                      </Text>
                      <Text style={{ color: '#2980b9', marginTop: 5, fontSize: 12 }}>
                        View Details →
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* View All Villages Button */}
            <TouchableOpacity
              style={{ alignSelf: 'center', marginBottom: 30 }}
              onPress={() =>
                navigation.navigate('ExploreVillageScreen', {
                  cityId: cityData.City_id,
                  cityName: cityData.City_name,
                  villages: allVillages,
                })
              }
            >
              <Text style={{ color: '#2980b9', fontSize: 14 }}>View All Villages →</Text>
            </TouchableOpacity>

          </>
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No villages found for this city.</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const GuestButton = ({ title, icon, onPress, style, textStyle }) => (
  <TouchableOpacity
    style={[styles.guestbutton, style]}
    onPress={onPress}
  >
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>
    <Text style={[styles.guestbuttonText, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

export default RegionalInsightScreen;
