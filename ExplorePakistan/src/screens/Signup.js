import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const navigation = useNavigation();
  
  // States for Input Fields
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Signup</Text>

      {/* First Section */}
      <TextInput style={styles.input} placeholder="First Name" />
      <TextInput style={styles.input} placeholder="Last Name" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      {/* Password Input with Visibility Toggle */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter Your Password"
          secureTextEntry={!passwordVisible} 
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
          <Text style={styles.eyeIcon}>{passwordVisible ? '👁️' : '👁️‍🗨️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Second Section */}
      <TextInput style={styles.input} placeholder="User ID" />
      <TextInput style={styles.input} placeholder="Province" />
      <TextInput style={styles.input} placeholder="Division" />
      <TextInput style={styles.input} placeholder="District" />
      <TextInput style={styles.input} placeholder="City" />
      <TextInput style={styles.input} placeholder="Village" />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}> Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.separator} />
      </View>

      {/* Facebook Login Button */}
      <TouchableOpacity style={styles.facebookButton}>
        <Image source={require('../assets/icons/facebook.png')} style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Signup with Facebook</Text>
      </TouchableOpacity>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../assets/icons/google.png')} style={styles.socialIcon} />
        <Text style={styles.googleButtonText}>Signup with Google</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
    marginTop: 20
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
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
    width: '85%',
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
    marginTop: 10,
    fontSize: 14,
  },
  loginLink: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 9,
    marginLeft: 5
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    width: '100%'
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc'
  },
  orText: {
    marginHorizontal: 10,
    color: '#888'
  },
  facebookButton: {
    backgroundColor: '#1877F2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    width: '85%',
    marginBottom: 15,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 10,
    width: '85%',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 50,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 50
  },
  googleButtonText: {
    fontSize: 16,
    color: 'black',
    marginRight: 65
  },
});

export default SignupScreen;
