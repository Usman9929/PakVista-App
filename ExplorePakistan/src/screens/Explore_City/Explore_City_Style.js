import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    headerImage: {
        width: '100%',
        height: 350,
        resizeMode: 'cover'
    },
    cardWrapper: {
        marginBottom: 15,
        borderRadius: 60,
        shadowColor: 'red',
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6, // Android shadow
        shadowOffset: { width: 0, height: 4 },
    },
    content: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: -20,
        marginRight: 15,
        marginLeft: 15
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        alignSelf:"flex-start",
        marginTop:20
    },
    listContainer: {
        paddingBottom: 80
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        overflow: 'hidden', // Prevents shadow bleeding inside
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#d9534f',
        marginBottom: 5
    },
    cardText: {
        fontSize: 14,
        marginBottom: 3
    },
    bold: {
        fontWeight: 'bold'
    },
    addButton: {
        backgroundColor: '#d9534f',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginTop: 10
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
});

export default styles;