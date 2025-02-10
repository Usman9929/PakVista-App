import { StyleSheet } from "react-native";

// Welcome Screeen StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%', // Full screen height
    resizeMode: 'cover', // Ensure the image covers the area
    position: 'absolute', // Position the image as a background
  },
  textContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 280,
    alignItems: 'center',
    margin: 10,
    paddingTop: 60,
    shadowColor: '#000', // Black shadow
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.8, // Shadow opacity
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // For Android shadow
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nametitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "red"
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff5555',
    padding: 12,
    borderRadius: 20,
    width: 110,
    marginTop: 25
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },

  // Modal Design of Select City Button.
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  cityOption: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default styles