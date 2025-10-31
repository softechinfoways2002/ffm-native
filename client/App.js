import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Login from "./screens/authScreens.js/login.js";
import Register from "./screens/authScreens.js/register.js";
import Dashboard from "./screens/empDashboardScreens/dashboard.js";
import RaiseReimbursement from "./screens/empDashboardScreens/raiseReimbursement.js";
import ClaimDetails from "./screens/empDashboardScreens/claimDetails.js";
import myVisit from "./screens/meetingScreen/myVisit.js";
import DirectVisit from "./screens/meetingScreen/directVisit.js";
import ScheduledMeeting from "./screens/meetingScreen/ScheduledMeeting.js";
import Meetings from "./screens/empDashboardScreens/meetings.js";
import meetingDetails from "./screens/meetingScreen/meetingDetails.js";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <Stack.Navigator
          initialRouteName="dashboard"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="dashboard" component={Dashboard} />
          <Stack.Screen name="RaiseReimbursement" component={RaiseReimbursement} />
          <Stack.Screen name="ClaimDetails" component={ClaimDetails} />
          <Stack.Screen name="MyVisit" component={myVisit} />
          <Stack.Screen name="DirectVisit" component={DirectVisit} />
          <Stack.Screen name="ScheduledMeeting" component={ScheduledMeeting} />
          <Stack.Screen name="MeetingDetails" component={meetingDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;
