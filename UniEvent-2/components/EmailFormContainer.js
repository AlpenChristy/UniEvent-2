import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import {TextInput} from 'react-native';


const EmailFormContainer = () => {
  return (
    <View style={styles.yourEmailParent}>
      <View style={styles.passwordLayout}>
        <View style={styles.emailBackground}>
          <Image
            style={styles.iconlylightmessageLayout}
            contentFit="cover"
            source={require("../assets/iconlylightmessage1.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={styles.emailBackground}>
          <Image
            style={styles.iconlylightlock}
            contentFit="cover"
            source={require("../assets/iconlylightlock1.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry={true}
          />
          <Image
            style={styles.vuesaxlineareyeIcon}
            contentFit="cover"
            source={require("../assets/vuesaxlineareye1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconlylightmessageLayout: {
    height: 22,
    width: 22,
    position: "absolute",
    left: 20,
    top: 19,
  },
  passwordLayout: {
    height: 60,
    alignSelf: "stretch",
  },
  emailBackground: {
    width: "100%",
    top: 0,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    position: "absolute",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 40,
  },
  input: {
    flex: 1,
    fontSize: FontSize.size_lg,
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    color: Color.colorBlack,
    height: "100%",
    paddingLeft: 15,
  },
  iconlylightlock: {
    height: 23,
    width: 22,
    position: "absolute",
    left: 20,
    top: 19,
  },
  vuesaxlineareyeIcon: {
    height: 22,
    width: 22,
    position: "absolute",
    right: 10,
    top: 19,
  },
  password: {
    marginTop: 20,
  },
  yourEmailParent: {
    marginTop: 35,
    alignSelf: "stretch",
  },
});






export default EmailFormContainer;
