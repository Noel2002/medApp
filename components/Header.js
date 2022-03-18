import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles/header';

function Header() {
  return (
    <View style={styles.container}>
        <Image
            style={styles.bgImage}
            source={require("../assets/headerBgIcon.png")}
        
        />
    </View>
  )
}

export default Header