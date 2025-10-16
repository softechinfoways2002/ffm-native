import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dashboard_styles } from "../../styles/employee_dashboard/emp_dashboard";
import { ClaimDetails_styles } from "../../styles/employee_dashboard/claimDetails";

const ClaimDetails = (props) => {
  const { claim } = props.route.params; 
  const styles = Dashboard_styles;
  const styles2=ClaimDetails_styles;
  return (
<View style={styles.mainContainer}>
<View style={styles.gradientContainer}>
  <View style={styles.gradientContainer2}></View>
</View>
<View style={styles2.mainContainer}>
  <View style={styles2.card}>
        <Text style={styles2.label}>Meeting Name:</Text>
        <Text style={styles2.value}>{claim.meetingname}</Text>

        <Text style={styles2.label}>Request on:</Text>
        <Text style={styles2.value}>{claim.date}</Text>
         
        <Text style={styles2.label}>Start on:</Text>
        <Text style={styles2.value}>{claim.date}</Text>

        <Text style={styles2.label}>End on:</Text>
        <Text style={styles2.value}>{claim.date}</Text>

        <Text style={styles2.label}>Amount:</Text>
        <Text style={styles2.value}>₹{claim.amount}</Text>

        <Text style={styles2.label}>Status:</Text>
        <Text
          style={[
            styles2.status,
            claim.reimbursementStatus === "Approved"
              ? { backgroundColor: "limegreen" }
              : claim.reimbursementStatus === "Pending"
              ? { backgroundColor: "goldenrod" }
              : { backgroundColor: "firebrick" },
          ]}
        >
          {claim.reimbursementStatus}
        </Text>
      </View>
</View>
</View>
  )
};
export default ClaimDetails;

