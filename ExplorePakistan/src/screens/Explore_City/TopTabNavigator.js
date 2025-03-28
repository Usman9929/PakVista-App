import { View, Text, StyleSheet, Image } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Economy from "./Economy";
import CulturalInformation from "./CulturalInformation";
import GeographicalInfo from "./GeographicalInfo";
import HistoricalBackground from "./HistoricalBackground";
import PopulationDetail from "./PopulationDetail";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
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
                    <Text style={styles.villageName}>Wonderful Timergara</Text>
                    <View style={styles.locationContainer}>

                        <Text style={styles.locationText}>Let's Explore togather</Text>

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
                        color: "gray", // Darker text for contrast
                        marginTop:10
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "red",
                        height: 2, // Thicker indicator for visibility
                        borderRadius: 6,
                        width:155,
                        marginLeft:10,
                    },
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        elevation: 5, // Shadow effect (Android)
                        shadowColor: "#000", // Shadow color (iOS)
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 60, // Increased height for better spacing
                        overflow: "hidden", // Ensures border-radius is applied
                        paddingHorizontal: 10, // Better padding
                    },
                }}
            >
                <Tab.Screen name="Population Detail" component={PopulationDetail} />
                <Tab.Screen name="Cultural Information" component={CulturalInformation} />
                <Tab.Screen name="Economy" component={Economy} />
                <Tab.Screen name="Geograohical Info" component={GeographicalInfo} />
                <Tab.Screen name="Hitorical Background" component={HistoricalBackground} />
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
