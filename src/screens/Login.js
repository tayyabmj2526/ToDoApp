import { useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Appstyle from "../styles/Appstyle";
import { ImageBackground } from "react-native";
import Resetbutton from "../components/Resetbutton";
import Signupbuttton from "../components/Signupbuttton";
const background = require("../../assets/background.jpg");
export default function Login() {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("Todo");
      } else {
      }
    });
  }, []);

  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const lgin = () => {
    if (email !== "" && Password !== "") {
      signInWithEmailAndPassword(auth, email, Password)
        .then((userCredential) => {
          navigation.navigate("Todo");
        })
        .catch((error) => {
          seterrormessage(error.message);
        });
    } else {
      seterrormessage("please enter an email and password");
    }
  };

  return (
    <ImageBackground style={Appstyle.imgcon} source={background}>
      <View style={Appstyle.loginbackcover}>
        <Text style={Appstyle.loginheading}>Login</Text>
        <Text style={Appstyle.errormsgonsignup}>{errormessage}</Text>
        <TextInput
          style={Appstyle.logintextinput}
          placeholder="email"
          placeholderTextColor={"#CFB9A6"}
          value={email}
          onChangeText={(Text) => setemail(Text)}
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={Appstyle.logintextinput}
          placeholder="Password"
          placeholderTextColor={"#CFB9A6"}
          value={Password}
          onChangeText={(Text) => setPassword(Text)}
        ></TextInput>
        <View style={{ flexDirection: "row" }}>
          <Text style={Appstyle.inputlowetext}>Don't have an account? </Text>
          <Signupbuttton
            text="Sign up"
            onPress={() => navigation.navigate("Signup")}
          ></Signupbuttton>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={Appstyle.inputlowetext}>Forgot your password? </Text>
          <Resetbutton
            text="Reset"
            onPress={() => navigation.navigate("Resetpswrd")}
          ></Resetbutton>
        </View>
        <TouchableOpacity style={{ marginBottom: 9 }} onPress={lgin}>
          <Text style={Appstyle.loginlowestbutton}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
