import React from 'react';
import {View, Text,TouchableOpacity,Modal,
  TextInput,
} from 'react-native';
import {openReScheduleStyles} from "../../styles/meetings/openSchedule.js"

const OpenReSchedule = ({ visible, onClose, navigation }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}>
      <View style={openReScheduleStyles.overlay}>
        <View style={openReScheduleStyles.container}>
          <Text style={openReScheduleStyles.heading}>Re-Scheduled Meeting</Text>
          <Text style={openReScheduleStyles.heading1}>Set your Meeting Time</Text>

          <View style={openReScheduleStyles.dateContainer}>
            <View style={{flexDirection:"row"}}>
            <Text style={openReScheduleStyles.text}>Meeting Date </Text>
            <Text style={{color:"red"}}>* </Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Text style={openReScheduleStyles.text}>Time </Text>
             <Text style={{color:"red"}}>* </Text>
            </View>
          </View>

          <View style={openReScheduleStyles.placeholder}>
            <TextInput
              placeholder="dd/mm/yy"
              style={[openReScheduleStyles.dd, { width: 160 }]}
              placeholderTextColor="#999"
            />
            <TextInput
              placeholder="hh:mm"
              style={[openReScheduleStyles.dd, { width: 100 }]}
              placeholderTextColor="#999"
            />
          </View>
          <View style={openReScheduleStyles.buttons}>
            <TouchableOpacity onPress={onClose}>
              <Text style={openReScheduleStyles.reject}>Reject</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={openReScheduleStyles.setButton}
              onPress={() => {
                onClose();
              }}>
              <Text style={openReScheduleStyles.set}>Set</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OpenReSchedule;

