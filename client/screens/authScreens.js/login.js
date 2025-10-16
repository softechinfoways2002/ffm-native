import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Pressable, Text, View, TextInput, Image,Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {LoginStyles} from '../../styles/authStyles/login.js';
const Login = () => {
  const styles=LoginStyles;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const[tab,setTab]=useState("login");
  const navigation = useNavigation();
  const handleSubmit = async () => {
    try {
      const response = await fetch("http://10.0.2.2:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();
      console.log(data);
      Alert.alert("Success", data.message);
    } catch (err) {
      Alert.alert("Error" ,err.message);
    }
  };
  return (
   <View style={styles.container}>
      <Image source={{uri:"https://thumbs.dreamstime.com/b/illustration-featuring-businessman-briefcase-approaching-door-symbolizing-opportunity-modern-flat-vector-style-light-392833181.jpg?w=768"}} style={{width: 420, height: 300,marginTop:40}}/>
 <View style={styles.switchContainer}>
  <Pressable
     onPress={() =>{ navigation.navigate("login");setTab("login")}}
    style={[
      styles.switchButton,
      {backgroundColor:tab=="login"?"#4478B2":"white"}
    ]}>
    <Text
      style={[
        styles.switchText,
        { color: tab=="login" ? "white" : "#4478B2" },
      ]}
    >
      Login
    </Text>
  </Pressable>

  <Pressable
   onPress={() =>{ navigation.navigate("Register");setTab("register")}}
    style={[
      styles.switchButton,
      { backgroundColor:tab=="register"? "#4478B2" : "white" } 
    ]}
   
  >
    <Text
      style={[
        styles.switchText,
        { color: tab=="register" ? "white" : "#4478B2" }
      ]}
    >
      Register
    </Text>
  </Pressable>
</View>

      <View >
        <View style={styles.input}>  
       <FontAwesome name="envelope-o" color="gray" size={24}  style={{alignSelf:"center"}}/>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{alignSelf:"center"}}
           placeholderStyle={{ color: "gray" ,fontSize:22}}
        /> 
        </View>
        <View style={styles.input}>  
           <MaterialIcons name="lock" color="gray" size={24} style={{alignSelf:"center"}} />
          
        <TextInput
          placeholder="Password"
          placeholderStyle={{ color: "gray" ,fontSize:22}}
          value={password}
          style={{alignSelf:"center"}}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      </View>

      <Pressable  style={styles.signInButton}>
        <Text style={styles.signInText} onPress={handleSubmit}>Sign In</Text>
      </Pressable>
       <Text style={styles.forgot}>Forgot Your Password?</Text>
      <Text style={{ textAlign: "center", fontSize: 16, color: "#4478B2", marginTop: 55, fontWeight: "800" }}>
        Or Continue with
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 30 }}>
        <FontAwesome name="apple" size={40} color="#000" style={{ marginHorizontal: 25 }} />
        <FontAwesome name="facebook" size={40} color="#000" style={{ marginHorizontal:25 }} />
        <FontAwesome name="google" size={40} color="#000" style={{ marginHorizontal: 25 }} />
      </View>
    </View>
    )}
export default Login;
