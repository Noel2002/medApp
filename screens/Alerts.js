import React from 'react';
import {View, Text} from 'react-native';
import SnackBar from '../components/SnackBar';
import { styles } from './styles/alerts';

const Alerts = () => {
  return (
    <View style={styles.container}>
        <SnackBar />
    </View>
  )
}

export default Alerts