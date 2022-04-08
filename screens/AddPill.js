import { StyleSheet, Text, View,ScrollView, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { styles } from './styles/addPill';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PillCard from '../components/PillCard';
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase';

const AddPill = () =>{
  
    let cardKey = 0;
    const getCurrentTime = ()=>{
      const date= new Date(Date.now());
      return(
        {
          hours: date.getHours(),
          minutes: date.getMinutes()
        }
      )
      
    };

    const testData = {
      name: 'paracet',
      time: getCurrentTime(),
      description: 'drink with wine',
      amount: 2,
    };

    const [readyData, setReadyData] = useState([]);

    const initialFormState = {
      name: '',
      time: getCurrentTime(),
      description: '',
      amount: 1,
    }
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [formdata, setFormdata] = useState(initialFormState);
   
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      const localDate = new Date(date);
      const time = {
        hours: localDate.getHours(),
        minutes: localDate.getMinutes(),
      }
      setFormdata(prev => ({
        ...prev, 
        time
      }));
      // console.log(formdata)
      // console.log("A date has been picked: ", localDate.getHours(), ":", localDate.getMinutes());
      hideDatePicker();
    };
    const handleCommit = ()=>{
      const data = {...formdata};
      setReadyData( prev => ([ ...prev, data]));
    }

    const handleSubmit= async ()=>{
      readyData.forEach(async (reminder )=> {
        const docRef = await addDoc(collection(db, "reminders"), reminder);
        // console.log("Documented added successfully: ", docRef.id);
      });
      setReadyData([]);
      alert("Data added successfully!");

    }

  ////////////////////////////////

  const handleChange = ( value, key ) =>{
    const newState = formdata;
    newState[key] = value
    setFormdata(newState);
  }
  return (
    <ScrollView>
      <View style = {styles.container}>
        <Text style={styles.formTitle}>Add Pill Reminder</Text>
        <View style={styles.formContainer}>
          {/* { formdata.name ? <Text style={styles.label}>Medecine name</Text>: <></>} */}
          <TextInput 
            style={styles.input}
            name = "name"
            onChangeText = { value => handleChange(value, "name")}
            placeholder = "Medicine name"
          />
          <TextInput 
            style={styles.input}
            name = "amount"
            onChangeText = { value => handleChange(value, "amount")}
            placeholder = "Amount"
            keyboardType='numeric'
          />
          <TextInput 
            style={styles.input}
            name = "decription"
            onChangeText = { value => handleChange(value, "description")}
            placeholder = "Description(Optional)"
            multiline={true}
            numberOfLines={4}
          />

          <View>
            <View style = {styles.timeInputWrapper}>
              <View style={styles.timeInput}>
              <Text style={styles.timeCaption}>{formdata.time.hours}</Text>
              </View> 
              <Text>{" : "}</Text>
              <View style={styles.timeInput}>
                <Text style={styles.timeCaption}>{formdata.time.minutes}</Text>
              </View>
            </View>
            <Button title="Select time" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="time"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>

          <TouchableOpacity style={styles.commitBtn} onPress={handleCommit}>
            <Text style={styles.commitBtnCAption}>Commit</Text>
          </TouchableOpacity>


        </View>
      
        <View style={styles.readyWrapper}>
          <View style={styles.readyContainer}>
            <Text style={styles.readyTitle}>Reminders ready to be added</Text>
              {!(readyData.length)? <Text> No reminder added</Text>: readyData.map(pill => {
                return (
                  <PillCard pill={pill} key={cardKey++}/>
                )
              })}

          
          </View>

          {!(readyData.length) ? <></> : (<TouchableOpacity style={styles.addAllBtn} onPress={handleSubmit}>
            <Text style={styles.addAllBtnCaption}>Add all</Text>
          </TouchableOpacity>)}
          </View>
      </View>
    </ScrollView>
  )
}

export default AddPill;

