import { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text, StyleSheet, Image, Dimensions, LinearGradient, ScrollView} from "react-native";
import Economy from "./Economy";
import CulturalInformation from "./CulturalInformation";
import GeographicalInfo from "./GeographicalInfo";
import HistoricalBackground from "./HistoricalBackground";
import PopulationDetail from "./PopulationDetail";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {

    return (
        <View style={styles.container}>
            {/* Image with Gradient Overlay */}
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../assets/images/timergaraImage_1.jpg")}
                    style={styles.headerImage}
                />
                <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.7)"]}
                    style={styles.imageOverlay}
                />
            </View>

            {/* Styled Tab Navigator */}
            <View style={styles.tabContainer}>
                <NavigationContainer independent={true}>
                    <Tab.Navigator
                        screenOptions={{
                            tabBarStyle: styles.tabBar,
                            tabBarIndicatorStyle: styles.tabIndicator,
                            tabBarLabelStyle: styles.tabLabel,
                            tabBarActiveTintColor: "#fff",
                            tabBarInactiveTintColor: "#ccc",
                        }}
                    >
                        <Tab.Screen name="Population Detail" component={PopulationDetail} />
                        <Tab.Screen name="Geographical Info" component={GeographicalInfo} />
                        <Tab.Screen name="Economy" component={Economy} />
                        <Tab.Screen name="Historical Background" component={HistoricalBackground} />
                        <Tab.Screen name="Cultural Information" component={CulturalInformation} />
                    </Tab.Navigator>
                </NavigationContainer>
            </View>

            {/* Explore Content */}
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.exploreText}>Explore Screen</Text>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    imageContainer: {
        position: "relative",
        width: "100%",
        height: 220,
        overflow: "hidden",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    headerImage: {
        width: "100%",
        height: 350, // Adjust the height as needed
        resizeMode: "cover",
        borderRadius: 15
    },
    imageOverlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        bottom: 0,
    },
    imageText: {
        position: "absolute",
        bottom: 20,
        left: 20,
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.5)",
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    tabContainer: {
        flex: 1,
        marginTop: -10, // Pulls the tab closer to image
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        overflow: "hidden",
    },
    tabBar: {
        backgroundColor: "#3b3b98",
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    tabIndicator: {
        backgroundColor: "#ff9f1a",
        height: 4,
    },
    tabLabel: {
        fontSize: 14,
        fontWeight: "bold",
    },
});
export default TopTabNavigator;
