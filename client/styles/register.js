 import {StyleSheet} from 'react-native';
 export const RegisterStyles=StyleSheet.create({
  switchContainer: {
  marginTop: 30,
  width: 350,
  height: 50,
  borderWidth: 1,
  borderRadius: 15,
  flexDirection: "row",
  alignSelf: "center",
  borderColor: "#e4e4e4",
  overflow: "hidden", 
},

switchButton: {
  flex: 1, 
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#4478B2", 
},
switchText: {
  color: "white",
  fontSize: 20,
  fontWeight: "600",
},
switchTextRegister: {
  color: "white",
  fontSize: 20,
  fontWeight: "600",
},
  container: {
    flex: 1
  },
  login: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "700",
    color: "#4478B2",
    marginTop:10
  },
  
 input: {
   gap:10,
   flexDirection:"row",
   alignSelf:"center",
   paddingLeft:12,
   height:60,
   alignItems:"flex-start",
   borderWidth:1,
   margin:15,
   width:340,
   borderColor:"#e4e4e4",
   backgroundColor:"#e4e4e4",
   borderRadius:10
  },
  new: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 30
  }
});

