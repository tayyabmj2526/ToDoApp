import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Appstyle from "../styles/Appstyle";
export default function AddModal(props) {
  const [todoo, settodoo] = useState("");
  return (
    <View style={Appstyle.con}>
      <Text>add to do</Text>
      <TextInput
        style={Appstyle.logintextinput}
        placeholder="todoo"
        placeholderTextColor={"#CFB9A6"}
        value={todoo}
        onChangeText={(Text) => settodoo(Text)}
      ></TextInput>
      <TouchableOpacity onPress={props.onclose}>
        <Text>cancel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.addtodo(todoo);
          settodoo("");
          props.onclose();
        }}
      >
        <Text>ok</Text>
      </TouchableOpacity>
    </View>
  );
}
