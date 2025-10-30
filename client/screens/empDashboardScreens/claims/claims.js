import React, { useState } from "react";
import { View, Text, Modal, FlatList, Pressable, Button, Image, TouchableOpacity, ScrollView } from "react-native";
import { Dashboard_styles } from "../../../styles/employee_dashboard/emp_dashboard.js";
import { Reimbursement_styles } from "../../../styles/employee_dashboard/reimbursement.js";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../constants/color.js';
import { modals_styles } from "../../../styles/modals.js";
const Reimbursement = (props) => {
  const styles = Dashboard_styles;
  const styles2 = Reimbursement_styles;
  const styles3=modals_styles;
  const [visible, setVisible] = useState(false);
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
          <Text style={[styles2.meetingname, { fontSize: 18 }]}>Total Reimbursement</Text>
          <Text style={[styles2.meetingname, { fontSize: 16 }]}>₹1000</Text>
        </View>
        <Text style={[styles2.meetingname, { fontSize: 16, marginLeft: 15,color:Colors.success}]}>Claim Requests</Text>
        <View style={{ flex: 1 }}>
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 100 }}
  />
</View>
      </View>
      <View style={styles2.addview}>
        <TouchableOpacity onPress={() => setVisible(true)} style={styles2.addbtn}><MaterialIcons name="add" color="#FFF" size={30} style={{ fontWeight: 'bold', justifyContent: 'center', alignItems: 'center' }} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles3.modalBackground}>
          <View style={styles3.modalBox}>
            <Text style={styles3.modalTitle}>Select Claim Type</Text>

            <TouchableOpacity
              style={[styles3.modalBtn, { backgroundColor: Colors.primary }]}
              onPress={() => {
                setVisible(false);
                props.navigation.navigate("LocalClaims");
              }}
            >
              <Text style={styles3.modalBtnText}>Local Claim</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles3.modalBtn, { backgroundColor: Colors.primary }]}
              onPress={() => {
                setVisible(false);
                props.navigation.navigate("OutOfStationClaims");
              }}
            >
              <Text style={styles3.modalBtnText}>Out of Station Claim</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles3.modalBtn, { backgroundColor: Colors.background }]}
              onPress={() => setVisible(false)}
            >
              <Text style={[styles3.  modalBtnText, { color: Colors.textDark }]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>

  );
};
export default Reimbursement;
//onPress={() => { props.navigation.navigate("RaiseReimbursement") }}