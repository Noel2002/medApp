import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';
import AppStack from './routes/AppStack';
import Homestack from './routes/Homestack';
import Home from './screens/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <AppStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal:20,
    flex: 1,
    backgroundColor: '#fff',
    
  },
  text:{
    fontSize: 24,
    fontWeight: 'bold',
  }
});
