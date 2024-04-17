import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent1 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.groupParent, style]}
      onPress={() => navigation.navigate("Messages")}
    >
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/group-18836.png")}
      />
      <Text style={styles.message}>Message</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  frameChild: {
    width: 25,
    height: 23,
  },
  message: {
    fontSize: FontSize.size_base,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 13,
  },
  groupParent: {
    alignSelf: "stretch",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default FrameComponent1;
