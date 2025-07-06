import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";

// Screens
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

const Tab = createMaterialTopTabNavigator();

const VillageDetail = ({ route }) => {
  const navigation = useNavigation();
  const { villageData } = route.params;

  const imageUrl = villageData.Image?.startsWith("http")
    ? villageData.Image
    : `http://192.168.43.98:8000${villageData.Image}`;

  return (
    <View style={styles.container}>
      {/* Village Image */}
      <Image source={{ uri: imageUrl }} style={styles.villageImage} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={require("../assets/icons/left.png")} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      {/* Village Info */}
      <View style={styles.villageInfo}>
        <Text style={styles.villageName}>{villageData.village_name}</Text>
        <View style={styles.locationContainer}>
          <Image
            source={require("../assets/icons/people.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={styles.villageLocation}>
            Population: {villageData.population || "N/A"}
          </Text>
        </View>
      </View>

      {/* Tab Navigation */}
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 13, fontWeight: "bold" },
          tabBarPressColor: "transparent",
          tabBarIndicatorStyle: { backgroundColor: "red", height: 2 },
          tabBarStyle: { backgroundColor: "white" },
          tabBarScrollEnabled: true,
          lazy: true,
        }}
      >
        <Tab.Screen name="About">{() => <About route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Significant People">{() => <SignificantPeaple route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Photos" component={Photo} />
        <Tab.Screen name="Community Services">{() => <CommunityServices route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Tourist Attraction">{() => <TouristAttraction route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Emergency Contact">{() => <VillageEmergencyContact route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Additional Element">{() => <AdditionalElement route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Population Detail">{() => <PopulationDetail route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Geographical Info">{() => <GeographicalInfo route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Historical Background">{() => <HistoricalBackground route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Economy">{() => <Economy route={{ params: { villageData } }} />}</Tab.Screen>
        <Tab.Screen name="Cultural Information">{() => <CulturalInformation route={{ params: { villageData } }} />}</Tab.Screen>

      </Tab.Navigator>
    </View>
  );
};

export default VillageDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  villageImage: { width: "100%", height: 280 },
  backButton: {
    position: "absolute",
    top: 20,
    left: 13,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
  villageInfo: {
    padding: 15,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  villageName: { fontSize: 20, fontWeight: "bold", color: "#333", marginLeft: 20 },
  locationContainer: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  villageLocation: { fontSize: 14, color: "gray", marginLeft: 5 },
});
