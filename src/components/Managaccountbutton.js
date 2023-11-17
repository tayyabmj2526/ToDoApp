import { View, Text, Pressable } from "react-native";
import React from "react";
import Appstyle from "../styles/Appstyle";
const style = {};
if (props.color) {
  style.color = props.color;
}
export default function Managaccountbutton(props) {
  return (
    <View style={{ marginVertical: 7 }}>
      <Pressable onPress={props.onPress}>
        {({ pressed }) => (
          <Text
            style={[
              pressed ? Appstyle.signupbutton : Appstyle.signupbuttonclick,
              style,
            ]}
          >
            {props.text}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
