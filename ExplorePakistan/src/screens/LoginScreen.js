import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    if (!identifier || !password) {
      setError('Please enter your email and password.');
      return;
    }

    try {
      const response = await fetch("http://192.168.43.98:8000/api/token/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: identifier,
          password: password
        })
      });

      const data = await response.json();

      if (response.ok) {
        await AsyncStorage.setItem('access', data.access);
        await AsyncStorage.setItem('refresh', data.refresh);

        navigation.navigate('NewsFeed'); // Redirect to NewsFeed screen
      } else {
        setError(data.detail || 'Login failed. Please check credentials.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Unable to connect to server.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor="#888"
          style={styles.input}
          value={identifier}
          onChangeText={setIdentifier}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Your Password"
          placeholderTextColor="#888"
          secureTextEntry={!passwordVisible}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
          <Image
            source={passwordVisible
              ? require('../assets/icons/eye_open.png')
              : require('../assets/icons/eye_close.png')}
            style={styles.eyeImage}
          />
        </TouchableOpacity>
      </View>

      {error !== '' && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupButton}> Signup</Text>
        </TouchableOpacity>
      </View>
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
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  eyeImage: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});
