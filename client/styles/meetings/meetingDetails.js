import color from "../../constants/color";
import { StyleSheet } from "react-native";
export 
const meetingDetailsStyles=StyleSheet.create(
    {
text:
{
    fontSize:20,
color:"white",
fontWeight:500
},
back:
{
    position:"absolute",
    left:20
},
subContainer:
{
    width:'90%',
    backgroundColor:"#dde0ea",
    alignSelf:"center",
    borderRadius:10,
    top:-30
},
view: {
  flexDirection: "row",
  alignItems: "center",
  marginVertical: 10,
  marginHorizontal: 20,
},

label: {
  width: 140,          
  fontSize: 16,
  fontWeight: "800",
  color: "black",
},
input: {
  flex: 1,         
  fontSize: 16,
  fontWeight: "600",
  color: "#000",
},

textInput: {
  flex: 1,
  fontSize: 16,
  borderRadius: 8,
  borderColor: "gray",
  borderWidth: 1,
  paddingHorizontal: 10,
  paddingVertical: 5,
  height: 40,
  color: "#000",
  backgroundColor: "white",
},


    }
)