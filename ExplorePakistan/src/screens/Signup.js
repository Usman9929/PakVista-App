// Fully Updated SignupScreen.js using @react-native-picker/picker
import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Alert, ActivityIndicator
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API = "http://192.168.43.98:8000";

const SignupScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    user_type: '',
    province: '',
    division: '',
    district: '',
    city: '',
    village: ''
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [provinces, setProvinces] = useState([]);
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    axios.get(`${API}/provinces/`).then(res => setProvinces(res.data));
  }, []);

  useEffect(() => {
    if (formData.province) {
      axios
        .get(`${API}/divisions/?Province_id=${formData.province}`)
        .then(res => {
          setDivisions(res.data);
        })
        .catch(err => {
          console.error('Failed to load divisions:', err);
          setDivisions([]);
        });
    } else {
      setDivisions([]);
    }
  }, [formData.province]);


  useEffect(() => {
    if (formData.division) {
      axios
        .get(`${API}/districts/?Division=${formData.division}`)
        .then(res => setDistricts(res.data))
        .catch(err => {
          console.error("Failed to load districts:", err);
          setDistricts([]);
        });
    } else {
      setDistricts([]);
    }
  }, [formData.division]);


  useEffect(() => {
    if (formData.district) {
      axios.get(`${API}/cities/`)
        .then(res => {
          const filtered = res.data.filter(
            city => city.District === parseInt(formData.district)
          );
          setCities(filtered);
        });

    } else {
      setCities([]);
    }
  }, [formData.district]);


  useEffect(() => {
    if (formData.city) {
      axios.get(`${API}/village-profile/?city=${formData.city}`)
        .then(res => setVillages(res.data));
    } else setVillages([]);
  }, [formData.city]);


  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidPassword = (password) =>
    password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    const requiredFields = ['first_name', 'last_name', 'username', 'email', 'password', 'province', 'division', 'district', 'city', 'village'];
    requiredFields.forEach(field => {
      if (!formData[field]) {
        tempErrors[field] = 'This field is required';
        isValid = false;
      }
    });

    if (!isValidEmail(formData.email)) {
      tempErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!isValidPassword(formData.password)) {
      tempErrors.password = 'Must be 8+ chars with number & special char';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${API}/api/register/`, formData); // 👈 updated
      if (response.status === 201) {
        Alert.alert("Success", "Account created successfully", [
          { text: "OK", onPress: () => navigation.navigate("Login") }
        ]);
      }
    } catch (error) {
      const apiErrors = error.response?.data || {};
      let errorMessages = {};
      Object.keys(apiErrors).forEach(key => {
        errorMessages[key] = Array.isArray(apiErrors[key]) ? apiErrors[key].join(" ") : apiErrors[key];
      });
      setErrors(errorMessages);
    } finally {
      setIsLoading(false);
    }
  };


  const renderInput = (label, field, placeholder, keyboardType = "default") => (
    <>
      <Text style={styles.label}>{label}<Text style={styles.required}> *</Text></Text>
      <TextInput
        style={[styles.input, errors[field] && { borderColor: 'red' }]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={formData[field]}
        onChangeText={(text) => handleInputChange(field, text)}
      />
      {errors[field] && <Text style={styles.errorText}>{errors[field]}</Text>}
    </>
  );

  const renderPicker = (label, field, items, labelKey, valueKey) => (
    <>
      <Text style={styles.label}>{label} <Text style={styles.required}>*</Text></Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={formData[field]}
          onValueChange={(value) => handleInputChange(field, value)}
          style={styles.picker}
        >
          <Picker.Item label={`Select ${label}`} value="" />
          {items.map((item, index) => {
            const label = item[labelKey];
            const value = item[valueKey];

            if (!label || value === undefined || value === null) return null;

            return (
              <Picker.Item
                key={`${field}-${value}`} // safely stringified
                label={label}
                value={value}
              />
            );
          })}
        </Picker>
      </View>
      {errors[field] && <Text style={styles.errorText}>{errors[field]}</Text>}
    </>
  );


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Signup</Text>

      {renderInput("First Name", "first_name", "Enter your first name")}
      {renderInput("Last Name", "last_name", "Enter your last name")}
      {renderInput("Username", "username", "Choose a username")}
      {renderInput("Email", "email", "Enter your email", "email-address")}

      <Text style={styles.label}>Password <Text style={styles.required}>*</Text></Text>
      <View style={[styles.passwordContainer, errors.password && { borderColor: 'red' }]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your password"
          secureTextEntry={!passwordVisible}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>{passwordVisible ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
      <Text style={styles.label}>Confirm Password <Text style={styles.required}>*</Text></Text>
      <View style={[styles.passwordContainer, errors.confirm_password && { borderColor: 'red' }]}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Confirm your password"
          secureTextEntry={!passwordVisible}
          value={formData.confirm_password}
          onChangeText={(text) => handleInputChange('confirm_password', text)}
        />
      </View>
      {errors.confirm_password && <Text style={styles.errorText}>{errors.confirm_password}</Text>}


      {renderPicker("Province", "province", provinces, 'provinces_name', 'provinces_id')}
      {renderPicker("Division", "division", divisions, 'Division_name', 'Division_id')}
      {renderPicker("District", "district", districts, 'District_name', 'District_id')}
      {renderPicker("City", "city", cities, 'City_name', 'City_id')}
      {renderPicker("Village", "village", villages, 'village_name', 'village_id')}
      {renderPicker("User Type", "user_type", [
        { label: "Regular", value: "Regular" },
        { label: "Vendor", value: "Vendor" },
        { label: "Moderator", value: "Moderator" }
      ], 'label', 'value')}


      <TouchableOpacity style={styles.signupButton} onPress={handleSignup} disabled={isLoading}>
        {isLoading ? <ActivityIndicator color="#fff" /> : <Text style={styles.signupButtonText}>Sign Up</Text>}
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', color: 'red', textAlign: 'center', marginBottom: 20 },
  label: { fontWeight: '600', marginBottom: 5 },
  required: { color: 'red' },
  input: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    paddingHorizontal: 10, height: 50, marginBottom: 10
  },
  pickerWrapper: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    marginBottom: 10
  },
  passwordContainer: {
    borderWidth: 1, borderColor: '#ccc', borderRadius: 8,
    flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, marginBottom: 10
  },
  passwordInput: { flex: 1, height: 50 },
  eyeIcon: { fontSize: 20, marginLeft: 10 },
  errorText: { color: 'red', fontSize: 12, marginBottom: 5 },
  signupButton: {
    backgroundColor: 'red', padding: 15,
    borderRadius: 8, alignItems: 'center', marginTop: 10
  },
  signupButtonText: { color: '#fff', fontWeight: 'bold' },
  loginContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 10 },
  loginLink: { color: 'red', fontWeight: 'bold', marginLeft: 5 }
});

export default SignupScreen;
