
import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EmailContainer from "../components/EmailContainer";
import { Color, FontFamily, FontSize, Border, Padding, Margin } from "../GlobalStyles";
import { supabase } from '../components/supabase';

const SignInPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (text) => {
    setEmail(text); // Update the email state with the new input value
  };
  const handlePasswordChange = (text) => {
    setPassword(text); // Update the email state with the new input value
  };
  const handleSignIn = async () => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Navigate to the home screen after successful sign-in
      navigation.navigate("Home");
    } catch (error) {
      console.error('Error signing in:', error.message);
      // Handle sign-in error (e.g., display error message)
    }
  };

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
      <View style={styles.EmailContainer}>
      <EmailContainer
          emailLabel="Your Email"
          value={email}
          emailPlaceholderText={require("../assets/iconlylightmessage.png")}
          onChangeText={handleEmailChange}
          propTop={110}
        />
        <EmailContainer
          emailLabel="Password"
          value={password}
          emailPlaceholderText={require("../assets/iconlylightlock.png")}
          secureTextEntry={true}
          isPassword={true}
          onChangeText={handlePasswordChange}
          propTop={210}
        />
        </View>
      <View style={[styles.signInParent, styles.parentFlexBox]}>
        <Text style={[styles.signIn, styles.signClr]}>Sign in</Text>
        <Pressable
          style={styles.arrow}
          onPress={handleSignIn}
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
  EmailContainer: {
    zIndex: 2,
    right: 35,
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
    marginTop:100,
    fontSize: FontSize.size_27xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumpurple_100,
    
    textAlign: "left",
    alignSelf: "stretch",
  },
  vectorTopParent: {
    width: 229,
  },
  signIn: {
    marginTop:250,
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },

  arrow: {
    marginTop:250,
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
    
  },
  facebookIcon: {
    marginLeft: 21,
  },
  logWithOtherApps: {
    width: 192,
    marginLeft: 60,
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
    marginBottom:10,
  },
  signUpParent: {
    alignItems: "center",
    justifyContent: "center",
  },
  forgotBottem: {
    backgroundColor: Color.colorRed,
    width: 159,
    height: 9,
    marginBottom:10,
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
