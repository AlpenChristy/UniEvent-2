import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.welcomeIcon}
      resizeMode="cover"
      source={require("../assets/welcome.png")}
    >
      <View
        style={[
          styles.unievent1RemovebgPreviewWrapper,
          styles.buttonColorShadowBox,
        ]}
      >
        <Image
          style={styles.unievent1RemovebgPreviewIcon}
          contentFit="cover"
          source={require("../assets/unievent--1-removebgpreview-1.png")}
        />
      </View>
      <Pressable
        style={[styles.buttonColor, styles.buttonColorShadowBox]}
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text style={styles.continue}>Get Started</Text>
        <Image
          style={styles.buttonColorChild}
          contentFit="cover"
          source={require("../assets/group-4.png")}
        />
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  buttonColorShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    backgroundColor: Color.colorPalegreen,
    alignItems: "center",
  },
  unievent1RemovebgPreviewIcon: {
    borderRadius: 151,
    width: 301,
    height: 301,
  },
  unievent1RemovebgPreviewWrapper: {
    borderRadius: 150,
    shadowColor: "rgba(54, 124, 254, 0.25)",
    shadowRadius: 100,
    elevation: 100,
    justifyContent: "center",
    overflow: "hidden",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    backgroundColor: Color.colorPalegreen,
  },
  continue: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorMediumpurple_100,
    textAlign: "center",
  },
  buttonColorChild: {
    width: 30,
    height: 30,
    marginLeft: 30,
  },
  buttonColor: {
    borderRadius: Border.br_mini,
    shadowColor: "rgba(111, 126, 201, 0.25)",
    shadowRadius: 35,
    elevation: 35,
    width: 271,
    height: 58,
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: Padding.p_sm,
  },
  welcomeIcon: {
    borderRadius: Border.br_21xl,
    flex: 1,
    width: 375,
    height: 812,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: 50,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Welcome;
