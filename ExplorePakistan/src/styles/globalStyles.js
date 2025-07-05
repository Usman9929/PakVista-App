import { StyleSheet } from "react-native";

// Welcome Screeen StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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

  // Regional Screen stle
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
  guetsubtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 15,
    marginBottom: 20
  },
  guestdescription: {
    fontSize: 15,
    color: '#666',
    marginTop: 10,
    marginBottom: 10
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  gridButtonPrimary: {
    backgroundColor: '#3498db',
  },
  gridButtonPrimaryText: {
    color: '#fff',
  },
  gridContainer: {
  padding: 10,
  marginBottom: 15,
},
  gridButtonSecondary: {
    backgroundColor: '#2ecc71',
  },
  gridButtonTertiary: {
    backgroundColor: '#9b59b6',
  },
  gridButtonAccent: {
    backgroundColor: '#e74c3c',
  },
  gridButtonWarning: {
    backgroundColor: '#f39c12',
  },
  gridButtonNeutral: {
    backgroundColor: '#34495e',
  },
  guestbutton: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  guestbuttonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
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
  lastcontainer: {
    marginBottom: 40
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
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});


export default styles