import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';



const villages = [
  { id: "1", name: "Koherai Malakand", location: "Timergara Dir Lower (KPK)", image: require('../assets/images/timergaraImage_1.jpg') },
  { id: "2", name: "Shingrai", location: "Timergara Dir Lower (KPK)", image: require('../assets/images/timergaraImage_2.jpg') },
  { id: "3", name: "Tangai", location: "Timergara Dir Lower (KPK)", image: require('../assets/images/timergaraImage_6.jpg') },
];

const topVillages = [
  { id: "3", name: "Malakand (College)", location: "Timergara Dir Lower (KPK)", image: require('../assets/images/timergaraImage_3.jpg') },
  { id: "4", name: "Shahid Chowk", location: "Timergara Dir Lower (KPK)", image: require('../assets/images/timergaraImage_4.jpg') },
  { id: "5", name: "Chota Komrat", location: "Timergara Dir Lower (KPK)", image: require('../assets/images/timergaraImage_5.jpg') },
];


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

const ExploreVillageScreen = () => {
  const navigation = useNavigation(); // Get navigation object
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

        <Text style={styles.sectionTitle}>Wonderful Timergara</Text>
        <Text style={styles.subTitle}>Let's Explore Together</Text>

        {/* Horizontal Scrollable Villages */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.villageList}>
          {villages.map((item) => (
            <VillageCard key={item.id} item={item} />
          ))}
        </ScrollView>

        <View style={styles.topVillageHeader}>
          <Text style={styles.sectionTitle}>Top Village</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Top Villages List (Same Design as Horizontal Villages) */}
        <FlatList
          data={topVillages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <VillageCard item={item} />}
          contentContainerStyle={styles.topVillageList}
          horizontal={true}  // Enables horizontal scrolling
          showsHorizontalScrollIndicator={false}  // Hides the scroll bar
          contentContainerStyle1={{ paddingHorizontal: 10 }}  // Adjust spacing
        />
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
});

export default ExploreVillageScreen;
