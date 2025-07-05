import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  FlatList,
  Dimensions,
  StyleSheet
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.75;
const BASE_URL = 'http://192.168.43.98:8000';

// Custom icon components
const LocationIcon = () => (
  <Image
    source={require('../assets/icons/location.png')}
    style={{ width: 14, height: 14, tintColor: '#e74c3c' }}
  />
);

const PeopleIcon = () => (
  <Image
    source={require('../assets/icons/people.png')}
    style={{ width: 12, height: 12, tintColor: '#666' }}
  />
);

const ClimateIcon = () => (
  <Image
    source={require('../assets/icons/cloudy.png')}
    style={{ width: 12, height: 12, tintColor: '#666' }}
  />
);

const BackIcon = () => (
  <Image
    source={require('../assets/icons/left-arrow.png')}
    style={{ width: 24, height: 24, tintColor: '#333' }}
  />
);

const ExploreVillageScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { cityId, cityName = '', villages: passedVillages = [] } = route?.params || {};

  const [villages, setVillages] = useState(passedVillages);
  const [loading, setLoading] = useState(passedVillages.length === 0);
  const [refreshing, setRefreshing] = useState(false);

  const fetchVillages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/village-profile/`, {
        params: { city: cityId },
      });
      const approved = response.data.filter(v => v.is_approved);
      setVillages(approved);
    } catch (error) {
      console.error('Error fetching villages:', error.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (passedVillages.length === 0) fetchVillages();
  }, [cityId]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchVillages();
  };

  const handleVillagePress = (village) => {
    navigation.navigate('VillageDetail', { villageData: village });
  };

  const renderVillageCard = ({ item }) => {
    const imageUrl = item.Image?.startsWith('http')
      ? item.Image
      : `${BASE_URL}${item.Image || '/media/village_images/default.jpg'}`;

    return (
      <TouchableOpacity
        style={styles.villageCard}
        onPress={() => handleVillagePress(item)}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.villageImage}
          resizeMode="cover"
        />
        <View style={styles.villageContent}>
          <Text style={styles.villageName} numberOfLines={1}>
            {item.village_name}
          </Text>
          <View style={styles.locationContainer}>
            <LocationIcon />
            <Text style={styles.locationText} numberOfLines={1}>
              {cityName}
            </Text>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <PeopleIcon />
              <Text style={styles.detailText}>{item.population || 'N/A'}</Text>
            </View>
            <View style={styles.detailItem}>
              <ClimateIcon />
              <Text style={styles.detailText}>{item.climate || 'N/A'}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Villages in {cityName}</Text>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Discover {cityName}</Text>
          <Text style={styles.heroSubtitle}>Explore the hidden gems of this region</Text>
        </View>

        {/* Featured Villages */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured Villages</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AllVillagesScreen', { cityName, villages })}>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color="#3498db" style={styles.loader} />
          ) : villages.length > 0 ? (
            <FlatList
              data={villages.slice(0,)}
              horizontal
              keyExtractor={(item) => item.village_code}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
              renderItem={renderVillageCard}
            />
          ) : (
            <View style={styles.emptyState}>
              <Text style={styles.emptyStateText}>No villages found</Text>
            </View>
          )}
        </View>

        {/* Top Villages */}
        {villages.length > 5 && (
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Popular Villages</Text>
              <TouchableOpacity onPress={() => navigation.navigate('AllVillagesScreen', { cityName, villages })}>
                <Text style={styles.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={villages.slice(3, 8)}
              horizontal
              keyExtractor={(item) => item.village_code + '_top'}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.listContent}
              renderItem={renderVillageCard}
            />
          </View>
        )}

        {/* All Villages Grid */}
        {villages.length > 0 && (
          <View style={styles.sectionSubContainer}>
            <Text style={styles.sectionSubHeadingTitle}>All Villages</Text>
            <View style={styles.gridContainer}>
              {villages.slice(0, 6).map((village) => (
                <TouchableOpacity
                  key={village.village_code}
                  style={styles.gridItem}
                  onPress={() => handleVillagePress(village)}
                >
                  <Image
                    source={{ uri: village.Image?.startsWith('http') ? village.Image : `${BASE_URL}${village.Image || '/media/village_images/default.jpg'}` }}
                    style={styles.gridImage}
                  />
                  <Text style={styles.gridText} numberOfLines={1}>{village.village_name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  heroSection: {
    padding: 24,
    backgroundColor: '#3498db',
    marginBottom: 16,
  },
  sectionSubHeadingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 20,
    marginBottom: 20
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  sectionContainer: {
    marginBottom: 20,

  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionSubContainer: {
    marginBottom:60
  },
  seeAllText: {
    color: '#3498db',
    fontWeight: '500',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  villageCard: {
    width: cardWidth,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  villageImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#eee',
  },
  villageContent: {
    padding: 12,
  },
  villageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  gridItem: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  gridImage: {
    width: '100%',
    height: 100,
    backgroundColor: '#eee',
  },
  gridText: {
    padding: 8,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  loader: {
    marginVertical: 32,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
  },
});

export default ExploreVillageScreen;