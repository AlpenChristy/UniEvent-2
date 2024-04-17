import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Frame = () => {
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
      <View style={styles.frame}>
        <View style={styles.frameParent}>
          <View style={[styles.frame1, styles.frame1Position]}>
            <Image
              style={styles.frame1Position}
              contentFit="cover"
              source={require("../assets/visual-assets--background--style2.png")}
            />
            <View style={[styles.frameGroup, styles.framePosition]}>
              <View style={styles.frame2}>
                <View style={styles.aboutParent}>
                  <Text style={styles.about}>About</Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/rectangle-41501.png")}
                  />
                </View>
                <Pressable
                  style={[styles.reviews, styles.eventPosition]}
                  onPress={() => navigation.navigate("OrganizerProfileReview")}
                >
                  <Text style={styles.reviews1}>Reviews</Text>
                </Pressable>
                <Pressable
                  style={[styles.event, styles.eventPosition]}
                  onPress={() => navigation.navigate("OrganizerProfileEvent")}
                >
                  <Text style={styles.reviews1}>event</Text>
                </Pressable>
              </View>
              <Text style={styles.theDevelopmentOfContainer}>
                <Text
                  style={styles.enjoyYourFavorite}
                >{`Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. `}</Text>
                <Text style={styles.readMore}>Read More</Text>
              </Text>
            </View>
          </View>
          <View style={[styles.frame3, styles.framePosition]}>
            <View style={styles.helloAshfakParent}>
              <Text style={styles.helloAshfak}>Edit Profile</Text>
              <Pressable
                style={[styles.back, styles.backPosition]}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/back1.png")}
                />
              </Pressable>
              <Pressable
                style={[styles.more, styles.backPosition]}
                onPress={openMoreIcon}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/more1.png")}
                />
              </Pressable>
            </View>
            <View style={styles.frame4}>
              <View style={styles.frame5}>
                <View style={[styles.followButton, styles.buttonLayout]}>
                  <View style={[styles.userPlusParent, styles.parentFlexBox]}>
                    <Image
                      style={styles.userPlusIcon}
                      contentFit="cover"
                      source={require("../assets/userplus.png")}
                    />
                    <Text style={[styles.d, styles.dTypo]}>Follow</Text>
                  </View>
                </View>
              </View>
              <View style={styles.frame6}>
                <Pressable
                  style={[styles.massagesButton, styles.buttonLayout]}
                  onPress={() =>
                    navigation.navigate("DrawerRoot", { screen: "Messages" })
                  }
                >
                  <View
                    style={[styles.messageCircleParent, styles.parentFlexBox]}
                  >
                    <Image
                      style={styles.userPlusIcon}
                      contentFit="cover"
                      source={require("../assets/messagecircle.png")}
                    />
                    <Text style={[styles.d1, styles.dTypo]}>Messages</Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.frame7}>
                <View style={styles.totalCaloriesParent}>
                  <Text style={[styles.totalCalories, styles.followersTypo]}>
                    Following
                  </Text>
                  <Text style={[styles.text, styles.textTypo]}>350</Text>
                  <Text style={[styles.followers, styles.followersTypo]}>
                    Followers
                  </Text>
                  <Text style={[styles.copy, styles.textTypo]}>346</Text>
                  <View style={styles.frameItem} />
                </View>
              </View>
              <Text style={styles.sattu}>sattu</Text>
              <Image
                style={[styles.frameIcon, styles.eventPosition]}
                contentFit="cover"
                source={require("../assets/rectangle-4159.png")}
              />
            </View>
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
  frame1Position: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  framePosition: {
    left: 24,
    position: "absolute",
  },
  eventPosition: {
    top: 0,
    position: "absolute",
  },
  backPosition: {
    width: "6.73%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  buttonLayout: {
    paddingVertical: 0,
    height: 52,
    width: 156,
    borderWidth: 1.5,
    borderRadius: Border.br_3xs,
    alignItems: "flex-end",
    borderColor: Color.colorForestgreen_100,
    borderStyle: "solid",
    justifyContent: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    height: 25,
    alignItems: "center",
  },
  dTypo: {
    marginLeft: 10,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  followersTypo: {
    display: "flex",
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    top: "50%",
    color: Color.colorTypographySubColor,
    textAlign: "center",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    lineHeight: 34,
    top: "50%",
    color: Color.colorTypographyTitle,
    textAlign: "left",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  about: {
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
    color: Color.colorForestgreen_100,
  },
  frameChild: {
    borderRadius: Border.br_xs,
    width: 58,
    height: 3,
    marginTop: 11,
  },
  aboutParent: {
    width: 60,
    height: 34,
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  reviews1: {
    color: Color.colorTypographySubColor,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.2,
    fontSize: FontSize.size_base,
  },
  reviews: {
    left: 253,
  },
  event: {
    left: 130,
  },
  frame2: {
    height: 34,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  enjoyYourFavorite: {
    color: Color.colorTypographyParagraph,
  },
  readMore: {
    color: Color.colorForestgreen_100,
  },
  theDevelopmentOfContainer: {
    marginTop: 20,
    textAlign: "left",
    lineHeight: 25,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
  },
  frameGroup: {
    top: 421,
    width: 331,
    justifyContent: "flex-end",
  },
  frame1: {
    overflow: "hidden",
  },
  helloAshfak: {
    top: "18.18%",
    left: "10.09%",
    fontSize: FontSize.size_5xl,
    display: "none",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  back: {
    right: "93.27%",
    height: "100%",
    left: "0%",
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
    left: "93.27%",
    right: "0%",
    height: "100%",
  },
  helloAshfakParent: {
    height: 22,
    alignSelf: "stretch",
  },
  userPlusIcon: {
    width: 22,
    height: 22,
    overflow: "hidden",
  },
  d: {
    color: Color.colorWhite,
  },
  userPlusParent: {
    width: 86,
  },
  followButton: {
    backgroundColor: Color.colorLime,
    paddingHorizontal: Padding.p_14xl,
  },
  frame5: {
    width: 325,
    top: 232,
    left: 0,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  d1: {
    color: Color.colorForestgreen_100,
  },
  messageCircleParent: {
    width: 112,
  },
  massagesButton: {
    paddingHorizontal: Padding.p_lgi,
  },
  frame6: {
    alignItems: "flex-end",
    width: 325,
    top: 232,
    left: 0,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  totalCalories: {
    marginTop: 4.5,
    width: "38.99%",
    left: "0%",
  },
  text: {
    marginTop: -26.5,
    width: "16.37%",
    left: "11.28%",
  },
  followers: {
    marginTop: 3.5,
    width: "37.88%",
    left: "62.12%",
  },
  copy: {
    marginTop: -27.5,
    width: "16.93%",
    left: "72.91%",
  },
  frameItem: {
    top: 15,
    left: 88,
    borderRightWidth: 1,
    width: 1,
    height: 33,
    borderColor: Color.colorForestgreen_100,
    borderStyle: "solid",
    position: "absolute",
  },
  totalCaloriesParent: {
    height: 55,
    alignSelf: "stretch",
  },
  frame7: {
    top: 156,
    left: 73,
    width: 179,
    position: "absolute",
    justifyContent: "center",
    overflow: "hidden",
  },
  sattu: {
    width: "16.3%",
    top: "40.07%",
    left: "41.83%",
    fontSize: FontSize.size_lgi,
    textTransform: "capitalize",
    color: Color.colorBlack,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  frameIcon: {
    left: 114,
    borderRadius: Border.br_11xl,
    width: 96,
    height: 96,
    overflow: "hidden",
  },
  frame4: {
    height: 282,
    marginTop: 58,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame3: {
    top: 29,
    width: 327,
    alignItems: "center",
    left: 24,
  },
  frameParent: {
    height: 812,
    alignSelf: "stretch",
  },
  frame: {
    borderRadius: Border.br_21xl,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
