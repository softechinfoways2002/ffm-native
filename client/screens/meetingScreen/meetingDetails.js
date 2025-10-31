import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { meetingDetailsStyles } from '../../styles/meetings/meetingDetails'
import { TextInput } from 'react-native'
import { styles } from '../../styles/meetings/meetings'
const meetingDetails = ({navigation}) => {
  return (
    <View style={styles.main}>
        <View style={[styles.gradientContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Ionicons name="chevron-back-outline" size={24} color={"white"}/>
            </TouchableOpacity>
            <Text style={[styles.containerText, { marginLeft: 50}]}>Meeting Details</Text>
          </View>
        </View>
        <View style={styles.whiteContainer}>
    <View>
             <TouchableOpacity onPress={()=>{navigation.goBack()}} style={meetingDetailsStyles.back} >
            <Ionicons name="chevron-back-outline" size={24} color={"white"}  />
             </TouchableOpacity>
            <Text style={meetingDetailsStyles.text}>Meeting Details</Text>
          </View>
          <View style={meetingDetailsStyles.subContainer}>
          <View style={meetingDetailsStyles.view}>
            <Text style={meetingDetailsStyles.label}>Name</Text>
            <Text style={meetingDetailsStyles.input}>:  Rahul</Text>
          </View>
              <View  style={meetingDetailsStyles.view}>
            <Text style={meetingDetailsStyles.label}>Mobile Number</Text>
            <Text style={[meetingDetailsStyles.input,{color:"#5587AA"}]}>: +91 2572323841</Text>
          </View>
              <View  style={meetingDetailsStyles.view}>
            <Text style={meetingDetailsStyles.label}>Timing</Text>
            <Text style={meetingDetailsStyles.input}>: 12 Oct,2025 8:00 pm</Text>
          </View>
              <View  style={meetingDetailsStyles.view}>
            <Text style={meetingDetailsStyles.label}>Purpose</Text>
            <Text style={meetingDetailsStyles.input}>:  Complaint</Text>
          </View>
              <View  style={meetingDetailsStyles.view}>
            <Text style={meetingDetailsStyles.label}>Travel By: </Text>
            <TextInput style={meetingDetailsStyles.textInput} placeholder='Select Travel'></TextInput>
          </View>
        </View>
        </View>
             </View>
   
  )
}

export default meetingDetails;
