import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';

const About = ({ route }) => {
  const { villageData } = route.params;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>

        {/* Description Section */}
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Description</Text>

          <View style={{ marginBottom: 60 }}>
            <View style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.cardText}>
                  {villageData.description || 'No description available for this village.'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;
