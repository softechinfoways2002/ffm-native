import React from "react";
import { View, Text, FlatList, Pressable, Button, Image, TouchableOpacity, processColor } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { Dashboard_styles } from "../../styles/employee_dashboard/emp_dashboard.js";
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from "react-native-maps";
import Colors from "../../constants/color.js";
const DashboardHome = (props) => {
  const styles = Dashboard_styles;
  const origin = {
  latitude: 28.6139,  // Example: Delhi
  longitude: 77.2090,
};

  return (
<View style={styles.mainContainer}>
<View style={styles.gradientContainer}>
  <View><Text style={[styles.userDetailsText,{fontSize:22,color:Colors.textLight}]}>Welcome User</Text></View>
</View>
<View style={styles.map} >
  <MapView
  style={{ width: '99%', height:'99%', borderRadius:10 }} 
  initialRegion={{
    latitude: 24.0,
    longitude: 75.0,
    latitudeDelta: 10,
    longitudeDelta:10,
  }}
>
        <Marker style={{width:10,width:10}}  coordinate={origin} title="Delhi"></Marker>
      
        {/* <Marker style={{width:10,width:10}} coordinate={destination} title="Mumbai"></Marker> */}
     
        {/* <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={5}
          strokeColor="blue"
        /> */}
      </MapView>
</View>
<View style={styles.userDetails}>
  <View>
  <Text style={styles.userDetailsText}>Hello, Sahil Kumar!</Text>
  <Text style={[styles.userDetailsText,{fontWeight:'500',fontSize:13,marginTop:1}]}> You are Off duty </Text>
  <Text style={styles.userDetailsText}>Current Location</Text>
  <View style={{flexDirection:'row'}}>
  <Entypo name="location-pin" color="#d42c2cff" size={26} style={{marginTop:4}} />
  <Text  style={[styles.userDetailsText,{fontWeight:'300',fontSize:13,marginTop:6,marginLeft:1}]}>#12,Street 1,Abc Colony, Sirsa (Hry)</Text>
  </View>
  </View>
  <View><Image style={styles.image} source={{uri:'https://thumbs.dreamstime.com/b/illustration-featuring-businessman-briefcase-approaching-door-symbolizing-opportunity-modern-flat-vector-style-light-392833181.jpg'}}/></View>
</View>
<View style={styles.checkinDetails}>
  <Feather style={styles.checkinDetailsIcon} name="log-in" color="#525bd8ff" size={30} />
  <Text style={styles.userDetailsText}>11:32am </Text>
  <Feather style={styles.checkinDetailsIcon} name="log-out" color="#bd3c3cff" size={30} />
  <Text style={styles.userDetailsText}>04:32pm</Text>
   <Feather  style={styles.checkinDetailsIcon} name="clock" color="#3dd162ff" size={24} />
   <Text style={styles.userDetailsText}>5h 0m </Text>
</View>
<View style={styles.checkinbtn}>
  <TouchableOpacity><Text style={styles.btnText}>Check-in</Text></TouchableOpacity>
</View>
<Text style={[styles.userDetailsText,{marginTop:20}]}>Quick Actions</Text>
<View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>
  <View style={styles.cards}><Entypo name="chat" color={'dodgerblue'} size={24} /><TouchableOpacity><Text style={styles.cardText}>Routes</Text></TouchableOpacity></View>
  <View style={styles.cards}><MaterialCommunityIcons name="map-marker-path" color={'dodgerblue'} size={24} /><TouchableOpacity><Text style={styles.cardText}>Routes</Text></TouchableOpacity></View>
  <View style={styles.cards}><Foundation name="map" color={'dodgerblue'} size={24} /><TouchableOpacity><Text style={styles.cardText}>My Visits</Text></TouchableOpacity></View>
  <View style={styles.cards}> <MaterialCommunityIcons name="map-marker-multiple-outline" color={'dodgerblue'} size={24} /><TouchableOpacity><Text style={styles.cardText}>Direct</Text></TouchableOpacity></View>

</View>

</View>
     );
};
export default DashboardHome;
