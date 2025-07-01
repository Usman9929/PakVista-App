import { View, Text, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useRoute } from '@react-navigation/native';


// Import your screen components
import Economy from "./Economy";
import CulturalInformation from "./CulturalInformation";
import GeographicalInfo from "./GeographicalInfo";
import HistoricalBackground from "./HistoricalBackground";
import PopulationDetail from "./PopulationDetail";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  // Get cityData from route params
  const { params } = useRoute();
  const cityData = params?.cityData || {};
  
    return (
        <View style={styles.container}>
            {/* Header Image with Overlay */}
            <View style={styles.headerContainer}>
                 <Image
                    source={require("../../assets/images/timergaraImage_1.jpg")}
                    style={styles.headerImage}
                />
                {/* Overlay content */}
                <View style={styles.overlay}>
                    <Text style={styles.villageName}>{cityData.City_name}</Text>
                    <View style={styles.locationContainer}>
                        <Text style={styles.locationText}>Let's Explore together</Text>
                    </View>
                </View>
            </View>

            {/* Tabs */}
            <Tab.Navigator
                screenOptions={{
                    tabBarScrollEnabled: true,
                    tabBarLabelStyle: {
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "gray",
                        marginTop: 10
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "red",
                        height: 2,
                        borderRadius: 6,
                        width: 155,
                        marginLeft: 10,
                    },
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        elevation: 5,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 60,
                        overflow: "hidden",
                        paddingHorizontal: 10,
                    },
                }}
            >
                <Tab.Screen name="Population Detail">
                    {() => <PopulationDetail cityData={cityData} />}
                </Tab.Screen>
                <Tab.Screen name="Cultural Information">
                    {() => <CulturalInformation cityData={cityData} />}
                </Tab.Screen>
                <Tab.Screen name="Economy">
                    {() => <Economy cityData={cityData} />}
                </Tab.Screen>
                <Tab.Screen name="Geographical Info">
                    {() => <GeographicalInfo cityData={cityData} />}
                </Tab.Screen>
                <Tab.Screen name="Historical Background">
                    {() => <HistoricalBackground cityData={cityData} />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        position: "relative",
    },
    headerImage: {
        width: "100%",
        height: 230,
        resizeMode: "cover",
    },
    overlay: {
        position: "absolute",
        bottom: 10,
        left: 20,
    },
    villageName: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    locationText: {
        fontSize: 20,
        color: "#fff",
        marginLeft: 4,
        marginBottom: 15
    },
    favoriteIcon: {
        position: "absolute",
        right: 20,
        top: -30,
    },
});

export default TopTabNavigator;
