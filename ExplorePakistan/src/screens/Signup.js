import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [province, setProvince] = useState('');
  const [division, setDivision] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [village, setVillage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) =>
    password.length >= 8 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const checkExistingUser = async () => {
    const response = await axios.get('http://192.168.43.98:3000/users');
    return response.data.find(user =>
      user.username === username || user.email === email
    );
  };

  const handleSignup = async () => {
    let tempErrors = {};

    if (!firstName) tempErrors.firstName = 'Required';
    if (!lastName) tempErrors.lastName = 'Required';
    if (!username) tempErrors.username = 'Required';
    if (!email) tempErrors.email = 'Required';
    else if (!isValidEmail(email)) tempErrors.email = 'Invalid email format';
    if (!password) tempErrors.password = 'Required';
    else if (!isValidPassword(password)) tempErrors.password = 'Weak password';
    if (!userId) tempErrors.userId = 'Required';
    if (!province) tempErrors.province = 'Required';
    if (!division) tempErrors.division = 'Required';
    if (!district) tempErrors.district = 'Required';
    if (!city) tempErrors.city = 'Required';
    if (!village) tempErrors.village = 'Required';

    const existingUser = await checkExistingUser();
    if (existingUser) {
      if (existingUser.username === username) tempErrors.username = 'Username already exists';
      if (existingUser.email === email) tempErrors.email = 'Email already registered';
    }

    setErrors(tempErrors);
    if (Object.keys(tempErrors).length > 0) return;

    try {
      const newUser = {
        firstName, lastName, username, email, password,
        userId, province, division, district, city, village
      };

      await axios.post('http://192.168.43.98:3000/users', newUser);

      Alert.alert(
        "Success",
        "Your account has been created successfully!",
        [{ text: "OK", onPress: () => navigation.navigate("Login") }]
      );
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  const renderInput = (label, value, setValue, key, placeholder, keyboardType = "default", secure = false) => (
    <>
      <Text style={styles.label}>
        {label}<Text style={styles.required}> *</Text>
      </Text>
      <TextInput
        style={[
          styles.input,
          errors[key] && { borderColor: 'red' }
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          setErrors(prev => ({ ...prev, [key]: null }));
        }}
        keyboardType={keyboardType}
        secureTextEntry={secure}
      />
      {errors[key] && <Text style={styles.errorText}>{errors[key]}</Text>}
    </>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Signup</Text>

      {renderInput("First Name", firstName, setFirstName, "firstName", "First Name")}
      {renderInput("Last Name", lastName, setLastName, "lastName", "Last Name")}
      {renderInput("Username", username, setUsername, "username", "Username")}
      {renderInput("Email", email, setEmail, "email", "Email", "email-address")}

      <Text style={styles.label}>Password<Text style={styles.required}> *</Text></Text>
      <View style={[
        styles.passwordContainer,
        errors.password && { borderColor: 'red' }
      ]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Your Password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setErrors(prev => ({ ...prev, password: null }));
          }}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>{passwordVisible ? '👁️' : '👁️‍🗨️'}</Text>
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <Text style={styles.passwordNote}>* Must be 8+ characters, include a number and special character (! @ # $ %) etc.</Text>

      {renderInput("User ID", userId, setUserId, "userId", "User ID")}
      {renderInput("Province", province, setProvince, "province", "Province")}
      {renderInput("Division", division, setDivision, "division", "Division")}
      {renderInput("District", district, setDistrict, "district", "District")}
      {renderInput("City", city, setCity, "city", "City")}
      {renderInput("Village", village, setVillage, "village", "Village")}

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    textAlign: 'center'
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5
  },
  required: {
    color: 'red'
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  passwordInput: {
    flex: 1,
    height: 50
  },
  eyeIcon: {
    fontSize: 20,
    marginLeft: 10,
    color: '#777'
  },
  signupButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  loginText: {
    fontSize: 14,
  },
  loginLink: {
    color: 'red',
    fontWeight: 'bold',
    marginLeft: 5
  },
  passwordNote: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10
  },
});

export default SignupScreen;
