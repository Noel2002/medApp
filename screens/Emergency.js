import React, {useState} from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { styles } from './styles/emergency';


const Emergency = () => {
  const [signalOn, setSignalOn] = useState(false);
  const handlePress = () =>{
      setSignalOn(true);
      console.log('sending emergency signal ...');
  }

  const handleCancel = ()=>{
      setSignalOn(false);
      console.log('emergency signal stopped ...');
  }

  return (
    <View style = {styles.container}>
        <TouchableOpacity style={styles.panicButton} onPress ={handlePress}>
            <Text style ={styles.buttonCaption}>
                help
            </Text>
        </TouchableOpacity>
        <View style={styles.description}>
            <Text style={styles.title}>
                Stay calm
            </Text>
            <Text style={styles.message}>
                If in danger, simply press the button and you will notify your loved ones of where you are and that you need help
            </Text>
        </View>
        { signalOn && (<TouchableOpacity style={styles.cancelbutton} onPress ={handleCancel}>
            <Text style={styles.cancelButtonCaption}>
                turn off emergency signal
            </Text>
        </TouchableOpacity>)}
    </View>
  )
}

export default Emergency;