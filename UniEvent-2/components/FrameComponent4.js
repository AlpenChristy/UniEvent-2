import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { supabase } from '../components/supabase'; 

const FrameComponent4 = ({ style }) => {
  const navigation = useNavigation();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut(); // Sign out the user
      // Navigate to the sign-in page after successful sign-out
      navigation.navigate("SignInPage");
    } catch (error) {
      console.error('Error signing out:', error.message);
      // Handle sign-out error (e.g., display error message)
    }
  };

  return (
    <Pressable
      style={[styles.logInOutlineParent, style]}
      onPress={handleSignOut} // Call handleSignOut function on press
    >
      <Image
        style={styles.logInOutlineIcon}
        contentFit="cover"
        source={require("../assets/loginoutline.png")}
      />
      <Text style={styles.signOut}>Sign Out</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  logInOutlineIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  signOut: {
    fontSize: FontSize.size_base,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    textAlign: "left",
    marginLeft: 14,
  },
  logInOutlineParent: {
    alignSelf: "stretch",
    height: 25,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default FrameComponent4;
