import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScheduledMeetingStyles } from '../../styles/meetings/ScheduledMeeting';
import color from '../../constants/color';
import { directVisitStyles } from '../../styles/meetings/directVisit';
const ScheduledMeeting = ({navigation}) => {
  return (
    <View>
    <View style={ScheduledMeetingStyles.container}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={ScheduledMeetingStyles.back}>
        <Ionicons name="chevron-back-outline" size={24} color={"white"}/>
        </TouchableOpacity>
      <Text style={ScheduledMeetingStyles.text}> Add Scheduled Meeting</Text>
    </View>
    <View style={directVisitStyles.starView}>
 <Text style={ScheduledMeetingStyles.heading}>Company Name</Text>
 <Text style={directVisitStyles.starText}>*</Text>
 </View>
 <View style={ScheduledMeetingStyles.icon}>
    <TextInput style={[ScheduledMeetingStyles.textinput,{width:280}]} placeholder='Select Company Name'/>
    <Ionicons name="add-circle" size={55} color={color.primary}/>
 </View>
 <View style={directVisitStyles.starView}>
 <Text style={ScheduledMeetingStyles.heading}>Contact Person</Text>
  <Text style={directVisitStyles.starText}>*</Text>
  </View>
 <TextInput style={ScheduledMeetingStyles.textinput} placeholder='Select Contact Person' />
 <View style={directVisitStyles.starView}>
 <Text style={ScheduledMeetingStyles.heading}>Mobile</Text>
  <Text style={directVisitStyles.starText}>*</Text>
  </View>
 <TextInput  style={ScheduledMeetingStyles.textinput} placeholder='Enter Mobile'/>
 <View style={ScheduledMeetingStyles.location}>
  <View style={directVisitStyles.starView}>
 <Text style={ScheduledMeetingStyles.heading}>Location</Text>
  <Text style={directVisitStyles.starText}>*</Text>
 </View>
<Ionicons name="location" size={28} color={"red"} style={ScheduledMeetingStyles.image} />
 </View>
  <TextInput  style={[ScheduledMeetingStyles.textinput,{height:80}]} placeholder='Enter Location'/>
  <View style={directVisitStyles.starView}>
 <Text style={ScheduledMeetingStyles.heading}>Meeting Purpose</Text>
  <Text style={directVisitStyles.starText}>*</Text>
 </View>
 <TextInput  style={ScheduledMeetingStyles.textinput} placeholder='Select Meeting Purpose'/>
<View style={ScheduledMeetingStyles.date}>
    <View>
      <View style={directVisitStyles.starView}>
        <Text style={ScheduledMeetingStyles.heading}>Meeting Date</Text>
         <Text style={directVisitStyles.starText}>*</Text>
        </View>
        <TextInput style={[ScheduledMeetingStyles.textinput,{width:200}]} placeholder='dd/mm/yyyy'/>
    </View>
      <View>
        <View style={directVisitStyles.starView}>
        <Text style={[ScheduledMeetingStyles.heading,{marginVertical:0}]}>Time</Text>
         <Text style={directVisitStyles.starText}>*</Text>
        </View>
        <TextInput style={[ScheduledMeetingStyles.textinput,{width:110}]}placeholder='hh:mm'/>
    </View>
</View>
<View style={ScheduledMeetingStyles.whatsapp}>
    <Ionicons name="logo-whatsapp" size={20} color={color.success}/>
    <Text style={ScheduledMeetingStyles.notification}>Notifications will be sent to the contact person</Text>
</View>
 <TouchableOpacity style={ScheduledMeetingStyles.button}>
    <Text style={ScheduledMeetingStyles.buttonText}>SUBMIT</Text>
 </TouchableOpacity>
    </View>
  )
}

export default ScheduledMeeting
