import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from "react-native";
import { Dashboard_styles } from "../../../styles/employee_dashboard/emp_dashboard.js";
import Colors from "../../../constants/color.js";
import { RaiseReimbursement_styles } from "../../../styles/employee_dashboard/outOfStationClaims.js";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { modals_styles } from "../../../styles/modals.js";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const OutOfStationClaims = (props) => {
  const styles = Dashboard_styles;
  const styles2 = RaiseReimbursement_styles;
  const styles3 = modals_styles;

  const [company, setCompany] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [travelBy, setTravelBy] = useState(null);
  const [purpose, setPurpose] = useState(null);
  const [claimType, setClaimType] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [modalValue, setModalValue] = useState(false);

  const data = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  const onStartChange = (event, date) => {
    setShowStartPicker(false);
    if (date) setStartDate(date);
  };

  const onEndChange = (event, date) => {
    setShowEndPicker(false);
    if (date) setEndDate(date);
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.gradientContainer,
          { justifyContent: "space-between", flexDirection: "row" },
        ]}
      >
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="arrow-back-circle" color="#ffffff" size={28} />
        </TouchableOpacity>
        <Text style={styles2.header}>Out of Station Claims</Text>
      </View>

      <View style={styles2.mainContainer}>
        <Text style={[styles2.Text, { marginTop: 25 }]}>Company's Name</Text>
        <Dropdown
          style={styles2.Input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select company name"
          placeholderStyle={{ color: "#999999b7" }}
          value={company}
          onChange={(item) => setCompany(item.value)}
        />

        <Text style={styles2.Text}>From</Text>
        <Dropdown
          style={styles2.Input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select from"
          placeholderStyle={{ color: "#999999b7" }}
          value={from}
          onChange={(item) => setFrom(item.value)}
        />

        <Text style={styles2.Text}>To</Text>
        <Dropdown
          style={styles2.Input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select to"
          placeholderStyle={{ color: "#999999b7" }}
          value={to}
          onChange={(item) => setTo(item.value)}
        />

        <Text style={styles2.Text}>Start Date</Text>
        <TouchableOpacity
          style={[styles2.Input, { padding: 5 }]}
          onPress={() => setShowStartPicker(true)}
        >
          <Text>{startDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={onStartChange}
          />
        )}

        <Text style={styles2.Text}>End Date</Text>
        <TouchableOpacity
          style={[styles2.Input, { padding: 5 }]}
          onPress={() => setShowEndPicker(true)}
        >
          <Text>{endDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={onEndChange}
          />
        )}

        <Text style={styles2.Text}>Travel By</Text>
        <Dropdown
          style={styles2.Input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select mode of travel"
          placeholderStyle={{ color: "#999999b7" }}
          value={travelBy}
          onChange={(item) => setTravelBy(item.value)}
        />

        <Text style={styles2.Text}>Purpose</Text>
        <Dropdown
          style={styles2.Input}
          data={data}
          labelField="label"
          valueField="value"
          placeholder="Select purpose"
          placeholderStyle={{ color: "#999999b7" }}
          value={purpose}
          onChange={(item) => setPurpose(item.value)}
        />

        <Text style={styles2.Text}>Claim Type</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: -30,
            height: "15%",
          }}
        >
          <Dropdown
            style={[styles2.Input, { width: "70%" }]}
            data={data}
            labelField="label"
            valueField="value"
            placeholder="Select claim"
            placeholderStyle={{ color: "#999999b7" }}
            value={claimType}
            onChange={(item) => setClaimType(item.value)}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles2.AddBtn}
            onPress={() => setModalValue(true)}
          >
            <Text style={styles2.AddBtnText}>ADD</Text>
          </TouchableOpacity>
        </View>

        {modalValue && (
          <Modal
            visible={modalValue}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setModalValue(false)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0, 0, 0, 0.18)",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "85%",
                  backgroundColor: Colors.background,
                  borderRadius: 12,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: Colors.textDark,
                    }}
                  >
                    Fare Details
                  </Text>
                  <TouchableOpacity onPress={() => setModalValue(false)}>
                    <AntDesign name="closecircle" color="#333" size={24} />
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textDark,
                    marginBottom: 5,
                  }}
                >
                  Amount
                </Text>
                <TextInput
                  placeholder="Enter amount"
                  keyboardType="numeric"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.border,
                    borderRadius: 8,
                    padding: 10,
                    marginBottom: 15,
                    fontSize: 16,
                  }}
                />

                <Text
                  style={{
                    fontSize: 16,
                    color: Colors.textDark,
                    marginBottom: 5,
                  }}
                >
                  Notes
                </Text>
                <TextInput
                  placeholder="Add additional notes"
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  style={{
                    borderWidth: 1,
                    borderColor: Colors.border,
                    borderRadius: 8,
                    padding: 10,
                    height: 100,
                    fontSize: 16,
                    marginBottom: 20,
                  }}
                />

                <TouchableOpacity
                  style={[
                    styles3.modalBtn,
                    {
                      alignItems: "center",
                      backgroundColor: Colors.primary,
                      padding: 12,
                      borderRadius: 8,
                    },
                  ]}
                  onPress={() => {
                    setModalValue(false);
                    Alert.alert("Success", "Thanks for submitting 👍");
                  }}
                >
                  <Text
                    style={{
                      color: Colors.textLight,
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        )}
      </View>
    </View>
  );
};

export default OutOfStationClaims;
