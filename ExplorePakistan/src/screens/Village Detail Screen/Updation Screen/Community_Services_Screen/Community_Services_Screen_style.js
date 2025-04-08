import {StyleSheet} from 'react-native';
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
    marginTop: -30,
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

export default styles;
