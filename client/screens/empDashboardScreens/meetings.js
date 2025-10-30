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
    <TouchableOpacity style={MeetingStyles.fab} onPress={() => setVisible(true)}>
      <AntDesign name="pluscircle" size={60} color={color.primary} />
    </TouchableOpacity>
  </View>
);

};

export default Meetings;

const styles = StyleSheet.create({
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'flex-end',
  alignItems: 'center',
},
whiteContainer: {
  flex: 1,
  backgroundColor: '#fff',
  borderTopLeftRadius: 35,
  borderTopRightRadius: 35,
  marginTop: -40, 
  paddingTop: 15,
  shadowColor: 'gray',
  shadowOpacity: 1,
  shadowRadius: 5,
  elevation: 3,  
  borderTopWidth: 5,
  borderTopColor: 'rgba(7, 59, 119, 0.3)', 
},
modalContainer: {
  width: '100%',
  backgroundColor: 'white',
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  paddingVertical: 25,
  paddingHorizontal: 20,
  alignItems: 'center',
  elevation: 15,
},

modalTitle: {
  fontSize: 20,
  fontWeight: '700',
  color: color.primary,
  marginBottom: 20,
},

optionButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '85%',
  paddingVertical: 12,
  borderRadius: 15,
  marginVertical: 8,
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  gap: 10,
},

optionText: {
  color: 'white',
  fontSize: 16,
  fontWeight: '600',
},

cancelButton: {
  marginTop: 15,
  paddingVertical: 8,
  paddingHorizontal: 30,
  borderRadius: 10,
},

cancelText: {
  color: '#777',
  fontWeight: '800',
  fontSize: 15,
},
  main: { flex: 1, backgroundColor: '#fff' },
gradientContainer: {
  height: 150,
  backgroundColor: color.primary,
  alignItems: 'center',
  justifyContent: 'center',
  borderBottomLeftRadius: 25, 
  borderBottomRightRadius: 25, 
  shadowColor: '#000',        
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4,
  elevation: 6,   
},
  containerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: color.textLight,
    marginBottom: 9,
    marginLeft: 15,
  },
  cardContainer: {
    marginTop: 20,
    width: 360,
    alignItems: 'center',
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    position: 'relative',
    overflow: 'hidden',
  },
  dateBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: color.primary,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    elevation: 8,
  },
  dateText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clientName: { fontSize: 18, fontWeight: '600', color: '#2C3E50' },
  cardAddress: { fontSize: 15, color: '#6B7280', marginTop: 4, fontWeight: '600' },
  cardPurpose: { marginTop: 4, color: '#6B7280', fontWeight: '500' },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  reScheduleButton: {
    width: 120,
    height: 32,
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: 20,
  },
  reScheduleText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 13,
  },
  ion: { marginLeft: 10, marginTop: 8 },
});
