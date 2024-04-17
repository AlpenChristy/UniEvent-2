import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Image } from "expo-image";

const VuesaxlineareyeSlash = ({ onClose }) => {
  return (
    <View style={[styles.vuesaxlineareyeSlash, styles.vuesaxlineareyeLayout]}>
      <Image
        style={[styles.vuesaxlineareyeSlashIcon, styles.vuesaxlineareyeLayout]}
        contentFit="cover"
        source={require("../assets/vuesaxlineareyeslash.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vuesaxlineareyeLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vuesaxlineareyeSlashIcon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  vuesaxlineareyeSlash: {
    width: 22,
    height: 22,
  },
});

export default VuesaxlineareyeSlash;
