import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AddMeetingStyles } from '../../../styles/meetings/AddMeeting';
const AddMeeting = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Octicons name="three-bars" style={AddMeetingStyles.icon} size={24} />
        <Text style={AddMeetingStyles.title}>Meetings</Text>
      </View>

      <TouchableOpacity style={AddMeetingStyles.fab} onPress={() => setVisible(true)}>
        <AntDesign name="pluscircle" size={60} color="#7591C9" />
      </TouchableOpacity>
      <Modal
        visible={visible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setVisible(false)}>
        <View style={AddMeetingStyles.modalOverlay}>
          <View style={AddMeetingStyles.modalContent}>
            <Text style={AddMeetingStyles.modalTitle}>Add Meeting</Text>

            <TouchableOpacity onPress={() => { setVisible(false); navigation.navigate('DirectVisit'); }}>
              <Text style={AddMeetingStyles.option}>Direct Visit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setVisible(false); navigation.navigate('MyVisit'); }}>
              <Text style={AddMeetingStyles.option}>My Visit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { setVisible(false); navigation.navigate('ScheduledMeeting'); }}>
              <Text style={AddMeetingStyles.option}>Add Scheduled Meeting</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style={AddMeetingStyles.close}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddMeeting;

