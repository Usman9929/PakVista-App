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




  // Guest Screen Style
  guestcontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    overflow: 'hidden',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  aboutSection: {
    padding: 15,
  },
  guettitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  guestdescription: {
    fontSize: 15,
    color: '#666',
    marginTop: 10,
    marginBottom: 10
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  guestbutton: {
    backgroundColor: '#E74C3C', // Red color like the design
    width: 110,
    height: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  guestbuttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  touristAttraction: {
    padding: 15,
  },
  touristItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 10,
  },
  touristImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  touristTextContainer: {
    marginLeft: 10,
  },
  touristTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  touristLocation: {
    fontSize: 14,
    color: 'gray',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 48, // Adjust icon size based on your image
    height: 48,
    resizeMode: 'contain',
  },
});

export default styles