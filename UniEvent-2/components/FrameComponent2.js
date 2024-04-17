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

const FrameComponent2 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.calendarParent, style]}
      onPress={() => navigation.navigate("SeeAllEvents")}
    >
      <Image
        style={styles.calendarIcon}
        contentFit="cover"
        source={require("../assets/calendar.png")}
      />
      <Text style={styles.events}>Events</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  calendarIcon: {
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  events: {
    fontSize: FontSize.size_base,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 14,
  },
  calendarParent: {
    alignSelf: "stretch",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default FrameComponent2;
