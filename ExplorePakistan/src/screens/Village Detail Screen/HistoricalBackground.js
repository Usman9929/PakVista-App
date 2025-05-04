import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './VillageDetailScreenStyle';
import { useNavigation } from '@react-navigation/native';

const Historical_Background = [
  {
    title: 'Local Festival',
    details: [
      {label:"Founding Year", value: "1850"},
      {label:"Founders", value: "Local Pashtun tribes, primarily from the Yousafzai and Mandanr clans"},
      {label:"Historical Events", value: "Played a role in the resistance against British rule in the early 20th century; significant development post-1947 with road and infrastructure improvements."},
      {label:"Cultural Significance", value: "Known for traditional Pashto music, poetry, and strong community ties; hosts annual cultural festivals."},
      {label:"Monuments or Landmarks", value: "An old mosque built in the early 1900s, ancient gravesites of local tribal leaders."},
      {label:"Ethnic Background", value: "Predominantly Pashtun, with sub-clans like Yousafzai, Mandanr, and Mohmand."},
      {label:"Famous Persons", value: "Local poets and scholars, including religious leaders who contributed to the region’s cultural heritage."},
      {label:"Historic Sites Nearby", value: "Malakand Fort, Buddhist archaeological sites in Lower Dir, and the Timergara historical cemetery."},
      {label:"Development Over Time", value: "Originally an agricultural settlement, it has grown into a small town with schools, markets, and modern facilities, while still retaining its cultural heritage."}
    ]
  },
];

const HistoricalBackground = () => {
  const navigation = useNavigation();

  const handleAddPress = (serviceTitle) => {
    switch (serviceTitle) {
      case 'Local Festival':
        navigation.navigate('LocalFestival');
        break;
        default:
        console.warn('No screen defined for this service');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Historical Background</Text>

        <View style={{ marginBottom: 60 }}>
          {Historical_Background.map((item, index) => (
            <View key={index} style={styles.cardWrapper}>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {item.details.map((detail, i) => (
                  <Text key={i} style={styles.cardText}>
                    <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                  </Text>
                ))}
                <TouchableOpacity 
                style={styles.addButton}
                onPress={() => handleAddPress(item.title)}
              >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView >
  );
};



export default HistoricalBackground;
