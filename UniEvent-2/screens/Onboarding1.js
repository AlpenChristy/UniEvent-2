import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding2, styles.onboarding2Layout]}>
      <Image
        style={[styles.onboarding2Child, styles.onboarding2Layout]}
        contentFit="cover"
        source={require("../assets/group-333311.png")}
      />
      <View style={styles.frame}>
        <View style={styles.title}>
          <Text
            style={[styles.buildingBetterWork, styles.createAUniqueFlexBox]}
          >
            {" "}
            We Have Modern Events Calendar Feature
          </Text>
          <Text
            style={[styles.createAUnique, styles.createAUniqueFlexBox]}
          >{` In publishing and graphic design, Lorem is a placeholder text commonly `}</Text>
        </View>
        <View style={[styles.directional, styles.frame1FlexBox]}>
          <Pressable onPress={() => navigation.navigate("SignUpPage")}>
            <Text style={[styles.skip1, styles.skip1Typo]}>Skip</Text>
          </Pressable>
          <View style={[styles.frame1, styles.frame1FlexBox]}>
            <Image
              style={styles.dotIcon}
              contentFit="cover"
              source={require("../assets/dot1.png")}
            />
            <Pressable onPress={() => navigation.navigate("Onboarding2")}>
              <Text style={[styles.next1, styles.skip1Typo]}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding2Layout: {
    width: "100%",
    overflow: "hidden",
  },
  createAUniqueFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frame1FlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  skip1Typo: {
    display: "flex",
    fontFamily: FontFamily.montserratSemiBold,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    fontWeight: "600",
    lineHeight: 34,
  },
  onboarding2Child: {
    maxWidth: "100%",
    height: 475,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  buildingBetterWork: {
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.montserratAlternatesSemiBold,
    fontWeight: "600",
    lineHeight: 34,
    color: Color.colorBlack,
  },
  createAUnique: {
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    opacity: 0.8,
    marginTop: 16,
  },
  title: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  skip1: {
    textAlign: "left",
    opacity: 0.5,
  },
  dotIcon: {
    width: 40,
    height: 8,
  },
  next1: {
    textAlign: "right",
    display: "flex",
    width: 44,
    alignItems: "center",
  },
  frame1: {
    width: 168,
    overflow: "hidden",
  },
  directional: {
    marginTop: 22,
    width: 295,
  },
  frame: {
    borderTopLeftRadius: Border.br_29xl,
    borderTopRightRadius: Border.br_29xl,
    backgroundColor: Color.colorLime,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_21xl,
    paddingTop: Padding.p_21xl,
    paddingBottom: Padding.p_18xl,
    marginTop: -14,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  onboarding2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    paddingTop: Padding.p_44xl,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Onboarding1;
