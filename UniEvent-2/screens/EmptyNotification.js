import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const EmptyNotification = () => {
  const navigation = useNavigation();
  const [moreIconVisible, setMoreIconVisible] = useState(false);

  const openMoreIcon = useCallback(() => {
    setMoreIconVisible(true);
  }, []);

  const closeMoreIcon = useCallback(() => {
    setMoreIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.emptyNotification}>
        <View style={styles.backParent}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back1.png")}
            />
          </Pressable>
          <Pressable style={styles.more} onPress={openMoreIcon}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/more1.png")}
            />
          </Pressable>
          <Text style={styles.helloAshfak}>Notification</Text>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.frame}>
            <View style={styles.artwork}>
              <Image
                style={styles.frameIcon}
                contentFit="cover"
                source={require("../assets/frame.png")}
              />
              <View style={styles.frame1}>
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame1.png")}
                />
                <View style={styles.frame2}>
                  <View style={styles.frame3}>
                    <Text style={styles.text}>0</Text>
                  </View>
                  <Image
                    style={styles.frameIcon2}
                    contentFit="cover"
                    source={require("../assets/frame2.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frame4}>
            <Text style={styles.title}>No Notifications!</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={moreIconVisible}>
        <View style={styles.moreIconOverlay}>
          <Pressable style={styles.moreIconBg} onPress={closeMoreIcon} />
          <Menu onClose={closeMoreIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: "100%",
    height: "100%",
  },
  back: {
    position: "relative",
    width: 22,
    height: 22,
    zIndex: 0,
  },
  moreIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  moreIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  more: {
    position: "relative",
    width: 22,
    height: 22,
    zIndex: 1,
  },
  helloAshfak: {
    position: "absolute",
    top: -3,
    left: 37,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorTypographyTitle,
    textAlign: "left",
    zIndex: 2,
  },
  backParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    position: "relative",
  },
  frameIcon: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 38,
  },
  frameIcon1: {
    flex: 1,
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 169,
  },
  text: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "center",
  },
  frame3: {
    width: 12,
    height: 151,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameIcon2: {
    position: "relative",
    width: 35,
    height: 159,
    marginTop: -151,
  },
  frame2: {
    height: 159,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    marginLeft: -184,
  },
  frame1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingRight: 3,
    marginLeft: -140,
  },
  artwork: {
    alignSelf: "stretch",
    height: 169,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame: {
    width: 169,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    alignSelf: "flex-start",
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    height: 34,
    marginLeft: 90,
  },
  description: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_base,
    lineHeight: 28,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkslategray_100,
    textAlign: "center",
    opacity: 0.7,
    marginTop: 7,
  },
  frame4: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 40,
  },
  frameParent: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 191,
  },
  emptyNotification: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingTop: Padding.p_10xl,
    paddingRight: Padding.p_lgi,
    paddingBottom: 257,
  },
});

export default EmptyNotification;
