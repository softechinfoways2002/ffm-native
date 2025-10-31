import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import DashboardHome from "./dashboardHome";
import Meetings from "./meetings";
import Profile from "./profile";
import Colors from '../../constants/color';
import More from "./more";
import Reimbursement from "./reimbursement"
const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor:Colors.primary,
        tabBarInactiveTintColor: Colors.textDark,
        tabBarStyle: { backgroundColor:Colors.background},
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Home") iconName = "home-outline";
          else if (route.name === "Meetings") iconName = "business-outline";
          else if (route.name === "Claim") iconName = "card-outline";
          else if (route.name === "Profile") iconName = "person-outline";
          else if (route.name === "More") iconName = "ellipsis-horizontal-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >  
      <Tab.Screen name="Home" component={DashboardHome} />
      <Tab.Screen name="Meetings" component={Meetings} />
      <Tab.Screen name="Claim" component={Reimbursement} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default Dashboard;
