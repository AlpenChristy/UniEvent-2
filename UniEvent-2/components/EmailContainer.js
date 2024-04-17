import React, { useMemo } from "react";
import { StyleSheet, View, TextInput,  Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const EmailContainer = ({ emailLabel, emailPlaceholderText, propTop }) => {
  const yourEmailStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.container, yourEmailStyle]}>
      <View style={styles.emailBackground} />
      <Image
        style={styles.icon}
        contentFit="cover"
        source={emailPlaceholderText}
      />
      {/* Changed from <Text> to <TextInput> */}
      <TextInput
        style={styles.input}
        placeholder={emailLabel}
        placeholderTextColor="gray"
        maxLength={50}
        // Additional props can be added as needed, e.g., onChangeText
      />
    </View>
  );
};
  const styles = StyleSheet.create({
    container: {
      width: 350,
      height: 60,
      borderRadius: 8,
      backgroundColor: "white",
      position: "absolute",
      top: 396,
      left: "50%",
      transform: [{ translateX: -175 }], // Adjust to center container
      flexDirection: "row", // To ensure icon stays beside the input
      alignItems: "center", // To vertically center items
    },
    emailBackground: {
      flex: 1, // To ensure it takes the remaining space
      borderRadius: 8,
      backgroundColor: "white",
    },
    input: {
      width: "90%", // Adjust width as needed
      paddingHorizontal: 10, // Adjust padding as needed
      fontSize: 18,
      color: "black",
    },
    icon: {
      width: 20, // Adjust icon size as needed
      height: 20, // Adjust icon size as needed
      marginLeft: 10, // To add space between icon and input
    },
  });
  
  
  
  
export default EmailContainer;
