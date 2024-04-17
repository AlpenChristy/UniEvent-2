import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EmailFormContainer from "../components/EmailFormContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SignInPage = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.signInPage}
      resizeMode="cover"
      source={require("../assets/signinpage.png")}
    >
      <View style={styles.vectorTopParent}>
        <Pressable style={styles.vectorTop} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector-top1.png")}
          />
        </Pressable>
        <Text style={styles.welcomeBack}>
          <Text style={styles.welcome}>Welcome Back</Text>
        </Text>
      </View>
      <EmailFormContainer />
      <View style={[styles.signInParent, styles.parentFlexBox]}>
        <Text style={[styles.signIn, styles.signClr]}>Sign in</Text>
        <Pressable
          style={styles.arrow}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/arrow1.png")}
          />
        </Pressable>
      </View>
      <Text style={[styles.or, styles.orTypo]}>OR</Text>
      <View style={[styles.logWithOtherApps, styles.parentFlexBox]}>
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/google1.png")}
        />
        <Image
          style={[styles.facebookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/facebook1.png")}
        />
        <Image
          style={[styles.facebookIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/twitter1.png")}
        />
      </View>
      <View style={[styles.frameParent, styles.parentFlexBox]}>
        <Pressable
          style={[styles.signUpParent, styles.parentFlexBox2]}
          onPress={() => navigation.navigate("SignUpPage")}
        >
          <Text style={[styles.signUp, styles.orTypo]}>Sign Up</Text>
          <View style={styles.signUpBottem} />
        </Pressable>
        <Pressable
          style={[styles.forgotPasswordParent, styles.parentFlexBox2]}
          onPress={() => navigation.navigate("Reset")}
        >
          <Text style={[styles.signUp, styles.orTypo]}>Forgot Password</Text>
          <View style={styles.forgotBottem} />
        </Pressable>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    marginTop: 35,
  },
  signClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  orTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    maxWidth: "100%",
    height: 50,
    overflow: "hidden",
    flex: 1,
  },
  parentFlexBox2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vectorTop: {
    width: 10,
    height: 20,
  },
  welcome: {
    marginBottom: 5,
  },
  welcomeBack: {
    fontSize: FontSize.size_27xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumpurple_100,
    marginTop: 69,
    textAlign: "left",
    alignSelf: "stretch",
  },
  vectorTopParent: {
    width: 229,
  },
  signIn: {
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  arrow: {
    width: 50,
    height: 50,
  },
  signInParent: {
    justifyContent: "space-between",
    marginTop: 35,
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  or: {
    fontSize: FontSize.size_base,
    lineHeight: 34,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    marginTop: 35,
  },
  facebookIcon: {
    marginLeft: 21,
  },
  logWithOtherApps: {
    width: 192,
    marginTop: 35,
    alignItems: "center",
    justifyContent: "center",
  },
  signUp: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
  },
  signUpBottem: {
    backgroundColor: Color.colorDodgerblue,
    width: 78,
    height: 9,
  },
  signUpParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  forgotBottem: {
    backgroundColor: Color.colorRed,
    width: 159,
    height: 9,
  },
  forgotPasswordParent: {
    marginLeft: 66,
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent: {
    marginTop: 35,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  signInPage: {
    borderRadius: Border.br_21xl,
    height: 812,
    paddingHorizontal: 36,
    paddingVertical: Padding.p_21xl,
    justifyContent: "center",
    overflow: "hidden",
    width: 375,
    flex: 1,
  },
});

export default SignInPage;
