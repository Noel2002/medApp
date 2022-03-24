import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { cards } from '../macros/data';
import FeatureCard from './FeatureCard';
import { styles } from './styles/menu';


function Menu({navigation}) {
  let key = 0;
  return (
    <ScrollView  style={styles.container}>
        <Text style={styles.sectionTitle}>
            Quick access
        </Text>
        <View style={styles.cardsWrapper}>
            {
                cards.map( card =>{
                    return(
                        <FeatureCard cardInfo={card} key = {key++} navigation={navigation} />
                    );
                })
            }

        </View>
    </ScrollView>
  )
}

export default Menu