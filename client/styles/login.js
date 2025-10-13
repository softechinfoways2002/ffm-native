import {StyleSheet} from 'react-native';
export const LoginStyles=StyleSheet.create({
  container: {
    flex: 1,
  },
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
  input: {
   gap:10,
   flexDirection:"row",
   alignSelf:"center",
   paddingLeft:15,
   height:60,
   alignItems:"flex-start",
   borderWidth:1,
   marginTop:20,
   width:340,
   borderColor:"#e4e4e4",
   backgroundColor:"#e4e4e4",
   borderRadius:10
  },
  forgot: {
    textAlign: "right",
    color: "#575F66",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 25,
  alignSelf:"center"
  },
  new: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 30,
  },
  signInButton: {
    marginTop: 25,
    backgroundColor: "#4478B2",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    alignSelf: "center",
    borderWidth: 2,
    borderRadius: 10,
    width: 200,
    borderColor: "#4478B2",
  },
  signInText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },
});

