import { StyleSheet } from "react-native";
import color from "../../constants/color";
export const directVisitStyles=StyleSheet.create(
    {
        back:
        {
position: "absolute",
  left: 20,
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
container:
{
    backgroundColor: color.primary,
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignItems: 'center',
    flexDirection:"row",
   justifyContent:"center"
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
starView:
{
    flexDirection:"row"
},
starText:
{
    marginTop:20,
    marginLeft:5,
    color:"red"
}

    }
)