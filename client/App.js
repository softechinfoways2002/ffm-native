import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./components/login.js";
import Register from "./components/register.js"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "react-native";
const App = () => {
    const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <StatusBar barStyle="dark-content" backgroundColor="black"  />
  <Stack.Navigator initialRouteName="login" screenOptions={{headerShown:false}}>
    <Stack.Screen name="login" component={Login}  />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
</NavigationContainer>

  );
};
export default App;
