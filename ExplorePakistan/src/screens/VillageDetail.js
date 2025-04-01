import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import About from "./Village Detail Screen/About";
import SignificantPeaple from "./Village Detail Screen/SignificantPeaple";
import AdditionalElement from "./Village Detail Screen/AdditionalElement";
import CommunityServices from "./Village Detail Screen/CommunityServices";
import CulturalInformation from "./Village Detail Screen/CulturalInfo";
import Economy from "./Village Detail Screen/Economy";
import GeographicalInfo from "./Village Detail Screen/GeographicalInfo";
import HistoricalBackground from "./Village Detail Screen/HistoricalBackground";
import Photo from "./Village Detail Screen/Photo";
import PopulationDetail from "./Village Detail Screen/PopulationDetail";
import TouristAttraction from "./Village Detail Screen/TouristAttraction";
import VillageEmergencyContact from "./Village Detail Screen/VillageEmergencyContact";


// Create top tab navigator
const Tab = createMaterialTopTabNavigator();

const VillageDetail = ({ route }) => {
  const navigation = useNavigation();
  const { village } = route.params; // Get village data from navigation

  return (
    <View style={styles.container}>
      {/* Village Image */}
      <Image source={{ uri: village.image }} style={styles.villageImage} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <Image source={require("../assets/icons/left.png")} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      {/* Village Info */}
      <View style={styles.villageInfo}>
        <Text style={styles.villageName}>{village.name}</Text>
        <View style={styles.locationContainer}>
           <Image source={require("../assets/icons/location.png")} style={{ width: 16, height: 16 }} />
          <Text style={styles.villageLocation}>{village.location}</Text>
        </View>
      </View>

      {/* Tab Navigator */}
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold", },
          tabBarPressColor: "transparent", // Prevents unwanted highlight effects
          tabBarIndicatorStyle: { backgroundColor: "red", height: 2},
          tabBarStyle: { backgroundColor: "white", },
          tabBarScrollEnabled: true, // Enables horizontal scrolling
          lazy: true,
        }}
      >
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Significant People" component={SignificantPeaple} />
        <Tab.Screen name="Photos" component={Photo} />
        <Tab.Screen name="Community Services" component={CommunityServices} />
        <Tab.Screen name="Tourist Attraction" component={TouristAttraction} />
        <Tab.Screen name="Emergency Conatact" component={VillageEmergencyContact} />
        <Tab.Screen name="Additional Element" component={AdditionalElement} />
        <Tab.Screen name="Population Detail" component={PopulationDetail} />
        <Tab.Screen name="Geographical Info" component={GeographicalInfo} />
        <Tab.Screen name="Historical Background" component={HistoricalBackground} />
        <Tab.Screen name="Economy" component={Economy} />
        <Tab.Screen name="Cultural Information" component={CulturalInformation} />
      </Tab.Navigator>
    </View>
  );
};

export default VillageDetail;

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  villageImage: { width: "100%", height: 280,},
  backButton: { position: "absolute", top: 20, left: 13, backgroundColor: "rgba(0,0,0,0.5)", padding: 10, borderRadius: 20 },
  villageInfo: { padding: 15, backgroundColor: "white", borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -30 },
  villageName: { fontSize: 20, fontWeight: "bold", color: "#333",marginLeft:20 },
  locationContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  villageLocation: { fontSize: 14, color: "gray", marginLeft: 5 },
  favoriteIcon: { marginLeft: 5 },
  tabContent: { flex: 1, padding: 15, backgroundColor: "white" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  description: { fontSize: 14, color: "#555" },
});
