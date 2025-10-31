// src/screens/meetings/OpenReSchedule.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from 'react-native';
import color from '../../constants/color';

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

const openReScheduleStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    elevation: 8,
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
  },
  heading1: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 5,
    color: '#333',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 15,
  },
  dateContainer: {
    flexDirection: 'row',
   gap:60,
    marginHorizontal: 10,
    marginTop: 15,
  },
  placeholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
  },
  dd: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1.5,
    fontSize: 16,
    paddingLeft: 10,
    paddingVertical: 5,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginTop: 20,
  },
  reject: {
    fontSize: 18,
    fontWeight: '700',
    color: color.error,
  },
  set: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  setButton: {
    backgroundColor: color.primary,
    alignItems: 'center',
    borderRadius: 25,
    width: 100,
    height: 35,
    justifyContent: 'center',
  },
});
