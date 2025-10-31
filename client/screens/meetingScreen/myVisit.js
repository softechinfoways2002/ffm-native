import { View, Text ,StyleSheet, TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
 import MapView, { Marker } from 'react-native-maps';
 import { myVisitStyles } from '../../styles/meetings/myVisit';
 import { directVisitStyles } from '../../styles/meetings/directVisit';
const myVisit = ({navigation}) => {
  return (
    <View>
        <View style={myVisitStyles.container}>
          <TouchableOpacity onPress={()=>{navigation.goBack()}} style={myVisitStyles.back}> 
            <Ionicons name="chevron-back-outline" size={24} color={"white"}/>
          </TouchableOpacity>
<Text style={myVisitStyles.visit}>My Visit</Text>
        </View>
        <View style={myVisitStyles.view}>
             <MapView
              style={{ height:250,width:420 }} 
         initialRegion={{
           latitude: 28.6139,   
           longitude:77.2090, 
           latitudeDelta: 5.0922,
          longitudeDelta: 5.0421,
         }}>
         <Marker
           coordinate={{ latitude: 28.6139,longitude: 77.2090 }}
           title="Location"
          description="This is the Location"
         />
      </MapView>
        </View>
    <Text style={myVisitStyles.heading}>Current Location</Text>
    <View style={myVisitStyles.location}>
  <Ionicons size={24} name="location" color={"red"} style={myVisitStyles.image}/>
  <Text style={myVisitStyles.locationText}>34, Mayur Education, sector 4, Faridabad</Text>
</View>
  <View>
    <View style={directVisitStyles.starView}>
    <Text style={myVisitStyles.heading}>Mode of Travel</Text>
    <Text style={directVisitStyles.starText}>*</Text>
    </View>
    <TextInput placeholder='Select Travel' style={myVisitStyles.text}></TextInput>
  </View>
   <View>
    <View style={directVisitStyles.starView}>
    <Text style={myVisitStyles.heading}>Notes</Text>
       <Text style={directVisitStyles.starText}>*</Text>
       </View>
    <TextInput style={[myVisitStyles.text,{height:80}]}placeholder='Notes'></TextInput>
  </View>
  <View>
    <Text style={myVisitStyles.heading}>Attachement Bill</Text>
    <TextInput  style={myVisitStyles.text}placeholder='Attachement'></TextInput>
  </View>
  <TouchableOpacity style={myVisitStyles.button}>
    <Text style={myVisitStyles.submit}>SUBMIT</Text>
  </TouchableOpacity>
    </View>
  )
}

export default myVisit
