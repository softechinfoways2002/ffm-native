import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import color from '../../constants/color'
import { TextInput } from "react-native"
const MeetingDetails = ({navigation}) => {
  return (
    <View>
       <View style={meetingDetailsStyles.container}>
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
  )
}

export default MeetingDetails;

const meetingDetailsStyles=StyleSheet.create(
    {
container:
{
    backgroundColor: color.primary,
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    flexDirection:"row",
   justifyContent:"center"
},
text:
{
    fontSize:20,
color:"white",
fontWeight:500
},
back:
{
    position:"absolute",
    left:20
},
subContainer:
{
    width:'90%',
    marginTop:20,
    backgroundColor:"#B8C6D5",
    alignSelf:"center",
    borderRadius:10
},
view: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 10,
  marginHorizontal: 20,
},

label: {
  width: 140,          
  fontSize: 16,
  fontWeight: "500",
  color: "#333",
},
input: {
  flex: 1,         
  fontSize: 16,
  fontWeight: "600",
  color: "#000",
},

textInput: {
  flex: 1,
  fontSize: 16,
  borderRadius: 8,
  borderColor: "gray",
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 5,
  height: 40,
  color: "#000",
  backgroundColor: "white",
},


    }
)