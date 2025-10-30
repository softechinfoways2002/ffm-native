import { StyleSheet } from "react-native"
import color from "../../constants/color"
export const myVisitStyles=StyleSheet.create(
    {
        image:
        {
marginLeft:20
        },
        visit:
        {
fontSize:20,
color:"white",
fontWeight:500
        },
        container:
        {
backgroundColor: color.primary,
    height: 90,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row"
        },
        submit:
        {
            fontSize:20,
            fontWeight:700,
            color:"white"
        },
        button:
        {
backgroundColor:color.primary,
height:50,
width:300,
alignSelf:"center",
alignItems:"center",
justifyContent:"center",
borderRadius:10,
marginTop:20
        },
        text:
        {
            borderRadius:10,
            borderWidth:1,
            borderColor:"gray",
            width:350,
            height:50,
            marginHorizontal:20,
            padding:10
        }
        ,     
        view:
        {
            height:250,
        },
        location:
        {
         flexDirection:"row",
        
        },
        locationText:
        {
            color:"gray",
            fontWeight:"600",
            fontSize:16
        },
        heading:
        {
            fontSize:18,
            fontWeight:"700",
            marginTop:20,
            marginLeft:20,
            marginBottom:10
        },
        back:
        {
            position:'absolute',
            left:20
        }
    }
)