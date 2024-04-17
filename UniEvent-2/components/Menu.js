import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Menu = ({ onClose, state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
    <FrameComponent3 />,
    <FrameComponent4 />,
  ]);
  const [drawerItemsActive] = useState([
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
    <FrameComponent3 />,
    <FrameComponent4 />,
  ]);
  const stateIndex = !state ? 0 : state.index;

  return (
    <View style={styles.menu}>
      <View style={styles.frame}>
        <Pressable
          style={styles.frame1}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/rectangle-4158.png")}
          />
          <Text style={styles.sattu}>Sattu</Text>
        </Pressable>

        <View style={styles.frameParent}>
          {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
          {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
          {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
          {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
          {stateIndex === 4 ? drawerItemsActive[4] : drawerItemsNormal[4]}
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt41: {
    marginTop: 41,
  },
  iconLayout: {
    width: 23,
    height: 23,
  },
  homeTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frameChild: {
    borderRadius: Border.br_11xl,
    height: 60,
    width: 60,
  },
  sattu: {
    fontSize: FontSize.size_lgi,
    textTransform: "capitalize",
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    marginTop: 12,
    textAlign: "left",
    color: Color.colorBlack,
  },
  frame1: {
    height: 95,
    width: 60,
    overflow: "hidden",
  },
  frameParent: {
    width: 130,
    height: 355,
    marginTop: 40,
  },
  frame: {
    overflow: "hidden",
    alignSelf: "stretch",
  },
  menu: {
    borderTopRightRadius: Border.br_21xl,
    borderBottomRightRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    width: 201,
    height: 811,
    paddingLeft: 25,
    paddingTop: 45,
    paddingRight: 25,
    paddingBottom: 35,
    maxWidth: "100%",
    maxHeight: "100%",
    right: 90,
  },
});

export default Menu;
