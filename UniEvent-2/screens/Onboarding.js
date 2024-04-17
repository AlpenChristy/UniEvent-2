import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboarding1}>
      <Image
        style={[styles.onboarding1Child, styles.frameFlexBox]}
        contentFit="cover"
        source={require("../assets/group-33331.png")}
      />
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.title}>
          <Text
            style={[styles.buildingBetterWork, styles.createAUniqueFlexBox]}
          >{` Explore Upcoming and Nearby Events `}</Text>
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
              source={require("../assets/dot.png")}
            />
            <Pressable onPress={() => navigation.navigate("Onboarding1")}>
              <Text style={[styles.next1, styles.skip1Typo]}>Next</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignSelf: "stretch",
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
    alignItems: "center",
  },
  onboarding1Child: {
    maxWidth: "100%",
    height: 475,
    width: "100%",
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
    width: 295,
    alignItems: "center",
  },
  skip1: {
    textAlign: "left",
    width: 41,
    opacity: 0.5,
  },
  dotIcon: {
    width: 40,
    height: 8,
  },
  next1: {
    textAlign: "right",
    width: 44,
  },
  frame1: {
    width: 167,
    overflow: "hidden",
  },
  directional: {
    marginTop: 43,
    width: 295,
  },
  frame: {
    borderTopLeftRadius: Border.br_29xl,
    borderTopRightRadius: Border.br_29xl,
    backgroundColor: Color.colorPalegreen,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_21xl,
    paddingTop: Padding.p_21xl,
    paddingBottom: Padding.p_18xl,
    marginTop: -14,
  },
  onboarding1: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    paddingTop: Padding.p_44xl,
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding;
