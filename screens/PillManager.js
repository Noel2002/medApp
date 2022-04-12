import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, LogBox, ScrollView} from 'react-native';
import { getDocs, collection, query, where} from 'firebase/firestore';
import { styles } from './styles/pillManager';
import { Fontisto } from '@expo/vector-icons';
import { colors } from '../macros/colors';
import { pills } from '../macros/data';
import PillCard from '../components/PillCard';
import { auth, db } from '../firebase';

const PillManager = () => {
  //Stoping firebase timer warnings
  LogBox.ignoreLogs(['Setting a timer']);

  const [reminders, setReminders] = useState([]);
  let catKey =0;
  let pillKey = 0;
  useEffect( async ()=>{
    const userEmail = auth.currentUser.email;
    const q = query(collection(db, "reminders"), where("userEmail", "==", userEmail))
    const data = await getDocs(q);
    data.forEach(doc => {
        setReminders( prev => ([...prev, {...doc.data()}]))
    });
  },[]);


  const categorise = (reminders) =>{
      let categorised ={
          morning:[],
          afternoon : [],
          night: []
      }

      reminders.forEach(reminder => {
          if( reminder.time.hours >19){
            categorised["night"].push({...reminder})
          }
          else if( reminder.time.hours> 12){
            categorised["afternoon"].push({...reminder})
          }
          else{
            categorised["morning"].push({...reminder})
          }
      });

      return {...categorised};
  }
  const categorised = categorise(reminders);
  const categories = [
      "morning",
      "afternoon",
      "night"
  ];
  return (
    <ScrollView style={styles.container}>
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
                        <View key={catKey++}>
                            <Text style={styles.sectionHeader}>
                                {category}
                            </Text>
                            {!(categorised[category].length) ? <Text>No pills</Text> : categorised[category].map( pill =>{
                                return(
                                    <PillCard pill={pill} key={pillKey++} />
                                );
                            })}
                        </View>
                    );
                })
            }
        </View>

        {/* <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonCaption}>+</Text>
        </TouchableOpacity> */}
    </ScrollView>
  )
}

export default PillManager