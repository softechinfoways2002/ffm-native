// ClaimStack.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Reimbursement from "./claims"; 
import OutOfStationClaims from "./outOfStationClaims";
import LocalClaims from "./LocalClaims";
import ClaimDetails from "./claimDetails";

const Stack = createNativeStackNavigator();

const ClaimStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ClaimHome" component={Reimbursement} />
      <Stack.Screen name="OutOfStationClaims" component={OutOfStationClaims} />
      <Stack.Screen name="LocalClaims" component={LocalClaims} />
      <Stack.Screen name="ClaimDetails" component={ClaimDetails} />
    </Stack.Navigator>
  );
};

export default ClaimStack;
