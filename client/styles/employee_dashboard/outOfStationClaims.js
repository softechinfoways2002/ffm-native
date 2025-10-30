import { StyleSheet } from "react-native";
import Colors  from "../../constants/color.js";
 export const RaiseReimbursement_styles=StyleSheet.create({
     mainContainer:{
            backgroundColor:Colors.background,
            borderRadius:30,
            borderColor:Colors.border,
            borderWidth:3,
            marginTop:-65,
            height:'100%',
          },
          header:{
           fontSize:22,
           fontWeight:500,
           color:Colors.textLight,
           marginBottom:3,
           marginRight:'25%'
          },
      Text:{
        marginTop:16,marginLeft:12,marginBottom:5,
        fontSize:16,
        fontWeight:'600'
          },
      Input:{
        borderRadius:10,
        borderColor:Colors.border,
        borderWidth:1,
        height:'5%',
        marginLeft:12,
        marginRight:12 ,
        padding:15,
        justifyContent: 'center',  
       backgroundColor: '#fff',
        
      },
      AddBtn:{
        backgroundColor:Colors.primary,
        justifyContent:'center',
        height:'25%',
        width:'20%',
        alignItems:'center',
        borderRadius:10,  
      },
      AddBtnText:{
        fontSize:16,
        color:Colors.textLight,
        fontWeight:"bold"
      }
})
 