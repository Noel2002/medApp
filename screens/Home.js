import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import Menu from '../components/Menu';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        {/* <Header /> */}
        <Menu  navigation={navigation} />
    </View>
  )
}

export default Home;