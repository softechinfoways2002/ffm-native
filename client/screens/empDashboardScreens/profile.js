import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/color";
import profile from "../../styles/employee_dashboard/profile";

const ProfileScreen = (props) => {
  const [user, setUser] = useState({
    name: "Alice Johnson",
    email: "alice@example.com",
    department: "IT Department",
    designation: "React-Native Developer",
    managerId: "MNG-1024",
    attendance: "98%",
    joinedAt: "15 Oct 2025",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuIIb1WRg_1VOJHd1Su5AqUBrLmTKHFvWMbH14-nLGf_-7B85OznYY_thVfEG2Bgp7kUo&usqp=CAU",
  });

  const styles = profile;

  return (
    <ScrollView style={[styles.container, { backgroundColor: Colors.background }]}>
      
      <View style={[styles.header, { backgroundColor: Colors.primary }]}>
        <Image source={{ uri: user.image }} style={styles.profileImage} />
        <TouchableOpacity style={styles.editIcon}>
          <Ionicons name="create-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>

     
      <View style={[styles.card, { backgroundColor: Colors.background,borderColor:Colors.border,borderLeftWidth:4,borderBottomWidth:4 }]}>
        <Text style={[styles.name, { color: Colors.textDark }]}>{user.name}</Text>
        <Text style={[styles.email, { color: Colors.textLight }]}>{user.email}</Text>
      </View>

      
      <View style={[styles.section, { backgroundColor: Colors.background,borderColor:Colors.border,borderLeftWidth:4 ,borderBottomWidth:4}]}>
        <Text style={[styles.sectionTitle, { color: Colors.textDark }]}>
          Employee Details
        </Text>

        <View style={styles.infoRow}>
          <Ionicons name="briefcase-outline" size={20} color={'skyblue'} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>
            {user.designation}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="business-outline" size={20} color={'skyblue'} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>
            {user.department}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="person-circle-outline" size={20} color={'skyblue'} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>
            Manager ID: {user.managerId}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={20} color={'skyblue'} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>
            Joined: {user.joinedAt}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="checkmark-done-outline" size={20} color={Colors.success} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>
            Attendance: {user.attendance}
          </Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: Colors.background,borderColor:Colors.border,borderLeftWidth:4,borderBottomWidth:4}]}>
        <Text style={[styles.sectionTitle, { color: Colors.textDark }]}>Contact Info</Text>
        <View style={styles.infoRow}>
          <Ionicons name="call-outline" size={20} color={'skyblue'} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>
            +91 98765 43210
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={20} color={Colors.error} />
          <Text style={[styles.infoText, { color: Colors.textDark }]}>Sirsa, Haryana</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.logoutButton, { backgroundColor: Colors.error }]}
      onPress={()=>{ Alert.alert(
      "Logout",
      "Are you sure you want to Logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancelled"),
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: () =>{props.navigation.navigate("login")},
          style: "destructive",
        },
      ],
      { cancelable: true }
    );}}>
        <Ionicons name="log-out-outline" size={20} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProfileScreen;
