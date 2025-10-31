import {View,Text,FlatList,StyleSheet,TouchableOpacity,Image,Modal
} from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../constants/color';
import { date } from '../../constants/date';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OpenReSchedule from '../meetingScreen/openReSchedule';
import { MeetingStyles } from '../../styles/meetings/meetingsStyles';
import { styles } from '../../styles/meetings/meetings';
const data = [
  {
    id: 1,
    client: 'Kumar Education pvt Ltd',
    address: '72/12 New Colony, Noida',
    date: '2025-04-23',
    Status: 'upcoming',
    purpose: 'Complaint',
  },
  {
    id: 2,
    client: 'XYZ pvt ltd',
    address: '91/4 Sector 15, Gurgaon',
    date: '2025-04-25',
    Status: 'completed',
    purpose: 'Complaint',
  },
  {
    id: 3,
    client: 'LMN pvt ltd',
    address: '14 Park Street, Delhi',
    date: '2025-04-27',
    Status: 'cancelled',
    purpose: 'Complaint',
  },
];
const Meetings = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleColor = (item) => {
    if (item.Status === 'upcoming') return '#073B77';
    else if (item.Status === 'completed') return '#07772B';
    else if (item.Status === 'postpone') return 'orange';
    else if (item.Status === 'cancelled') return '#F07373';
    else return null;
  };
  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    const year = d.getFullYear();
    return `${day} ${month}, ${year}`;
  };
return (
  <View style={styles.main}>
    <View style={[styles.gradientContainer, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Octicons name="three-bars" color={"white"} size={24} />
        <Text style={[styles.containerText, { marginLeft: 10 }]}>Meetings</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="calendar-month" color={"white"} size={20} style={{ marginRight: 6 }} />
        <Text style={[styles.containerText, { fontSize: 16, fontWeight: 'bold', marginLeft: 0 }]}>{date}</Text>
      </View>
    </View>
    <View style={styles.whiteContainer}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        renderItem={({ item }) => {
          const statusColor = handleColor(item);
          const formattedDate = formatDate(item.date);
          return (
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text style={styles.clientName}>🏢 {item.client}</Text>
                  <Text style={{ color: statusColor, fontWeight: '700', marginTop: 10 }}>{item.Status}</Text>
                </View>
                <Text style={styles.cardAddress}>📍 {item.address}</Text>
                <Text style={styles.cardPurpose}>Purpose - {item.purpose}</Text>

                <View style={styles.actions}>
                  <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={styles.reScheduleButton}>
                    <Text style={styles.reScheduleText}>Re-Schedule</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('MeetingDetails')}>
                    <Ionicons name="chevron-forward-outline" color="gray" size={24} style={styles.ion} />
                  </TouchableOpacity>
                </View>

                <View style={styles.dateBadge}>
                  <MaterialCommunityIcons name="calendar-month" size={16} color="white" />
                  <Text style={styles.dateText}>{formattedDate}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
    <OpenReSchedule
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      navigation={navigation}
    />
<Modal
  visible={visible}
  transparent
  animationType="slide"
  onRequestClose={() => setVisible(false)}>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Add Meeting</Text>
      <TouchableOpacity
        style={[styles.optionButton, { backgroundColor: '#073B77' }]}
        onPress={() => {
          setVisible(false);
          navigation.navigate('MyVisit');
        }}>
        <MaterialCommunityIcons name="account-check" size={20} color="white" />
        <Text style={styles.optionText}>My Visit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, { backgroundColor: '#0A8754' }]}
        onPress={() => {
          setVisible(false);
          navigation.navigate('DirectVisit');
        }}>
        <MaterialCommunityIcons name="account-arrow-right" size={20} color="white" />
        <Text style={styles.optionText}>Direct Visit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionButton, { backgroundColor: '#FF8C00' }]}
        onPress={() => {
          setVisible(false);
          navigation.navigate('ScheduledMeeting');
        }}>
        <MaterialCommunityIcons name="calendar-plus" size={20} color="white" />
        <Text style={styles.optionText}>Scheduled Meeting</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => setVisible(false)}>
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
    <TouchableOpacity style={MeetingStyles.fab} onPress={() => setVisible(true)}>
      <AntDesign name="pluscircle" size={50} color={color.primary} />
    </TouchableOpacity>
  </View>
);

};

export default Meetings;

