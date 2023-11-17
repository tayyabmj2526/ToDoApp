import { collection, addDoc } from "firebase/firestore"; 
import AddModal from "../components/AddModal";
import { useState } from "react";
import Managaccountbutton from "../components/Signupbuttton";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/Firebase.config";
import Appstyle from "../styles/Appstyle";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Modal } from "react-native";
export default function Todo() {
  const adddtdo = (todo) => {};
  const [modalvisible, setmodalvisible] = useState("");
  const navigation = useNavigation();
  const lgout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        Alert.alert("alert", "logout has done");
      });
  };

  const showcontent = () => {
    return (
      <View>
        <TouchableOpacity>
          <Text style={Appstyle.vrifyemailtextintodo}> To Do</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const showSendVerificationEmail = () => {
    return (
      <View>
        <Text style={Appstyle.vrifyemailtextintodo}>
          please verify your email Todo
        </Text>
        <TouchableOpacity
          onPress={() => sendEmailVerification(auth.currentUser)}
        >
          <Text style={Appstyle.verifyemailbuttonintodo}>
            send verification email
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={Appstyle.con}>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
        }}
      >
        <Text style={Appstyle.todoheading}>ToDo</Text>
        <Managaccountbutton
          text="manage account"
          color="#04A7B3"
        ></Managaccountbutton>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => setmodalvisible(false)}
      >
        <AddModal
          onclose={() => setmodalvisible(false)}
          addtodo={adddtdo}
        ></AddModal>
      </Modal>
      {auth.currentUser.emailVerified
        ? showcontent()
        : showSendVerificationEmail()}
      <TouchableOpacity onPress={lgout}>
        <Text style={Appstyle.logoutbutton}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setmodalvisible(true)}>
        <Text style={Appstyle.logoutbutton}>jjgkuj</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
