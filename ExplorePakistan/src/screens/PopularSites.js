import React, { useState } from "react";
import { View, Text, ImageBackground, FlatList, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

const categories = ["All", "Population Detail", "Geographical Info", "Economy", "Historical Background", "Cultural Information"];

const popularSites = [
    { id: "1", name: "Koherai Malakand", location: "Timergara Dir Lower (KPK)", image: require("../assets/images/timergaraImage_1.jpg") },
    { id: "2", name: "Shingrai", location: "Timergara Dir Lower", image: require("../assets/images/timergaraImage_2.jpg") },
];

const topSites = [
    { id: "1", name: "Malakand (College)", location: "Timergara Dir Lower (KPK)", image: require("../assets/images/timergaraImage_3.jpg") },
    { id: "2", name: "Shahid Chowk", location: "Timergara Dir Lower (KPK)", image: require("../assets/images/timergaraImage_4.jpg") },
];

const PopularSites = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                {/* Header Section */}
                <ImageBackground source={require("../assets/images/timergaraImage_5.jpg")} style={styles.headerImage}>
                    <Text style={styles.headerText}>Wonderful Timergara</Text>
                    <Text style={styles.subHeaderText}>Let's Explore Together !!</Text>
                </ImageBackground>

                {/* Category Tabs */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
                    {categories.map((category, index) => (
                        <TouchableOpacity key={index} onPress={() => setSelectedCategory(category)}>
                            <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategory]}>
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Popular Sites */}
                <FlatList
                    horizontal
                    data={popularSites}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.siteCard}>
                            <Image source={item.image} style={styles.siteImage} />
                            <Text style={styles.siteTitle}>{item.name}</Text>
                            <View style={styles.locationContainer}>
                                <Image source={require("../assets/icons/location.png")} style={styles.locationIcon} />
                                <Text style={styles.siteLocation}>{item.location}</Text>
                            </View>
                        </View>
                    )}
                />

                {/* Top Sites */}
                <Text style={styles.sectionTitle}>Top Sites !!</Text>
                <FlatList style = {{marginBottom:70}}
                    data={topSites}
                    keyExtractor={(item) => item.id}
                    scrollEnabled={false}  // Disable FlatList scrolling
                    renderItem={({ item }) => (
                        <View style={styles.topSiteCard}>
                            <Image source={item.image} style={styles.topSiteImage} />
                            <View>
                                <Text style={styles.topSiteTitle}>{item.name}</Text>
                                <View style={styles.locationContainer}>
                                    <Image source={require("../assets/icons/location.png")} style={styles.locationIcon} />
                                    <Text style={styles.topSiteLocation}>{item.location}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f8f8"
    },
    headerImage: {
        width: "100%",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        alignSelf:"flex-start",
        marginLeft:15,
        marginTop:60
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight:"bold",
        color: "white",
        alignSelf:"flex-start",
        marginLeft:15,
        marginTop:10
    },
    categoriesContainer: {
        paddingHorizontal: 15,
        marginTop: 10
    },
    categoryText: {
        marginRight: 15,
        fontSize: 14,
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#E5E5E5",
        borderRadius: 10
    },
    selectedCategory: {
        backgroundColor: "red",
        color: "white"
    },
    siteCard: {
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 5,
        marginLeft: 5,
        marginRight: 12,
        width: 260,
        height: 250,
        alignItems: "center",
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 8,
        marginBottom: 20,
        marginTop:20
    },
    siteImage: {
        width: "100%",
        height: "80%",
        borderRadius: 12,
    },
    siteTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 6,
        alignSelf: "flex-start",
        marginLeft: 10
    },
    locationContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,
        marginLeft: 10
    },
    locationIcon: {
        width: 14,
        height: 14,
        marginRight: 5
    },
    siteLocation: {
        fontSize: 14,
        color: "gray"
    },
    favoriteIcon: {
        position: "absolute",
        top: 5,
        right: 5
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: "bold",
        marginVertical: 8,
        marginTop: 5,
        marginLeft: 12
    },
    topSiteCard: {
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
    topSiteImage: {
        width: 100,
        height: 90,
        borderRadius: 10,
        marginRight: 12,
    },
    topSiteTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        textAlign: "center"
    },
    topSiteLocation: {
        fontSize: 14,
        color: "gray",
        marginTop: 6
    }
});

export default PopularSites;
