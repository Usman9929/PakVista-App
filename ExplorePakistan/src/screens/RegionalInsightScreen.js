import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import styles from '../styles/globalStyles';
import { useNavigation, useRoute } from '@react-navigation/native';

const headerImages = [
  require('../assets/images/timergaraImage_1.jpg'),
  require('../assets/images/timergaraImage_2.jpg'),
  require('../assets/images/timergaraImage_3.jpg'),
  require('../assets/images/timergaraImage_4.jpg'),
  require('../assets/images/timergaraImage_5.jpg'),
  require('../assets/images/timergaraImage_6.jpg'),
  require('../assets/images/timergaraImage_8.jpg'),
];

const RegionalInsightScreen = () => {
  const route = useRoute();
  const { cityData } = route.params; // Get city details from navigation
  const navigation = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-change header image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.guestcontainer}>
      {/* Header Image (Auto-Changing) */}
      <Image source={headerImages[currentImageIndex]} style={styles.headerImage} />


      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.guettitle}>{"About "}{cityData.city_name}</Text>
        <Text style={styles.guestdescription}>{cityData.description}</Text>
      </View>

      {/* Grid Buttons */}
      <View style={styles.gridContainer}>
        <GuestButton title="Explore Villages" icon={require('../assets/icons/explore.png')} onPress={() => navigation.navigate('ExploreVillageScreen')} />
        <GuestButton title="Explore City" icon={require('../assets/icons/popular_site.png')} onPress={() => navigation.navigate('ExploreCity')} />
        <GuestButton title="Region Events" icon={require('../assets/icons/reigon_event.png')} onPress={() => navigation.navigate('RegionEvents')} />
        <GuestButton title="Search" icon={require('../assets/icons/search.png')} onPress={() => navigation.navigate('SearchScreen')}/>
        <GuestButton title="Emergency Contacts" icon={require('../assets/icons/emergency.png')} onPress={() => navigation.navigate('EmergencyContact')}/>
        <GuestButton title="Login Sign-Up" icon={require('../assets/icons/login.png')} onPress={() => navigation.navigate('Login')} />
      </View>

      {/* Tourist Attractions Section */}
      <View style={styles.touristAttraction}>
        <Text style={styles.guettitle}>Tourist Attraction</Text>

        {/* Tourist Item 1 */}
        <View style={styles.touristItem}>
          <Image source={require('../assets/images/timergaraImage_5.jpg')} style={styles.touristImage} />
          <View style={styles.touristTextContainer}>
            <Text style={styles.touristTitle}>Koherai Malakand</Text>
            <Text style={styles.touristLocation}>Timergara Dir Lower (KPK)</Text>
          </View>
        </View>

        {/* Tourist Item 2 */}
        <View style={styles.lastcontainer}>
          <View style={[styles.touristItem]}>
            <Image source={require('../assets/images/timergaraImage_8.jpg')} style={styles.touristImage} />
            <View style={styles.touristTextContainer}>
              <Text style={styles.touristTitle}>Malakand (College)</Text>
              <Text style={styles.touristLocation}>Timergara Dir Lower (KPK)</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Button Component
const GuestButton = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.guestbutton} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.guestbuttonText}>{title}</Text>
    </TouchableOpacity>
  );
};


export default RegionalInsightScreen;