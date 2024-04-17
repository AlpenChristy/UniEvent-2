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

const FrameComponent = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.vuesaxlinearhomeParent, style]}
      onPress={() => navigation.navigate("Home")}
    >
      <Image
        style={styles.vuesaxlinearhomeIcon}
        contentFit="cover"
        source={require("../assets/vuesaxlinearhome.png")}
      />
      <Text style={styles.home}>Home</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  vuesaxlinearhomeIcon: {
    width: 23,
    height: 23,
  },
  home: {
    fontSize: FontSize.size_base,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 15,
  },
  vuesaxlinearhomeParent: {
    alignSelf: "stretch",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default FrameComponent;
