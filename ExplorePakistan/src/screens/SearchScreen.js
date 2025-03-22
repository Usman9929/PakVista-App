import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import FastImage from 'react-native-fast-image';

const categories = [
    { id: '1', name: 'Mount', image: require('../assets/images/mount.jpg') },
    { id: '2', name: 'Beach', image: require('../assets/images/beach.jpg') },
    { id: '3', name: 'Crater', image: require('../assets/images/crater.jpg') },
    { id: '4', name: 'Waterfall', image: require('../assets/images/waterfall.jpg') },
    { id: '5', name: 'River', image: require('../assets/images/rivers.jpg') }
];

const recommendedPlaces = [
    { id: '1', name: 'Koherai Malakand', location: 'Timergara Dir Lower (KPK)', image: require('../assets/images/timergaraImage_1.jpg') },
    { id: '2', name: 'Shingrai', location: 'Timergara Dir Lower', image: require('../assets/images/timergaraImage_4.jpg') },
    { id: '3', name: 'Sar Pato', location: 'Timergara Dir Lower', image: require('../assets/images/timergaraImage_5.jpg') }
];

const SearchScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Search</Text>
                <FastImage source={require('../assets/images/user.jpg')} style={styles.profileImage} />
            </View>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Image source={require('../assets/icons/search-interface-symbol.png')} style={styles.searchIcon} />
                <TextInput placeholder="Search" style={styles.searchInput} />
            </View>

            {/* Categories */}
            <Text style={styles.sectionTitle}>Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
                {categories.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.categoryItem}>
                        <FastImage source={item.image} style={styles.categoryImage} />
                        <Text style={styles.categoryText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Recommended Places (Horizontal Scroll) */}
            <Text style={styles.sectionTitle}>Recommend</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendContainer}>
                {recommendedPlaces.map((item) => (
                    <View key={item.id} style={styles.recommendItem}>
                        <FastImage source={item.image} style={styles.recommendImage} />
                        <Text style={styles.recommendTitle}>{item.name}</Text>

                        {/* Location Container (Icon + Text) */}
                        <View style={styles.locationContainer}>
                            <Image
                                source={require("../assets/icons/location.png")}
                                style={styles.locationIcon}
                            />
                            <Text style={styles.recommendLocation}>{item.location}</Text>
                        </View>
                    </View>
                ))}

            </ScrollView>
            {/* Recommended Places (Horizontal Scroll) */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recommendContainer}>
                {recommendedPlaces.map((item) => (
                    <View style= {{marginBottom:40}}>
                    <View key={item.id} style={styles.recommendItem}>
                        <FastImage source={item.image} style={styles.recommendImage} />
                        <Text style={styles.recommendTitle}>{item.name}</Text>

                        {/* Location Container (Icon + Text) */}
                        <View style={styles.locationContainer}>
                            <Image
                                source={require("../assets/icons/location.png")}
                                style={styles.locationIcon}
                            />
                            <Text style={styles.recommendLocation}>{item.location}</Text>
                        </View>
                    </View>
                    </View>
                ))}
            </ScrollView>
        </View>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        padding: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 15
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#E53935',
        marginLeft: 150,
        marginTop: 20
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10,
        borderColor: "red",
        borderWidth: 0.5,
        marginHorizontal: 10,
        height: 60,
        marginTop:20
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        marginLeft: 15,
        tintColor: "gray"
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
    },
    sectionTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        marginTop: 15,
        marginLeft: 15,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        marginTop: 20,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20
    },
    categoryImage: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    categoryText: {
        marginTop: 5,
        fontSize: 14
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
    },
    recommendContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginLeft: 5
    },
    recommendItem: {
        backgroundColor: "#FFF",
        borderRadius: 15,
        padding: 5,
        marginLeft: 5,
        marginRight: 4, // Ensure space between cards
        width: 260,// Set a fixed width for consistency
        height: 250,
        alignItems: "center",
        paddingBottom: 20,
        shadowColor: "red",       // Shadow color
        shadowOffset: { width: 0, height: 3 }, // Shadow direction
        shadowOpacity: 0.2,        // Adjust transparency (0-1)
        shadowRadius: 10,           // Blur effect

        // 🔹 REQUIRED FOR ANDROID (because shadow properties work only on iOS)
        elevation: 8,              // Android shadow effect
        marginBottom: 20
    },
    recommendImage: {
        width: "100%",
        height: "80%",
        borderRadius: 12,
    },
    recommendTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 6,
        textAlign: "left",  // Ensures left alignment
        alignSelf: "flex-start", // Aligns the text to the start of the container
        marginRight: 0, // Remove the right margin if not needed
        marginLeft: 10
    },
    recommendLocation: {
        fontSize: 12,
        color: '#666',
        marginTop: 2,
        marginLeft: 5,
        textAlign: "left",  // Ensures left alignment
        alignSelf: "flex-start", // Aligns the text to the start of the container
        marginRight: 0 // Remove the right margin if not needed
    },
    locationIcon: {
        width: 14,
        height: 14,
        marginRight: 10, // Adds spacing between the icon and text
        tintColor: 'red' // Optional: Set color to match design
    },
});

export default SearchScreen;
