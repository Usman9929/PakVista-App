import React, { useState } from 'react';
import { View, Image, StyleSheet, Modal, TouchableOpacity, ScrollView } from 'react-native';

// Array of Khazana city images
const khazanaImages = [
  require('../../assets/images/timergaraImage_1.jpg'),
  require('../../assets/images/timergaraImage_2.jpg'),
  require('../../assets/images/timergaraImage_3.jpg'),
  require('../../assets/images/timergaraImage_4.jpg'),
  require('../../assets/images/timergaraImage_5.jpg'),
  require('../../assets/images/timergaraImage_6.jpg'),
  require('../../assets/images/timergaraImage_8.jpg'),
];

const Photos = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Open modal with selected image
  const openImage = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        {khazanaImages.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => openImage(image)} style={styles.imageWrapper}>
            <Image source={image} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for Enlarged Image */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalBackground}>
            {selectedImage && <Image source={selectedImage} style={styles.fullImage} />}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 15 },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: '48%', // Ensures images stay in grid
    marginVertical: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBackground: { width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' },
  fullImage: { width: '120%', height: '120%', resizeMode: 'contain', borderRadius: 10 },
});

export default Photos;
