import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles/pillManager';
import { Fontisto } from '@expo/vector-icons';
import { colors } from '../macros/colors';
import { pills } from '../macros/data';
import PillCard from '../components/PillCard';

const PillManager = () => {
  const categorise = (data) =>{
      let categorised ={
          morning:[],
          afternoon : [],
          night: []
      }

      data.forEach(element => {
          categorised[element.partOfDay].push(element);
      });

      return {...categorised};
  }
  const categorised = categorise(pills);
  const categories = [
      "morning",
      "afternoon",
      "night"
  ];
  return (
    <View style={styles.container}>
        <View style ={styles.cartoon}>
            <Fontisto name="pills" size={60} color={colors.text.secondary} />
            <View style={styles.banner}>
                <Text style={styles.headerTitle}>
                    Daily Meds
                </Text>
                <Text style={styles.message}>
                    Patient's daily medical schedule
                </Text>
                
            </View>
        </View>
        <View>
            {
                categories.map( category => {
                    return(
                        <View>
                            <Text style={styles.sectionHeader}>
                                {category}
                            </Text>
                            {categorised[category].map( pill =>{
                                return(
                                    <PillCard pill={pill} />
                                );
                            })}
                        </View>
                    );
                })
            }
        </View>

        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonCaption}>+</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PillManager