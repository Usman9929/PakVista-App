import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fetchVillages } from "../services/api";



const VillageCard = ({ item }) => (
  <TouchableOpacity style={styles.villageCard}>
    <Image source={typeof item.image === "string" ? { uri: item.image } : item.image} style={styles.villageImage} />
    <Text style={styles.villageTitle}>{item.name}</Text>
    <View style={styles.locationContainer}>
      <Image source={require("../assets/icons/location.png")} style={{ width: 16, height: 16 }} />
      <Text style={styles.villageLocation}>{item.location}</Text>
    </View>
  </TouchableOpacity>
);
const TouristVillageCard = ({ item }) => (
  <TouchableOpacity style={styles.touristVillageCard}>
    <Image
      source={typeof item.image === "string" ? { uri: item.image } : item.image}
      style={styles.touristVillageImage}
    />
    <View style={styles.touristVillageInfo}>
      <Text style={styles.touristVillageTitle}>{item.name}</Text>
      <View style={styles.touristVillageLocationContainer}>
        <Image
          source={require("../assets/icons/location.png")}
          style={styles.locationIcon}
        />
        <Text style={styles.touristVillageLocation}>{item.location}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


const ExploreVillageScreen = () => {
  const navigation = useNavigation(); // Get navigation object
  const [general_villages, setVillages] = useState([]);
  const [topVillages, setTopVillages] = useState([]);  // State for top villages
  const [touristVillages, setTouristVillages] = useState([]); // State for tourist villages
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getVillages = async () => {
      const {general_villages, topVillages, touristVillages } = await fetchVillages();
      setVillages(general_villages);
      setTopVillages(topVillages);
      setTouristVillages(touristVillages);
      setLoading(false);
    };

    getVillages();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (

    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flex: 1, alignItems: "center", marginTop: 30 }}>
            <Text style={styles.headerTitle}>Villages</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => navigation.navigate('Login')} // Navigate to Login screen
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* General Villages */}
        <Text style={styles.sectionTitle}>Wonderful Timergara</Text>
        <Text style={styles.subTitle}>Let's Explore Together</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.villageList}>
          {general_villages.map((item, index) => (
            <VillageCard key={item.id || index} item={item} />
          ))}
        </ScrollView>



        {/* Top Villages */}
        <View style={styles.topVillageHeader}>
          <Text style={styles.sectionTitle}>Top Village</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
        <FlatList style = {{marginLeft:-12}}
          data={topVillages}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <VillageCard item={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />

        {/* Tourist Villages */}
        <Text style={styles.sectionTitle}>Tourist Attraction</Text>
        <View style={{ marginBottom: 60 }}>
          {touristVillages.map((item) => (
            <TouristVillageCard key={item.id} item={item} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 80,
    color: "gray",
  },
  loginButton: {
    backgroundColor: "red",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 30
  },
  loginText: {
    color: "#FFF",
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 8,
    marginTop: 20
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
    marginBottom: 12
  },

  villageList: {
    alignItems: "center"
  },
  villageCard: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 5,
    marginLeft:5,
    marginRight: 12, // Ensure space between cards
    width: 260,// Set a fixed width for consistency
    height: 250,
    alignItems: "center",
    paddingBottom: 20,
    shadowColor: "#000",       // Shadow color
    shadowOffset: { width: 0, height: 3 }, // Shadow direction
    shadowOpacity: 0.2,        // Adjust transparency (0-1)
    shadowRadius: 10,           // Blur effect

    // 🔹 REQUIRED FOR ANDROID (because shadow properties work only on iOS)
    elevation: 8,              // Android shadow effect
    marginBottom: 20
  },

  villageImage: {
    width: "100%",
    height: "80%",
    borderRadius: 12,
  },
  villageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 6,
    textAlign: "left",  // Ensures left alignment
    alignSelf: "flex-start", // Aligns the text to the start of the container
    marginRight: 0, // Remove the right margin if not needed
    marginLeft: 10
  },

  villageLocation: {
    fontSize: 14,
    color: "gray",
    marginTop: 2,
    marginLeft: 5,
    textAlign: "left",  // Ensures left alignment
    alignSelf: "flex-start", // Aligns the text to the start of the container
    marginRight: 0 // Remove the right margin if not needed
  },

  topVillageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  viewAll: {
    color: "red",
    fontSize: 14
  },

  topVillageList: {
    marginTop: 4,
  },

  locationContainer: {
    flexDirection: "row",  // Aligns icon and text in a row
    alignItems: "center",  // Ensures vertical alignment
    marginTop: 2,          // Adjust spacing as needed
    alignSelf: "flex-start",
    marginLeft: 10
  },
  touristVillageCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  touristVillageImage: {
    width: 100,
    height: 90,
    borderRadius: 10,
    marginRight: 12,
  },
  touristVillageInfo: {
    flex: 1,
  },
  touristVillageTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  touristVillageLocationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    tintColor: "#f04a4a", // Modern red color for location pin
  },
  touristVillageLocation: {
    fontSize: 14,
    color: "#777",
    fontStyle: "italic",
  },
});

export default ExploreVillageScreen;
