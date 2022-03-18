import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { cards } from '../macros/data';
import FeatureCard from './FeatureCard';
import { styles } from './styles/menu';


function Menu() {
  return (
    <ScrollView  style={styles.container}>
        <Text style={styles.sectionTitle}>
            Quick access
        </Text>
        <View style={styles.cardsWrapper}>
            {
                cards.map( card =>{
                    return(
                        <FeatureCard cardInfo={card} />
                    );
                })
            }

        </View>
    </ScrollView>
  )
}

export default Menu