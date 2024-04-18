import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import EmailContainer from "../components/EmailContainer";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";
import { supabase } from '../components/supabase'; // Import supabase

const Reset = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');

  const handleEmailChange = (text) => {
    setEmail(text); // Update the email state with the new input value
  };

  const handleResetPassword = async () => {
    try {
      await supabase.auth.resetPasswordForEmail(email);
      // Provide feedback to the user (e.g., display success message)
    } catch (error) {
      console.error('Error resetting password:', error.message);
      // Handle password reset error (e.g., display error message)
    }
  };

  return (
    <View style={styles.reset}>
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
      <Text style={[styles.createAccount, styles.reset1Position]}>Reset Password</Text>
      <Text style={[styles.reset1, styles.reset1Position]}>Reset  </Text>
      <EmailContainer
        emailLabel="Your Email"
        value={email}
        onChangeText={handleEmailChange}
        emailPlaceholderText={require("../assets/iconlylightmessage.png")}
        propTop={439}
      />
      <Pressable style={styles.arrow} onPress={handleResetPassword}>
        <Image
          style={styles.iconLayout}
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
      <Text style={[styles.pleaseEnterYour, styles.reset1Position]}>
        Please enter your email address to request a password reset
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  reset1Position: {
    textAlign: "left",
    left: 36,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  circleBottemIcon: {
    top: -70,
    left: -274,
    width: 459,
    height: 398,
    position: "absolute",
  },
  circleTopIcon: {
    top: -415,
    left: -151,
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
  },
  reset1: {
    top: 578,
    fontSize: FontSize.size_13xl,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
    left: 36,
  },
  arrow: {
    left: 289,
    top: 573,
    width: 50,
    height: 50,
    position: "absolute",
  },
  icon1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  pleaseEnterYour: {
    top: 310,
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    fontFamily: FontFamily.montserratRegular,
    width: 244,
    color: Color.colorMediumpurple_100,
    textAlign: "left",
    left: 36,
  },
  reset: {
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
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Reset;
