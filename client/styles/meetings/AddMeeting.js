import { StyleSheet } from "react-native";
import color from "../../constants/color";
export const AddMeetingStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: color.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  icon: {
    color: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: 'white',
    marginLeft: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  option: {
    fontSize: 18,
    paddingVertical: 12,
  },
  close: {
    fontSize: 16,
    color: color.primary,
    textAlign: 'center',
    marginTop: 10,
  },
});
