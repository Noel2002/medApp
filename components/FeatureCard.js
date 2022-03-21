import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from './styles/featureCard';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../macros/colors';


function FeatureCard(props) {
  const {cardInfo, navigation} = props;
  const {cardCaption, Icon, iconName, screen} = cardInfo;

  const pressHandler = ()=>{
    navigation.navigate(screen);
  }
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.innerContainer} onPress={pressHandler}>
            <Icon name={iconName} size={30} color={colors.text.secondary} />
            <Text style={styles.caption}>
                {cardCaption}
            </Text>
        </TouchableOpacity>

    </View>
  )
}

export default FeatureCard