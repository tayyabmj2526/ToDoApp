import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Appstyle from "../styles/Appstyle";
import { ImageBackground } from "react-native";
import Signupbuttton from "../components/Signupbuttton";
const background = require("../../assets/background.jpg");
export default function Resetpswrd() {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [errormessage, seterrormessage] = useState("");
  const passwordreset = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          navigation.navigate("Login");
          alert("password reset masg has sent");
        })
        .catch((error) => {
          seterrormessage(error.message);
        });
    } else {
      alert("pleas put a valid email");
    }
  };
  return (
    <ImageBackground style={Appstyle.imgcon} source={background}>
      <View style={Appstyle.loginbackcover}>
        <Text style={Appstyle.loginheading}>Reset Password</Text>
        <Text style={Appstyle.errormsgonsignup}>{errormessage}</Text>
        <TextInput
          style={Appstyle.logintextinput}
          placeholder="email"
          placeholderTextColor={"#CFB9A6"}
          value={email}
          onChangeText={(Text) => setemail(Text)}
        ></TextInput>

        <View style={{ flexDirection: "row" }}>
          <Text style={Appstyle.inputlowetext}>Don't have an account? </Text>
          <Signupbuttton
            text="Sign up"
            onPress={() => navigation.navigate("Signup")}
          ></Signupbuttton>
        </View>

        <TouchableOpacity style={{ marginBottom: 9 }} onPress={passwordreset}>
          <Text style={Appstyle.loginlowestbutton}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
