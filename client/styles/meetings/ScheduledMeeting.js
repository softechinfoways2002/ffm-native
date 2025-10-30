import { StyleSheet } from "react-native";
import color from "../../constants/color";
export const ScheduledMeetingStyles=StyleSheet.create(
    {
        notification:
        {
fontWeight:600,
color:"gray",
fontSize:16
        },
        whatsapp:
        {
flexDirection:"row",
marginTop:15,
marginLeft:20,
gap:5
        },
        date:
        {
flexDirection:"row"
        },
        location:
        {
flexDirection:"row",
gap:250
        },
        image:
        {
marginTop:15
        },
       
        icon:
        {
flexDirection:"row"
        },
        button:
        {
backgroundColor:color.primary,
height:50,
width:320,
alignSelf:"center",
alignItems:"center",
justifyContent:"center",
borderRadius:10,
marginTop:30
        },
        buttonText:
        {

            fontSize:16,
            fontWeight:700,
            color:"white"
        },
         back:
        {
position: "absolute",
  left: 20,
        },
container:
{
    backgroundColor:color.primary,
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row"
},
text:
{
    fontSize:20,
color:"white",
fontWeight:500
},
heading:
{
    fontSize:18,
    fontWeight:700,
    marginLeft:20,
    marginTop:20
},
textinput:
{
    borderRadius:10,
    borderColor:"gray",
marginHorizontal:25,
marginTop:5,
    padding:10,
    borderWidth:1,
    height:50
},

    }
)