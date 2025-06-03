import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, ActivityIndicator
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const SignupScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    province: '',
    division: '',
    district: '',
    city: '',
    village: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) =>
    password.length >= 8 && /\d/.test(password) && /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
    // Clear error when user types
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: null
      });
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.first_name.trim()) {
      tempErrors.first_name = 'First name is required';
      isValid = false;
    }
    if (!formData.last_name.trim()) {
      tempErrors.last_name = 'Last name is required';
      isValid = false;
    }
    if (!formData.username.trim()) {
      tempErrors.username = 'Username is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (!isValidPassword(formData.password)) {
      tempErrors.password = 'Password must be 8+ chars with a number and special character';
      isValid = false;
    }
    if (!formData.user_id.trim()) {
      tempErrors.user_id = 'User ID is required';
      isValid = false;
    }
    if (!formData.province.trim()) {
      tempErrors.province = 'Province is required';
      isValid = false;
    }
    if (!formData.division.trim()) {
      tempErrors.division = 'Division is required';
      isValid = false;
    }
    if (!formData.district.trim()) {
      tempErrors.district = 'District is required';
      isValid = false;
    }
    if (!formData.city.trim()) {
      tempErrors.city = 'City is required';
      isValid = false;
    }
    if (!formData.village.trim()) {
      tempErrors.village = 'Village is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.post('http://10.0.2.2:8000/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)

      if (response.status === 201) {
        Alert.alert(
          "Success",
          "Your account has been created successfully!",
          [{ text: "OK", onPress: () => navigation.navigate("Login") }]
        );
      }
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
      
      // Handle DRF validation errors
      if (error.response?.data) {
        const apiErrors = error.response.data;
        let errorMessages = {};
        
        // Map API errors to form fields
        for (const key in apiErrors) {
          if (Array.isArray(apiErrors[key])) {
            errorMessages[key] = apiErrors[key].join(' ');
          } else {
            errorMessages[key] = apiErrors[key];
          }
        }
        
        setErrors(errorMessages);
        
        // Show general error if no field-specific errors
        if (Object.keys(errorMessages).length === 0) {
          Alert.alert("Error", "Registration failed. Please try again.");
        }
      } else {
        Alert.alert("Error", "Network error. Please check your connection.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const renderInput = (label, field, placeholder, keyboardType = "default", secure = false) => (
    <>
      <Text style={styles.label}>
        {label}<Text style={styles.required}> *</Text>
      </Text>
      <TextInput
        style={[
          styles.input,
          errors[field] && { borderColor: 'red' }
        ]}
        placeholder={placeholder}
        value={formData[field]}
        onChangeText={(text) => handleInputChange(field, text)}
        keyboardType={keyboardType}
        secureTextEntry={secure}
      />
      {errors[field] && <Text style={styles.errorText}>{errors[field]}</Text>}
    </>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Signup</Text>

      {renderInput("First Name", "first_name", "First Name")}
      {renderInput("Last Name", "last_name", "Last Name")}
      {renderInput("Username", "username", "Username")}
      {renderInput("Email", "email", "Email", "email-address")}

      <Text style={styles.label}>Password<Text style={styles.required}> *</Text></Text>
      <View style={[
        styles.passwordContainer,
        errors.password && { borderColor: 'red' }
      ]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Your Password"
          secureTextEntry={!passwordVisible}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>{passwordVisible ? '👁️' : '👁️‍🗨️'}</Text>
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <Text style={styles.passwordNote}>* Must be 8+ characters, include a number and special character (! @ # $ %) etc.</Text>

  
      {renderInput("Province", "province", "Province")}
      {renderInput("Division", "division", "Division")}
      {renderInput("District", "district", "District")}
      {renderInput("City", "city", "City")}
      {renderInput("Village", "village", "Village")}

      <TouchableOpacity 
        style={styles.signupButton} 
        onPress={handleSignup}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.signupButtonText}>Sign Up</Text>
        )}
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