import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Menu />
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
