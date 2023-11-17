import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/Firebase.config";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React from "react";
import Appstyle from "../styles/Appstyle";
import { ImageBackground } from "react-native";
import Resetbutton from "../components/Resetbutton";
import Signupbuttton from "../components/Signupbuttton";
import { useNavigation } from "@react-navigation/native";
const background = require("../../assets/background.jpg");
export default function Signup() {
  const navigation = useNavigation();
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const [validationmessage, setvalidationmessage] = useState("");

  const validateandset = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setvalidationmessage("password do not match.");
    } else {
      setvalidationmessage("");
    }
    setValue(value);
  };
  const sinup = () => {
    if (Password === confirmpassword) {
      createUserWithEmailAndPassword(auth, email, Password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser);
          navigation.navigate("Todo");
        })
        .catch((error) => {
          setvalidationmessage(error.message);
        });
    } else {
    }
  };

  return (
    <ImageBackground style={Appstyle.imgcon} source={background}>
      <View style={Appstyle.loginbackcover}>
        <Text style={Appstyle.loginheading}>Signup</Text>
        <Text style={Appstyle.errormsgonsignup}>{validationmessage}</Text>
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
          onChangeText={(value) =>
            validateandset(value, confirmpassword, setPassword)
          }
        ></TextInput>
        <TextInput
          secureTextEntry={true}
          style={Appstyle.logintextinput}
          placeholder="Confirm Password"
          placeholderTextColor={"#CFB9A6"}
          value={confirmpassword}
          onChangeText={(value) =>
            validateandset(value, Password, setconfirmpassword)
          }
        ></TextInput>

        <View style={{ flexDirection: "row" }}>
          <Text style={Appstyle.inputlowetext}>Already have an account? </Text>
          <Signupbuttton
            text="Login"
            onPress={() => navigation.navigate("Login")}
          ></Signupbuttton>
        </View>

        <TouchableOpacity style={{ marginBottom: 9 }} onPress={sinup}>
          <Text style={Appstyle.loginlowestbutton}>Signup</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
