import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Meetings from './meetings';
import DirectVisit from './directVisit';
import MyVisit from './myVisit';
import MeetingDetails from './meetingDetails';
import ScheduledMeeting from './ScheduledMeeting';

const Stack = createNativeStackNavigator();

export const MeetingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MeetingsHome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MeetingsHome" component={Meetings} />
      <Stack.Screen name="MeetingDetails" component={MeetingDetails} />
      <Stack.Screen name="MyVisit" component={MyVisit} />
      <Stack.Screen name="DirectVisit" component={DirectVisit} />
      <Stack.Screen name="ScheduledMeeting" component={ScheduledMeeting} />
    </Stack.Navigator>
  );
};

export default MeetingStack;
