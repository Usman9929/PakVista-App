import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  ActivityIndicator
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 40) / 2; // Better spacing
const BASE_URL = 'http://192.168.43.98:8000';

// Custom icon components using your local assets
const LocationIcon = () => (
  <Image 
    source={require('../../assets/icons/location.png')} 
    style={{ width: 14, height: 14, tintColor: '#fff' }} 
  />
);

const PeopleIcon = () => (
  <Image 
    source={require('../../assets/icons/people.png')} 
    style={{ width: 12, height: 12, tintColor: '#fff' }} 
  />
);

const ClimateIcon = () => (
  <Image 
    source={require('../../assets/icons/thermometer.png')} 
    style={{ width: 12, height: 12, tintColor: '#fff' }} 
  />
);

const BackIcon = () => (
  <Image 
    source={require('../../assets/icons/left-arrow.png')} 
    style={{ width: 24, height: 24, tintColor: '#fff' }} 
  />
);

const StarIcon = () => (
  <Image 
    source={require('../../assets/icons/star.png')} 
    style={{ width: 12, height: 12, tintColor: '#FFD700' }} 
  />
);

const AllVillagesScreen = ({ route, navigation }) => {
  const { cityName, villages = [] } = route.params;

  const renderVillageCard = ({ item }) => {
    const imageUrl = item.Image?.startsWith('http')
      ? item.Image
      : `${BASE_URL}${item.Image || '/media/village_images/default.jpg'}`;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('VillageDetail', { 
          villageData: item,
          cityName: cityName 
        })}
        style={styles.card}
      >
        <Image
          source={{ uri: imageUrl }}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.cardOverlay} />
        <View style={styles.cardContent}>
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
        <View style={styles.ratingBadge}>
          <StarIcon />
          <Text style={styles.ratingText}>4.8</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#3498db" barStyle="light-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Villages in {cityName}</Text>
        <View style={{ width: 24 }} /> {/* Spacer for alignment */}
      </View>

      {/* Village List */}
      {villages.length > 0 ? (
        <FlatList
          data={villages}
          numColumns={2}
          key="village-grid"
          contentContainerStyle={styles.listContent}
          columnWrapperStyle={styles.columnWrapper}
          keyExtractor={(item) => item.village_code}
          renderItem={renderVillageCard}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>No villages found</Text>
        </View>
      )}
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
    backgroundColor: '#3498db',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_WIDTH * 1.2,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
  },
  villageName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 4,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  ratingBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.9)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 4,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
  },
});

export default AllVillagesScreen;