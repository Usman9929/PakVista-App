import React from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import styles from './Explore_City_Style';


const Population_Detail = [
    {
        title: 'Population Children',
        details: [
            {label:"Total", value:"25000",},
            {label: 'Age Range', value: '0-14' },
            {label: 'Percentage_of_total_population', value: "35%"},
        ]
    },
    {
      title: 'Population Adult',
      details: [
          {label:"Total", value:"40000",},
          {label: 'Age Range', value: '15-64' },
          {label: 'Percentage_of_total_population', value: "55%"},
      ]
  },
  {
    title: 'Population Elderly',
    details: [
        {label:"Total", value:"10000",},
        {label: 'Age Range', value: '65+' },
        {label: 'Percentage_of_total_population', value: "10%"},
    ]
},
{
  title: 'Gender Ratio',
  details: [
      {label:"Male", value:"39000",},
      {label: 'Female', value: '36000' },
      {label: 'Male to Female Ratio', value: "1.08:1"},
  ]
},
{
  title: 'Population Literacy Rate',
  details: [
      {label:"Overall Literacy Rate", value:"78%",},
      {label: 'Male Literacy Rate', value: '65%' },
      {label: 'Female Literacy Rate', value: "70%"},
  ]
},

];

const PopulationDetail = () => {
    
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

                {/* Emergency Contacts Section */}
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Population Detail</Text>
                    
                    <View style = {{marginBottom:60}}>
                    {Population_Detail.map((item, index) => (
                        <View key={index} style={styles.cardWrapper}>
                            <View style={styles.card}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                                {item.details.map((detail, i) => (
                                    <Text key={i} style={styles.cardText}>
                                        <Text style={styles.bold}>{detail.label}:</Text> {detail.value}
                                    </Text>
                                ))}
                                <TouchableOpacity style={styles.addButton}>
                                    <Text style={styles.addButtonText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};



export default PopulationDetail;
