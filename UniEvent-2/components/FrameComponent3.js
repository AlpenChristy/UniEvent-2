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

const FrameComponent3 = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.vuesaxlinearbookmarkParent, style]}
      onPress={() => navigation.navigate("EmptyEvents")}
    >
      <Image
        style={styles.vuesaxlinearbookmarkIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlinearbookmark.png")}
      />
      <Text style={styles.bookmarks}>Bookmarks</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vuesaxlinearbookmarkIcon: {
    width: 23,
    height: 23,
  },
  bookmarks: {
    fontSize: FontSize.size_base,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 14,
  },
  vuesaxlinearbookmarkParent: {
    alignSelf: "stretch",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default FrameComponent3;
