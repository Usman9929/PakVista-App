import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const Historical_Background = [
  "Khazana is a locality in the Lower Dir District of Khyber Pakhtunkhwa, Pakistan, situated near the district headquarters, Timergara. The area is known for its picturesque landscapes, including views of the Panjkora River and surrounding valleys. The Khazana Bypass Bridge, which spans the Panjkora River, serves as a significant infrastructure feature in the region."
];

const HistoricalBackground = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        {/* Emergency Contacts Section */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Historical Background</Text>

          <View style={{ marginBottom: 60 }}>
            {Historical_Background.map((detail, i) => (
              <View key={i} style={styles.cardWrapper}>
                <View style={styles.card}>
                  <Text style={styles.cardText}>{detail}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};



export default HistoricalBackground;
