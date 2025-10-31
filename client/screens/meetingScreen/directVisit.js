import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { directVisitStyles } from '../../styles/meetings/directVisit';
import color from '../../constants/color';
import { styles } from '../../styles/meetings/meetings';
const directVisit = ({navigation}) => {
  return (
   <View style={styles.main}>
    <View style={[styles.gradientContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Ionicons name="chevron-back-outline" size={24} color={"white"}/>
        </TouchableOpacity>
        <Text style={[styles.containerText, { marginLeft: 100}]}>Direct Visit</Text>
      </View>
    </View>
    <View style={styles.whiteContainer}>
    <View style={directVisitStyles.starView}>
 <Text style={directVisitStyles.heading}>Company Name</Text>
 <Text style={directVisitStyles.starText}>*</Text>
 </View>
 <View style={directVisitStyles.icon}>
    <TextInput style={[directVisitStyles.textinput,{width:280}]} placeholder='Select Company Name'/>
    <Ionicons name="add-circle" size={55} color={color.primary}/>
 </View>
 <View style={directVisitStyles.starView}> 
 <Text style={directVisitStyles.heading}>Contact Person</Text>
 <Text style={directVisitStyles.starText}>*</Text>
 </View>
 <TextInput style={directVisitStyles.textinput} placeholder='Select Contact Person' />
 <View style={directVisitStyles.starView}>
 <Text style={directVisitStyles.heading}>Mobile</Text>
  <Text style={directVisitStyles.starText}>*</Text>
 </View>
 <TextInput  style={directVisitStyles.textinput} placeholder='Enter Mobile'/>
 <View style={directVisitStyles.location}>
   <View style={directVisitStyles.starView}>
 <Text style={directVisitStyles.heading}>Location</Text>
 <Text style={directVisitStyles.starText}>*</Text>
 </View>
<Ionicons name="location" size={28} color={"red"} style={directVisitStyles.image} />
 </View>
  <TextInput  style={[directVisitStyles.textinput,{height:80}]} placeholder='Enter Location'/>
  <View style={directVisitStyles.starView}>
 <Text style={directVisitStyles.heading}>Visit Purpose</Text>
  <Text style={directVisitStyles.starText}>*</Text>
  </View>
 <TextInput  style={directVisitStyles.textinput} placeholder='Select Purpose'/>
 <View style={directVisitStyles.starView}>
 <Text style={directVisitStyles.heading}>Mode of Travel</Text>
   <Text style={directVisitStyles.starText}>*</Text>
 </View>
 <TextInput  style={directVisitStyles.textinput} placeholder='Select mode of travel'/>
 <TouchableOpacity style={directVisitStyles.button}>
    <Text style={directVisitStyles.buttonText}>START MEETING</Text>
 </TouchableOpacity>
    </View>
    </View>
  )
}
export default directVisit


