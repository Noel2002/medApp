import React from 'react';
import {View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { styles } from './styles/pillCard';
import { colors } from '../macros/colors';

const Icons = {
    "tablets":{
        icon: FontAwesome5,
        name: "pills"
    },
    "drops" : {
        icon : Entypo,
        name: 'drop'
    }
}


const PillCard = (props) => {
  const {pill} = props;
  const Icon = {
      component: Icons[pill.type].icon,
      name : Icons[pill.type].name,
  }
  const iconSize = 30;

  return (
    <View style={styles.container}>
        <View>
            <Icon.component 
                name = {Icon.name} 
                size = {iconSize} 
                color={colors.text.secondary} 
            />
        </View>
        <View style={styles.textPart}>
            <Text style={styles.pillName}>{pill.name}</Text>
            <Text style={styles.time}>{pill.time}</Text>

        </View>
    </View>
  )
}

export default PillCard