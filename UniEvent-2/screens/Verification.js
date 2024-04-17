import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Verification = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.verification}>
      <View style={styles.frame}>
        <View style={styles.otpInput}>
          <View style={styles.rectangle2Copy2Parent}>
            <Image
              style={styles.rectangle2Copy2}
              contentFit="cover"
              source={require("../assets/rectangle-2-copy-22.png")}
            />
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.rectangle2Copy2Group}>
            <Image
              style={styles.rectangle2Copy2}
              contentFit="cover"
              source={require("../assets/rectangle-2-copy-23.png")}
            />
            <Text style={styles.text1}>1</Text>
          </View>
          <Image
            style={styles.otpInputChild}
            contentFit="cover"
            source={require("../assets/group-33490.png")}
          />
          <Image
            style={styles.otpInputChild}
            contentFit="cover"
            source={require("../assets/group-33489.png")}
          />
        </View>
      </View>
      <View style={styles.frame1}>
        <View style={styles.frame2}>
          <View style={styles.frame3}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame11.png")}
            />
            <View style={styles.frame4}>
              <Text style={styles.createAccount}>{`Verify 
Here`}</Text>
            </View>
          </View>
        </View>
        <Text style={styles.weveSendYou}>
          We’ve send you the verification code on your Email ID
        </Text>
      </View>
      <View style={styles.frame5}>
        <View style={styles.frame6}>
          <Text style={styles.verify}>{`Verify `}</Text>
          <Pressable
            style={styles.arrow}
            onPress={() =>
              navigation.navigate("DrawerRoot", { screen: "Home" })
            }
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/arrow.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frame7}>
          <View style={styles.frame8}>
            <Image
              style={styles.circle1Top}
              contentFit="cover"
              source={require("../assets/circle-1-top.png")}
            />
            <View style={styles.frame9}>
              <View style={styles.signInParent}>
                <Text style={styles.signIn}>
                  <Text style={styles.resendCodeIn}>{`Resend Code in `}</Text>
                  <Text style={styles.text2}>
                    <Text style={styles.text3}>0:10</Text>
                    <Text style={styles.text4}>{` `}</Text>
                  </Text>
                </Text>
                <View style={styles.forgotBottem} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle2Copy2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  text: {
    position: "absolute",
    width: "34.54%",
    top: "14.55%",
    left: "32.73%",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle2Copy2Parent: {
    flex: 1,
    position: "relative",
    height: 55,
  },
  text1: {
    position: "absolute",
    width: "21.88%",
    top: "14.55%",
    left: "38.16%",
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangle2Copy2Group: {
    flex: 1,
    position: "relative",
    height: 55,
    marginLeft: 30,
  },
  otpInputChild: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 55,
    marginLeft: 30,
  },
  otpInput: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame: {
    position: "absolute",
    top: 439,
    left: 32,
    width: 311,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 700,
    width: "100%",
  },
  createAccount: {
    position: "relative",
    fontSize: FontSize.size_27xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
  },
  frame4: {
    width: 394,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    marginTop: -134,
  },
  frame3: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  frame2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  weveSendYou: {
    alignSelf: "start",
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    height: 50,
    marginLeft: 240,
    marginTop: 44,
  },
  frame1: {
    position: "absolute",
    top: -434,
    left: -204,
    width: 783,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  verify: {
    position: "relative",
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  arrow: {
    position: "relative",
    width: 50,
    height: 50,
    marginLeft: 168,
  },
  frame6: {
    alignSelf: "start",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 50,
    marginLeft: 271,
  },
  circle1Top: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 398,
  },
  resendCodeIn: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
  },
  text3: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  text4: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  text2: {
    color: Color.colorMediumpurple_100,
  },
  signIn: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_lg,
    textAlign: "center",
  },
  forgotBottem: {
    alignSelf: "stretch",
    position: "relative",
    backgroundColor: Color.colorRed,
    height: 9,
    marginTop: -8,
  },
  signInParent: {
    width: 193,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  frame9: {
    width: 188,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame8: {
    width: 583,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame7: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 103,
  },
  frame5: {
    position: "absolute",
    top: 573,
    left: -242,
    width: 859,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  verification: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Verification;
