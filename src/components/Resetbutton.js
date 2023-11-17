import { View, Text, Pressable } from "react-native";
import React from "react";
import Appstyle from "../styles/Appstyle";
export default function Resetbutton(props) {
  return (
    <View style={{ marginVertical: 7 }}>
      <Pressable onPress={props.onPress}>
        {({ pressed }) => (
          <Text
            style={pressed ? Appstyle.signupbutton : Appstyle.signupbuttonclick}
          >
            {props.text}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
