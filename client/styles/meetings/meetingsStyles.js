import { StyleSheet } from "react-native";
import color from "../../constants/color";
export const MeetingStyles = StyleSheet.create({
    gradientContainer:{
      height:150,
      backgroundColor:color.primary,
      alignItems:'center'
     },
      containerText:{
             fontSize:24,
             fontWeight:'bold',
             color:color.textLight,  
             marginBottom:9 ,
             marginLeft:15
           },
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: color.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  icon: {
    color: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginLeft: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems:"center",
    justifyContent:"center"
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
   justifyContent: 'center',
    width:'80%',
    borderRadius:15,
   alignItems:"center",
   alignContent:"center"
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 15,
    alignSelf:"center"
  },
  option: {
    fontSize: 15,
    paddingVertical: 12,
    fontWeight:800
  },
  close: {
    fontSize: 16,
    color: color.primary,
    textAlign: 'center',
    marginTop: 10,
  },
});
