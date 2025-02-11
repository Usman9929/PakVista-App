import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import styles from '../styles/globalStyles';

const headerImages = [
  require('../assets/images/timergaraImage_1.jpg'),
  require('../assets/images/timergaraImage_2.jpg'),
  require('../assets/images/timergaraImage_3.jpg'),
  require('../assets/images/timergaraImage_4.jpg'),
  require('../assets/images/timergaraImage_5.jpg'),
  require('../assets/images/timergaraImage_6.jpg'),
  require('../assets/images/timergaraImage_8.jpg'),
];

const GuestScreen = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

   // Change header image every 2 seconds
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % headerImages.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <ScrollView style={styles.guestcontainer}>
      {/* Header Image (Auto-Changing) */}
      <Image source={headerImages[currentImageIndex]} style={styles.headerImage} />
     

      {/* About Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.guettitle}>About Timergara</Text>
        <Text style={styles.guestdescription}>
          Timergara is a town in the Lower Dir District of Khyber Pakhtunkhwa, Pakistan. It serves as the district’s
          administrative and commercial center. Known for its vibrant local markets, Timergara is surrounded by scenic landscapes
          and offers a mix of cultural heritage and natural beauty. The town is also a gateway to nearby attractions like Jandol Valley
          and Kumrat Valley.
        </Text>
      </View>

      {/* Grid Buttons */}
      <View style={styles.gridContainer}>
        <GuestButton title="Explore Villages" icon={require('../assets/icons/explore.png')} />
        <GuestButton title="Popular Sites" icon={require('../assets/icons/popular_site.png')} />
        <GuestButton title="Region Events" icon={require('../assets/icons/reigon_event.png')} />
        <GuestButton title="Search" icon={require('../assets/icons/search.png')} />
        <GuestButton title="Emergency Contacts" icon={require('../assets/icons/emergency.png')} />
        <GuestButton title="Login Sign-Up" icon={require('../assets/icons/login.png')} />
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
        <View style={styles.touristItem}>
          <Image source={require('../assets/images/timergaraImage_8.jpg')} style={styles.touristImage} />
          <View style={styles.touristTextContainer}>
            <Text style={styles.touristTitle}>Malakand (College)</Text>
            <Text style={styles.touristLocation}>Timergara Dir Lower (KPK)</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

// Button Component
const GuestButton = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.guestbutton}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.guestbuttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

// Bottom Navigation Item Component
const NavItem = ({ title, icon }) => {
  return (
    <View style={styles.navItem}>
      <Image source={icon} style={styles.icon} />
      <Text>{title}</Text>
    </View>
  );
};

export default GuestScreen;
