import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const EmptyEvents = () => {
  const [moreIconVisible, setMoreIconVisible] = useState(false);
  const navigation = useNavigation();

  const openMoreIcon = useCallback(() => {
    setMoreIconVisible(true);
  }, []);

  const closeMoreIcon = useCallback(() => {
    setMoreIconVisible(false);
  }, []);

  return (
    <>
      <View style={styles.emptyEvents}>
        <View style={[styles.frameParent, styles.frameParentFlexBox]}>
          <View style={[styles.frame, styles.frameParentFlexBox]}>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={[styles.helloAshfak, styles.titleTypo]}>
              My Events
            </Text>
          </View>
          <Pressable style={styles.back} onPress={openMoreIcon}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/more.png")}
            />
          </Pressable>
        </View>
        <LinearGradient
          style={[styles.frame1, styles.frame1FlexBox]}
          locations={[0, 0.59, 0.59]}
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(186, 253, 155, 0.5)",
            "rgba(186, 253, 155, 0.5)",
          ]}
        >
          <Pressable
            style={[styles.continueParent, styles.frameParentFlexBox]}
            onPress={() => navigation.navigate("CreateEvent")}
          >
            <Text
              style={[styles.continue, styles.continueTypo]}
            >{`Create Events `}</Text>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-41.png")}
            />
          </Pressable>
        </LinearGradient>
        <View style={styles.frameGroup}>
          <Image
            style={styles.frameIcon}
            contentFit="cover"
            source={require("../assets/frame17.png")}
          />
          <View style={[styles.titleParent, styles.frame1FlexBox]}>
            <Text style={[styles.title, styles.titleTypo]}>No Event</Text>
            <Text
              style={[styles.description, styles.continueTypo]}
            >{`Lorem ipsum dolor sit amet, consectetur `}</Text>
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
  frameParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleTypo: {
    color: Color.colorTypographyTitle,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  frame1FlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  continueTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    width: 22,
    height: 22,
  },
  helloAshfak: {
    textAlign: "left",
    marginLeft: 11,
  },
  frame: {
    height: 29,
    width: 214,
    alignItems: "center",
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
  frameParent: {
    top: 29,
    left: 24,
    width: 327,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
  },
  continue: {
    letterSpacing: 1,
    textTransform: "uppercase",
    color: Color.colorWhite,
    width: 162,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  frameChild: {
    width: 30,
    height: 30,
  },
  continueParent: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLime,
    width: 271,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
  },
  frame1: {
    top: 634,
    left: 0,
    width: 375,
    height: 181,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_16xl,
    backgroundColor: "transparent",
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon: {
    height: 213,
    width: 214,
    overflow: "hidden",
  },
  title: {
    alignSelf: "stretch",
    textAlign: "center",
  },
  description: {
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorTypographySubColor,
    marginTop: 13,
    alignSelf: "stretch",
    textAlign: "center",
  },
  titleParent: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 244,
    left: 54,
    width: 268,
    alignItems: "center",
    position: "absolute",
  },
  emptyEvents: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    height: 813,
    overflow: "hidden",
    width: "100%",
  },
});

export default EmptyEvents;
