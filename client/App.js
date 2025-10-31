import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

import Login from "./screens/authScreens.js/login.js";
import Register from "./screens/authScreens.js/register.js";
import Dashboard from "./screens/empDashboardScreens/dashboard.js";
const App = () => {
  const Stack = createNativeStackNavigator();
  return(
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        <Stack.Navigator
          initialRouteName="dashboard"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="dashboard" component={Dashboard} />          
        </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
