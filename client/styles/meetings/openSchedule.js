import color from "../../constants/color";
import { StyleSheet } from "react-native";
 export const openReScheduleStyles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    elevation: 8,
    width: '80%',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: '#000',
  },
  heading1: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 5,
    color: '#333',
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 15,
  },
  dateContainer: {
    flexDirection: 'row',
   gap:60,
    marginHorizontal: 10,
    marginTop: 15,
  },
  placeholder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 5,
  },
  dd: {
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1.5,
    fontSize: 16,
    paddingLeft: 10,
    paddingVertical: 5,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
    marginTop: 20,
  },
  reject: {
    fontSize: 18,
    fontWeight: '700',
    color: color.error,
  },
  set: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  setButton: {
    backgroundColor: color.primary,
    alignItems: 'center',
    borderRadius: 25,
    width: 100,
    height: 35,
    justifyContent: 'center',
  },
});
