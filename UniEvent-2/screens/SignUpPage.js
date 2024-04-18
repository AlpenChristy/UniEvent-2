import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EmailContainer from "../components/EmailContainer";
import { supabase } from '../components/supabase';
// import VuesaxlineareyeSlash from "../components/VuesaxlineareyeSlash";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignUpPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const [vuesaxlineareyeIconVisible, setVuesaxlineareyeIconVisible] =
  //   useState(false);
  const handleEmailChange = (text) => {
    setEmail(text); // Update the email state with the new input value
  };
  const handlePasswordChange = (text) => {
    setPassword(text); // Update the email state with the new input value
  };

  const signUpWithEmail = async () => {
    setLoading(true);

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });
  
      if (error) {
        throw new Error(error.message);
      }
  
      console.log('User signed up successfully:', user);
      navigation.navigate("DrawerRoot", { screen: "SignInPage" });
    } catch (error) {
      console.error('Error signing up:', error.message);
      // Handle error (e.g., display error message)
    } finally {
      setLoading(false);
    }
  };

  // const openVuesaxlineareyeIcon = useCallback(() => {
  //   setVuesaxlineareyeIconVisible(true);
  // }, []);

  // const closeVuesaxlineareyeIcon = useCallback(() => {
  //   setVuesaxlineareyeIconVisible(false);
  // }, []);

  return (
    <>
      <View style={styles.signUpPage}>
        <Image
          style={styles.circleBottemIcon}
          contentFit="cover"
          source={require("../assets/circle-bottem.png")}
        />
        <Image
          style={styles.circleTopIcon}
          contentFit="cover"
          source={require("../assets/circle-top.png")}
        />
        <Text style={styles.createAccount}>Create Account</Text>
        <Text style={[styles.signUp, styles.signClr]}>Sign Up</Text>
        <View style={styles.signInBottem} />
        <Pressable
          style={styles.signIn}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "SignInPage" })
          }
        >
          <Text style={[styles.signIn1, styles.orTypo]}>Sign In</Text>
        </Pressable>
        <EmailContainer
          emailLabel="Your Email"
          value={email}
          emailPlaceholderText={require("../assets/iconlylightmessage.png")}
          onChangeText={handleEmailChange}
        />
        <EmailContainer
          emailLabel="Password"
          value={password}
          emailPlaceholderText={require("../assets/iconlylightlock.png")}
          secureTextEntry={true}
          isPassword={true}
          onChangeText={handlePasswordChange}
          propTop={440}
        />
        <Pressable
          style={styles.arrow}
          onPress={signUpWithEmail}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/arrow.png")}
          />
        </Pressable>
        <Pressable style={styles.vectorTop} onPress={() => navigation.goBack()}>
          <Image
            style={[styles.icon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector-top.png")}
          />
        </Pressable>
        {/* <View style={styles.logWithOtherApps}>
          
          <Image
            style={[styles.googleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/google.png")}
          />
          <Image
            style={[styles.facebookIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/facebook.png")}
          />
          <Image
            style={[styles.facebookIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/twitter.png")}
          />
        </View> */}
        {/* <Text style={[styles.or, styles.orTypo]}>OR</Text> */}
        {/* <Pressable
          style={styles.vuesaxlineareye}
          onPress={openVuesaxlineareyeIcon}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/vuesaxlineareye.png")}
          />
        </Pressable> */}
      </View>

      {/* <Modal
        animationType="fade"
        transparent
        visible={vuesaxlineareyeIconVisible}
      >
        <View style={styles.vuesaxlineareyeIconOverlay}>
          <Pressable
            style={styles.vuesaxlineareyeIconBg}
            onPress={closeVuesaxlineareyeIcon}
          />
          <VuesaxlineareyeSlash onClose={closeVuesaxlineareyeIcon} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
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
    overflow: "hidden",
  },
  circleBottemIcon: {
    left: 154,
    width: 459,
    height: 398,
    top: 579,
    position: "absolute",
  },
  circleTopIcon: {
    top: -414,
    left: -284,
    width: 700,
    height: 700,
    position: "absolute",
  },
  createAccount: {
    top: 132,
    fontSize: FontSize.size_27xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    left: 36,
    position: "absolute",
  },
  signUp: {
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    left: 36,
    color: Color.colorBlack,
    top: 579,
    position: "absolute",
  },
  signInBottem: {
    top: 754,
    left: 261,
    backgroundColor: Color.colorDodgerblue,
    width: 78,
    height: 9,
    position: "absolute",
  },
  signIn1: {
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    textAlign: "left",
  },
  signIn: {
    left: 270,
    top: 740,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  arrow: {
    left: 289,
    top: 573,
    width: 50,
    height: 50,
    position: "absolute",
  },
  icon1: {
    maxHeight: "100%",
    height: "100%",
    width: "100%",
  },
  vectorTop: {
    left: "9.6%",
    top: "4.93%",
    right: "87.73%",
    bottom: "92.61%",
    width: "2.67%",
    height: "2.46%",
    position: "absolute",
  },
  googleIcon: {
    height: 50,
    flex: 1,
    maxWidth: "100%",
  },
  facebookIcon: {
    marginLeft: 21,
    height: 50,
    flex: 1,
    maxWidth: "100%",
  },
  logWithOtherApps: {
    top: 654,
    left: 92,
    width: 192,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  or: {
    top: 613,
    left: 174,
    fontSize: FontSize.size_base,
    lineHeight: 34,
    color: Color.colorDarkgray_200,
    textAlign: "center",
    position: "absolute",
  },
  vuesaxlineareyeIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  vuesaxlineareyeIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  vuesaxlineareye: {
    left: 302,
    top: 495,
    width: 22,
    height: 22,
    position: "absolute",
  },
  signUpPage: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 75,
    elevation: 75,
    shadowOpacity: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default SignUpPage;
