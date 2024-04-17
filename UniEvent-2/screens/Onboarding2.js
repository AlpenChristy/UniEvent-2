import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding3, styles.onboarding3Layout]}>
      <Image
        style={[styles.onboarding3Child, styles.onboarding3Layout]}
        contentFit="cover"
        source={require("../assets/group-333312.png")}
      />
      <View style={styles.frame}>
        <View style={styles.title}>
          <Text
            style={[styles.buildingBetterWork, styles.createAUniqueFlexBox]}
          >
            {" "}
            To Look Up More Events or Activities Nearby By Map
          </Text>
          <Text
            style={[styles.createAUnique, styles.next1Typo]}
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
              source={require("../assets/dot2.png")}
            />
            <Pressable
              style={styles.next}
              onPress={() => navigation.navigate("SignUpPage")}
            >
              <Text style={[styles.next1, styles.skip1Typo]}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  onboarding3Layout: {
    width: "100%",
    overflow: "hidden",
  },
  createAUniqueFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  next1Typo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  frame1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  skip1Typo: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    lineHeight: 34,
  },
  onboarding3Child: {
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
    opacity: 0.8,
    marginTop: -1,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  title: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  skip1: {
    fontFamily: FontFamily.montserratSemiBold,
    textAlign: "left",
    opacity: 0.5,
    fontWeight: "600",
    flex: 1,
  },
  dotIcon: {
    width: 41,
    height: 8,
  },
  next1: {
    textAlign: "right",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  next: {
    marginLeft: 87,
  },
  frame1: {
    width: 168,
    overflow: "hidden",
  },
  directional: {
    justifyContent: "space-between",
    marginTop: 22,
    alignSelf: "stretch",
  },
  frame: {
    borderTopLeftRadius: Border.br_29xl,
    borderTopRightRadius: Border.br_29xl,
    backgroundColor: Color.colorForestgreen_100,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_21xl,
    paddingTop: 23,
    paddingBottom: Padding.p_18xl,
    marginTop: -14,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  onboarding3: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    paddingTop: Padding.p_44xl,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding2;
