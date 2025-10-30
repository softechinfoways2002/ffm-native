import { StyleSheet } from "react-native";
import Colors from '../constants/color'
export const modals_styles=StyleSheet.create({
    modalBackground: {
  flex: 1,
  backgroundColor: 'rgba(202, 202, 202, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},
modalBox: {
  width: '80%',
  backgroundColor:Colors.background,
  borderRadius: 12,
  padding: 20,
  alignItems: 'center',
  elevation: 10,
  borderColor:Colors.border,
  borderWidth:2
},
modalTitle: {
  fontSize: 18,
  fontWeight: '600',
  marginBottom: 20,
  color: Colors.textDark,
},
modalBtn: {
  width: '100%',
  paddingVertical: 12,
  borderRadius: 8,
  marginTop: 10,
  alignItems: 'center',
},
modalBtnText: {
  color: Colors.textLight,
  fontSize: 16,
  fontWeight: '500',
},
 })
  