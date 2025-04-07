import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const EducationAddButton = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Display Image at the Top */}
      <Image
        source={require("../../../../assets/images/timergaraImage_1.jpg")}
        style={styles.image}
      />

      {/* Form Box Below the Image */}
      <View style={styles.formContainer}>
        <Text style={styles.header}>Educational Services</Text>

        <Text style={styles.label}>School :</Text>
        <TextInput style={styles.input} placeholder="Enter school name" placeholderTextColor="#888" />

        <Text style={styles.label}>College :</Text>
        <TextInput style={styles.input} placeholder="Enter college name" placeholderTextColor="#888" />

        <Text style={styles.label}>Training Center :</Text>
        <TextInput style={styles.input} placeholder="Enter training center" placeholderTextColor="#888" />

        <Text style={styles.label}>University Presence :</Text>
        <TextInput style={styles.input} placeholder="Enter university" placeholderTextColor="#888" />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert(
              "Success",
              "Your data has been submitted successfully!",
              [
                {
                  text: "OK",
                  onPress: () => navigation.goBack(), // or navigation.navigate('CommunityScreen') if you prefer
                },
              ]
            );
          }}
        >
          <LinearGradient colors={['#ff7e5f', '#ff2d55']} style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 25,
    marginHorizontal: 12,
    borderRadius: 20,
    marginTop: -30, // slight overlap for visual effect
    elevation: 5,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#d32f2f',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#444',
    marginTop: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#d32f2f',
    padding: 10,
    fontSize: 14,
    marginTop: 5
  },
  button: {
    marginTop: 30,
    borderRadius: 30,
    overflow: 'hidden',
    width: 150,
    marginLeft: 100
  },
  buttonGradient: {
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EducationAddButton;
