import { StyleSheet } from "react-native";
import Colors from "../../constants/color";


export const Reimbursement_styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'20%',
        backgroundColor:Colors.primary,
        borderRadius:25,
    },
    totalCard:{
        width:'90%',
        height:'20%',
        borderRadius:15,
        borderColor:Colors.border,
        borderLeftColor:Colors.border,
        backgroundColor:Colors.background,
        borderBottomWidth:2,
        borderLeftWidth:2,
        flexDirection:'row',
        margin:20,
        padding:5,
        elevation:3
    },
    statusbtn:{
     backgroundColor:Colors.background,
     borderRadius:15,
     marginRight:2
    
    },
    addbtn:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:Colors.primary,
        justifyContent:"center",
        alignItems:'center',
        zIndex:8
    },
    addview:
    {
    justifyContent:"center",
    alignItems:'center',
    alignSelf:'flex-end',
    marginTop:10,
    marginRight:10
    },
    cards:{
        width:'90%',
        borderRadius:10,
        borderColor:Colors.border,
        backgroundColor:Colors.background,
        borderLeftWidth:4,
        alignItems:'center',
        margin:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height:100,
        padding:5,
        elevation:3
    }, 
    cardText:
    {
    color:'darkgray',
    fontSize:14,
    margin: 3
    },
    meetingname:
    {
    margin: 3,
    color:Colors.Dark,
    fontSize:20,
    marginRight:5,
    justifyContent:'space-around', 
    fontWeight:'bold'
    },
    containerText:{
        fontSize:20,
        fontWeight:'bold',
        color:Colors.textLight,  
        marginBottom:10 
      },
      mainContainer1:{
        backgroundColor:Colors.background,
        borderRadius:30,
        borderColor:Colors.border,
        borderTopWidth:3,
        marginTop:-65,
        height:'80%'
      }
})