import React from "react";
import { View, Text, FlatList, Pressable, Button, Image, TouchableOpacity, TextInput } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from "../../constants/color.js";
import { Dashboard_styles } from "../../styles/employee_dashboard/emp_dashboard.js";
import Feather from 'react-native-vector-icons/Feather';
import { RaiseReimbursement_styles } from "../../styles/employee_dashboard/raisereimbursement.js";


const RaiseReimbursement = (props) => {
  const styles = Dashboard_styles;
  const styles2=RaiseReimbursement_styles;
  return (
<View style={styles.mainContainer}>
<View style={styles.gradientContainer}>
  <View style={styles.gradientContainer2}></View>
</View>
<View style={styles2.mainContainer}>
  <Text>Company Name*</Text>
  <TextInput />
</View>
</View>
     );
};
export default RaiseReimbursement;
