import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Your Username / Email"
          placeholderTextColor="#888"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Your Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}  // Toggle password visibility
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
          <Image
            source={passwordVisible
              ? require('../assets/icons/eye_open.png')   // Show open eye icon when visible
              : require('../assets/icons/eye_close.png') // Show closed eye icon when hidden
            }
            style={styles.eyeImage}
          />
        </TouchableOpacity>
      </View>


      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Signup Option */}
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupButton}> Signup</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.divider} />
      </View>

      {/* Facebook Login Button */}
      <TouchableOpacity style={styles.facebookButton}>
        <Image
          source={require('../assets/icons/facebook.png')} // Use a local Facebook icon image
          style={styles.socialIcon}
        />
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </TouchableOpacity>

      {/* Google Login Button */}
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/icons/google.png')} // Use a local Google icon image
          style={styles.socialIcon}
        />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 28,
    color: '#e63946',
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    width: '100%',
    height: 50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  forgotPassword: {
    color: '#e63946',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'right',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#e63946',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signupText: {
    fontSize: 14,
    color: 'black',
  },
  signupButton: {
    fontSize: 14,
    color: '#e63946',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#666',
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
  eyeIcon: {
    position: 'absolute',
    right: 15, // Moves icon to the right side of input
  },
  eyeImage: {
    width: 24,
    height: 24,
    tintColor: '#888', // Change color if needed
  },  
});
