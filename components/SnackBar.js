import React from 'react';
import {View, Text} from 'react-native';
import { styles } from './styles/snackbar';
import { AntDesign } from '@expo/vector-icons';


const SnackBar = () => {
    const date = new Date();

  return (
    <View style={styles.container}>
        <AntDesign name="warning" size={24} color="black" />
        <View style={styles.textPart}>
            <View style={styles.topText}>
                <Text style={styles.title}>Overdose!</Text>
                <Text style={styles.date}>{date.toDateString()}</Text>
            </View>
            
            <Text>
                You have taken more pills than expected. 
                Please contact your doctor 
            </Text>
        </View>
    </View>
  )
}

export default SnackBar