import { StyleSheet } from "react-native";
import Colors from "../../constants/color"
 export const ClaimDetails_styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
   card: {
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 15,
    shadowColor: Colors.border,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  label: {
    fontSize: 16,
    color: Colors.textDark,
    marginTop: 10,
  },
  value: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.textDark,
  },
  status: {
    color: Colors.textLight,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: "flex-start",
  },
  mainContainer:{
    backgroundColor:Colors.background,
            borderRadius:30,
            borderColor:Colors.border,
            borderWidth:5,
            marginTop:-85,
            height:'100%',
            marginTop:50
  }
});