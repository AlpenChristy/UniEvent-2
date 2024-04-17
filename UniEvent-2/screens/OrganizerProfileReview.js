import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const OrganizerProfileReview = () => {
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
      <View style={styles.organizerProfileReview}>
        <View style={styles.frame}>
          <Image
            style={[styles.visualAssetsBackgroundS, styles.backPosition]}
            contentFit="cover"
            source={require("../assets/visual-assets--background--style2.png")}
          />
          <View style={[styles.frameParent, styles.frameFlexBox]}>
            <View style={[styles.frame1, styles.frameLayout1]}>
              <Text style={[styles.text, styles.textTypo]}>350</Text>
              <Text style={[styles.totalCalories, styles.followersTypo]}>
                Following
              </Text>
            </View>
            <View style={[styles.frame2, styles.frameLayout1]}>
              <Text style={[styles.followers, styles.copyPosition]}>
                Followers
              </Text>
              <Text style={[styles.copy, styles.copyPosition]}>346</Text>
              <View style={styles.frameChild} />
            </View>
          </View>
          <View style={styles.backParent}>
            <Pressable
              style={[styles.back, styles.backLayout]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back1.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.more, styles.backLayout]}
              onPress={openMoreIcon}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/more1.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.followButton, styles.buttonLayout]}>
            <View style={[styles.userPlusParent, styles.parentFlexBox]}>
              <Image
                style={[styles.userPlusIcon, styles.backLayout]}
                contentFit="cover"
                source={require("../assets/userplus.png")}
              />
              <Text style={[styles.d, styles.dTypo]}>Follow</Text>
            </View>
          </View>
          <Pressable
            style={[styles.massagesButton, styles.buttonLayout]}
            onPress={() =>
              navigation.navigate("DrawerRoot", { screen: "Messages" })
            }
          >
            <View style={[styles.messageCircleParent, styles.parentFlexBox]}>
              <Image
                style={[styles.userPlusIcon, styles.backLayout]}
                contentFit="cover"
                source={require("../assets/messagecircle.png")}
              />
              <Text style={[styles.d1, styles.d1Clr]}>Messages</Text>
            </View>
          </Pressable>
          <View style={[styles.frameGroup, styles.frameLayout]}>
            <View style={[styles.frame3, styles.frameFlexBox]}>
              <Pressable onPress={() => navigation.navigate("Frame")}>
                <Text style={[styles.about1, styles.about1Typo]}>About</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("OrganizerProfileEvent")}
              >
                <Text style={[styles.event1, styles.about1Typo]}>event</Text>
              </Pressable>
              <View style={[styles.reviewsParent, styles.reviewsLayout]}>
                <Text style={[styles.reviews, styles.reviewsLayout]}>
                  Reviews
                </Text>
                <Image
                  style={styles.frameItem}
                  contentFit="cover"
                  source={require("../assets/rectangle-4150.png")}
                />
              </View>
            </View>
            <View style={styles.reviewParent}>
              <View style={styles.reviewFlexBox}>
                <View style={styles.frame4}>
                  <Image
                    style={styles.frameInner}
                    contentFit="cover"
                    source={require("../assets/frame-34088.png")}
                  />
                  <View style={[styles.frameContainer, styles.frameLayout]}>
                    <View style={[styles.frame5, styles.frameFlexBox]}>
                      <Image
                        style={styles.frameIcon}
                        contentFit="cover"
                        source={require("../assets/frame18.png")}
                      />
                      <View style={styles.rocksVelkeinjenWrapper}>
                        <Text style={[styles.rocksVelkeinjen, styles.sattuClr]}>
                          Rocks Velkeinjen
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frame6}>
                      <Text style={[styles.feb, styles.febTypo]}>10 Feb</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cinemasIsTheUltimateExperiWrapper}>
                  <Text style={[styles.cinemasIsThe, styles.febTypo]}>
                    Cinemas is the ultimate experience to see new movies in Gold
                    Class or Vmax. Find a cinema near you.
                  </Text>
                </View>
              </View>
              <View style={styles.reviewFlexBox}>
                <View style={styles.frame4}>
                  <Image
                    style={styles.frameInner}
                    contentFit="cover"
                    source={require("../assets/frame-34088.png")}
                  />
                  <View style={[styles.frameContainer, styles.frameLayout]}>
                    <View style={[styles.frame5, styles.frameFlexBox]}>
                      <Image
                        style={styles.frameIcon}
                        contentFit="cover"
                        source={require("../assets/frame18.png")}
                      />
                      <View style={styles.rocksVelkeinjenWrapper}>
                        <Text style={[styles.rocksVelkeinjen, styles.sattuClr]}>
                          Rocks Velkeinjen
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frame6}>
                      <Text style={[styles.feb, styles.febTypo]}>10 Feb</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cinemasIsTheUltimateExperiWrapper}>
                  <Text style={[styles.cinemasIsThe, styles.febTypo]}>
                    Cinemas is the ultimate experience to see new movies in Gold
                    Class or Vmax. Find a cinema near you.
                  </Text>
                </View>
              </View>
              <View style={[styles.review2, styles.reviewFlexBox]}>
                <View style={styles.frame4}>
                  <Image
                    style={styles.frameInner}
                    contentFit="cover"
                    source={require("../assets/frame-34088.png")}
                  />
                  <View style={[styles.frameContainer, styles.frameLayout]}>
                    <View style={[styles.frame5, styles.frameFlexBox]}>
                      <Image
                        style={styles.frameIcon}
                        contentFit="cover"
                        source={require("../assets/frame18.png")}
                      />
                      <View style={styles.rocksVelkeinjenWrapper}>
                        <Text style={[styles.rocksVelkeinjen, styles.sattuClr]}>
                          Rocks Velkeinjen
                        </Text>
                      </View>
                    </View>
                    <View style={styles.frame6}>
                      <Text style={[styles.feb, styles.febTypo]}>10 Feb</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.cinemasIsTheUltimateExperiWrapper}>
                  <Text style={[styles.cinemasIsThe, styles.febTypo]}>
                    Cinemas is the ultimate experience to see new movies in Gold
                    Class or Vmax. Find a cinema near you.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-4159.png")}
          />
          <Text style={[styles.sattu, styles.sattuClr]}>sattu</Text>
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
  backPosition: {
    left: 0,
    top: 0,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  frameLayout1: {
    height: 54,
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorTypographyTitle,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  followersTypo: {
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    color: Color.colorTypographySubColor,
  },
  copyPosition: {
    top: "50%",
    position: "absolute",
  },
  backLayout: {
    width: 22,
    height: 22,
  },
  buttonLayout: {
    paddingVertical: 0,
    borderWidth: 1.5,
    borderRadius: Border.br_3xs,
    bottom: "51.75%",
    top: "41.91%",
    width: "41.47%",
    height: "6.34%",
    alignItems: "flex-end",
    borderColor: Color.colorForestgreen_100,
    borderStyle: "solid",
    position: "absolute",
    justifyContent: "center",
  },
  parentFlexBox: {
    flexDirection: "row",
    height: 25,
    alignItems: "center",
  },
  dTypo: {
    marginLeft: 10,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.size_base,
  },
  d1Clr: {
    color: Color.colorForestgreen_100,
    textAlign: "center",
  },
  frameLayout: {
    width: 327,
    position: "absolute",
  },
  about1Typo: {
    height: 15,
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: 0.2,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  reviewsLayout: {
    width: 78,
    alignItems: "center",
  },
  sattuClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  febTypo: {
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    fontFamily: FontFamily.montserratRegular,
  },
  reviewFlexBox: {
    alignItems: "flex-end",
    alignSelf: "stretch",
  },
  visualAssetsBackgroundS: {
    width: 375,
    position: "absolute",
    height: 812,
  },
  text: {
    textAlign: "left",
  },
  totalCalories: {
    marginTop: -3,
    textAlign: "center",
    color: Color.colorTypographySubColor,
  },
  frame1: {
    width: 69,
    alignItems: "center",
  },
  followers: {
    marginTop: 4,
    left: "24.72%",
    textAlign: "center",
    color: Color.colorTypographySubColor,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
  },
  copy: {
    marginTop: -27,
    left: "46.07%",
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    lineHeight: 34,
  },
  frameChild: {
    top: 15,
    borderRightWidth: 1,
    width: 1,
    height: 33,
    borderColor: Color.colorForestgreen_100,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  frame2: {
    width: 89,
  },
  frameParent: {
    marginLeft: -89.5,
    top: 265,
    left: "50%",
    width: 177,
    position: "absolute",
    alignItems: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  back: {
    zIndex: 0,
    left: 0,
    top: 0,
    position: "absolute",
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
    left: 305,
    zIndex: 1,
    top: 0,
    width: 22,
    position: "absolute",
  },
  backParent: {
    width: "87.2%",
    top: 27,
    right: "6.13%",
    left: "6.67%",
    padding: Padding.p_3xs,
    height: 22,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  userPlusIcon: {
    overflow: "hidden",
  },
  d: {
    color: Color.colorWhite,
    textAlign: "center",
  },
  userPlusParent: {
    width: 86,
    height: 25,
  },
  followButton: {
    right: "52.05%",
    left: "6.48%",
    backgroundColor: Color.colorLime,
    paddingHorizontal: Padding.p_14xl,
  },
  d1: {
    marginLeft: 10,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 25,
    fontSize: FontSize.size_base,
  },
  messageCircleParent: {
    width: 112,
    height: 25,
  },
  massagesButton: {
    right: "6.45%",
    left: "52.08%",
    paddingHorizontal: Padding.p_lgi,
  },
  about1: {
    width: 60,
    color: Color.colorTypographySubColor,
    textAlign: "left",
    alignItems: "center",
  },
  event1: {
    width: 56,
    textAlign: "center",
    color: Color.colorTypographySubColor,
    justifyContent: "center",
    alignItems: "center",
  },
  reviews: {
    height: 15,
    display: "flex",
    textTransform: "uppercase",
    letterSpacing: 0.2,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    color: Color.colorForestgreen_100,
    textAlign: "center",
    justifyContent: "center",
  },
  frameItem: {
    borderRadius: Border.br_xs,
    width: 72,
    height: 2,
    marginTop: 7,
  },
  reviewsParent: {
    paddingBottom: 0,
    height: 25,
  },
  frame3: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frameInner: {
    top: 32,
    left: 48,
    width: 99,
    height: 19,
    position: "absolute",
  },
  frameIcon: {
    width: 34,
    height: 40,
    overflow: "hidden",
  },
  rocksVelkeinjen: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    lineHeight: 34,
    alignSelf: "stretch",
  },
  rocksVelkeinjenWrapper: {
    width: 158,
    justifyContent: "center",
    alignItems: "center",
  },
  frame5: {
    width: 208,
    overflow: "hidden",
  },
  feb: {
    color: Color.colorDarkgray_100,
    textAlign: "right",
  },
  frame6: {
    width: 48,
    height: 30,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  frameContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    left: 0,
    top: 0,
  },
  frame4: {
    height: 51,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  cinemasIsThe: {
    color: Color.colorBlack,
    textAlign: "left",
    alignSelf: "stretch",
  },
  cinemasIsTheUltimateExperiWrapper: {
    marginTop: 7,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  review2: {
    paddingTop: 58,
  },
  reviewParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_mini,
    marginTop: 18,
    alignSelf: "stretch",
    alignItems: "center",
  },
  frameGroup: {
    top: 421,
    left: 24,
    height: 329,
    alignItems: "center",
  },
  rectangleIcon: {
    top: 109,
    left: 139,
    borderRadius: Border.br_11xl,
    width: 96,
    height: 96,
    position: "absolute",
  },
  sattu: {
    top: "27.34%",
    left: "42.93%",
    fontSize: FontSize.size_lgi,
    textTransform: "capitalize",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorBlack,
    position: "absolute",
  },
  frame: {
    height: 812,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  organizerProfileReview: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default OrganizerProfileReview;
