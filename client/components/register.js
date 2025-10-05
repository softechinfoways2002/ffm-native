import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Alert,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RegisterStyles} from '../styles/register.js';
const Register = () => {
  const styles=RegisterStyles;
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
 const[tab,setTab]=useState("register");
  const handleRegister = async () => {
    if (!fullName ||  !email || !password || !phone) {
      return Alert.alert("Error","⚠️ Name, email, password and phone number are required");
    }
    try {
      const response = await fetch("http://10.0.2.2:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: fullName,
          email,
          password,
          phone,
          role:"employee"
        })
      });
      const data = await response.json();
      console.log(data);
      Alert.alert("Message",data.message);
    } catch (err) {
      console.log(err);
      Alert.alert("Error", err.message);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{uri:"https://image.freepik.com/vecteurs-libre/illustration-du-concept-compte_114360-279.jpg"}} style={{width:420,height:300,marginTop:30}}/>
        
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

      <View>
      <View style={styles.input}>
   <MaterialIcons name="person" color="gray" size={24} style={{alignSelf:"center"}} />
        <TextInput placeholder='Full Name' style={{alignSelf:"center"}} value={fullName} onChangeText={setFullName} />
        </View>
         <View style={styles.input}>
          <MaterialIcons name="phone" color="gray" size={24} style={{alignSelf:"center"}} />
        <TextInput placeholder='Mobile Number' value={phone} onChangeText={setPhone} style={{alignSelf:"center"}} keyboardType="phone-pad" />
        </View>
         <View style={styles.input}>
          <FontAwesome name="envelope-o" color="gray" size={24}  style={{alignSelf:"center"}}/>
        <TextInput placeholder='Email'  style={{alignSelf:"center"}} value={email} onChangeText={setEmail} keyboardType="email-address" />
        </View>
         <View style={styles.input}>
           <MaterialIcons name="lock" color="gray" size={24} style={{alignSelf:"center"}} />
        <TextInput placeholder='Password' secureTextEntry={true}  style={{alignSelf:"center"}} value={password} onChangeText={setPassword} />
        </View>
      </View>

      <Pressable
    
        style={{
          marginTop: 30,
          backgroundColor: "#4478B2",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          alignSelf: "center",
          borderWidth: 2,
          borderRadius: 10,
          width: 200,
          borderColor: "#4478B2"
        }}
        onPress={handleRegister}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>Register</Text>
      </Pressable>

    </View>
  );
};

export default Register;

