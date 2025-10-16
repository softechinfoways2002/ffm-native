import React from "react";
import { View, Text, FlatList, Pressable, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import { Dashboard_styles } from "../../styles/employee_dashboard/emp_dashboard.js";
import { Reimbursement_styles } from "../../styles/employee_dashboard/reimbursement.js";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/color';

const Reimbursement = (props) => {
  const styles = Dashboard_styles;
  const styles2 = Reimbursement_styles;
  const data = [
    { id: 1, date: "09-09-2025", reimbursementStatus: "Approved", amount: '500', meetingname: 'Meeting Name' },
    { id: 2, date: "10-09-2025", reimbursementStatus: "Pending", amount: '200', meetingname: 'Meeting Name' },
    { id: 3, date: "11-09-2025", reimbursementStatus: "Rejected", amount: '1000', meetingname: 'Meeting Name' },
    { id: 4, date: "16-09-2025", reimbursementStatus: "Approved", amount: '1000', meetingname: 'Meeting Name' },
     { id: 5, date: "16-09-2025", reimbursementStatus: "Pending", amount: '1000', meetingname: 'Meeting Name' },
  ];
  const renderItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("ClaimDetails", { claim: item })}
      style={[
        styles2.cards,
        item.reimbursementStatus === 'Approved'
          ? { borderLeftColor: 'limegreen' }
          : item.reimbursementStatus === 'Pending'
            ? { borderLeftColor: 'goldenrod' }
            : { borderLeftColor: 'firebrick' },
      ]}
    >
      <View>
        <Text style={styles2.meetingname}>{item.meetingname}</Text>
        <Text style={[styles2.cardText, { fontStyle: 'italic' }]}>{item.date}</Text>
        <Text style={styles2.cardText}>₹{item.amount}</Text>
      </View>
      <View>
        <View
          style={[
            styles2.statusbtn,
            item.reimbursementStatus === 'Approved'
              ? { backgroundColor: 'limegreen' }
              : item.reimbursementStatus === 'Pending'
                ? { backgroundColor: 'goldenrod' }
                : { backgroundColor: 'firebrick' },
          ]}
        >
          <Text
            style={[
              styles2.cardText,
              { color: Colors.textLight, padding: 5, marginTop: 2 },
            ]}
          >
            {item.reimbursementStatus}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.gradientContainer, { justifyContent: 'space-between', flexDirection: 'row' }]}>
        <Text style={[styles2.containerText, { marginLeft: 8 }]}>Claims</Text>
        <Text style={[styles2.containerText, { marginRight: 8, fontSize: 18, fontWeight: 'medium' }]}><MaterialIcons name="calendar-month" color="#ffffffff" size={20} />Oct,2025</Text>
      </View>
      <View style={styles2.mainContainer1}>
        <View style={styles2.totalCard}>
          <Text style={[styles2.meetingname, { fontSize: 16 }]}>Total Reimbursement</Text>
          <Text style={[styles2.meetingname, { fontSize: 16 }]}>₹1000</Text>
        </View>
        <Text style={[styles2.meetingname, { fontSize: 16, marginLeft: 15 }]}>Claim Requests</Text>
         <ScrollView >
        <View>
          <FlatList
            data={data}
            renderItem={renderItem} />
        </View>
        </ScrollView>
        </View>
        <View style={styles2.addview}><TouchableOpacity onPress={() => { props.navigation.navigate("RaiseReimbursement") }} style={styles2.addbtn}><MaterialIcons name="add" color="#FFF" size={30} style={{ fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }} /></TouchableOpacity></View>
    </View>

  );
};
export default Reimbursement;
