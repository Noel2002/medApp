import { StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react';
import { styles } from './styles/login';
import { auth } from '../firebase';

const Login = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(()=>{
    console.log("Checking for any looged in user...");
    if( auth.currentUser){
      navigation.navigate("Home");
    }
  },[]);
  const handleSignUp = ()=>{
    auth
    .createUserWithEmailAndPassword(email, password)
    .then( response =>{
      const user = response.user;
      console.log("signed up as: ", user.email);
    })
    .catch(error =>{
      alert(error.message);
    })
  }

  const signIn = (email, password)=>{
    
  }
  const handleSignIn = ()=>{
    if(auth.currentUser){
      auth.signOut();
    }
    auth
    .signInWithEmailAndPassword(email, password)
    .then(response =>{
      const user = response.user;
      console.log("Logged in as: ", user.email);
      navigation.navigate("Home")
    })
    .catch(error =>{
      const errorMessage = error.message;
      const errorCode = error.code;
      if( errorCode === "auth/wrong-password" ){
        console.log("Wrong password");
      }
      else{
        console.log(errorMessage);
      }
    });
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Authentication</Text>
      <View style={styles.formWrapper}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput 
          style={styles.input}
          onChangeText= { text=> setEmail(text)}
          value={email}
        />

        <Text style={styles.formLabel}>Password</Text>
        <TextInput 
          style={styles.input}
          onChangeText= { text=> setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <View style={styles.buttonsSection}>
          <TouchableOpacity onPress= {handleSignIn} style={[styles.button, styles.signIn]}>
            <Text style={[styles.buttonCaption, styles.signInCaption]}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress = {handleSignUp} style={[styles.button, styles.signUp]}>
            <Text style={[styles.buttonCaption, styles.signUpCaption]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  )
}

export default Login

