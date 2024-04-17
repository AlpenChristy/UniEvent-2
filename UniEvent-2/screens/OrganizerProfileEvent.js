import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const OrganizerProfileEvent = () => {
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
      <View style={styles.organizerProfileEvent}>
        <View style={[styles.frame, styles.framePosition]}>
          <Image
            style={styles.framePosition}
            contentFit="cover"
            source={require("../assets/visual-assets--background--style2.png")}
          />
          <View style={[styles.backParent, styles.frameParentFlexBox]}>
            <Pressable
              style={styles.backLayout}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back1.png")}
              />
            </Pressable>
            <Pressable style={styles.backLayout} onPress={openMoreIcon}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/more1.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={[styles.frame1, styles.frameLayout1]}>
          <Image
            style={[styles.frameIcon, styles.aboutPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-4159.png")}
          />
          <Text style={styles.sattu}>sattu</Text>
          <View style={styles.frame2}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={[styles.frame3, styles.frameLayout]}>
                <Text style={styles.textTypo}>350</Text>
                <Text style={[styles.totalCalories, styles.followersTypo]}>
                  Following
                </Text>
              </View>
              <View style={[styles.frame4, styles.frameLayout]}>
                <Text style={[styles.followers, styles.copyPosition]}>
                  Followers
                </Text>
                <Text style={[styles.copy, styles.copyPosition]}>346</Text>
                <View style={styles.frameChild} />
              </View>
            </View>
          </View>
          <View style={[styles.frame5, styles.frameLayout1]}>
            <View style={styles.frameGroup}>
              <View style={styles.frame6}>
                <View style={styles.aboutParent}>
                  <Pressable
                    style={[styles.about, styles.aboutPosition]}
                    onPress={() => navigation.navigate("Frame")}
                  >
                    <Text style={[styles.about1, styles.eventTypo]}>About</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.reviews, styles.aboutPosition]}
                    onPress={() =>
                      navigation.navigate("OrganizerProfileReview")
                    }
                  >
                    <Text style={[styles.reviews1, styles.eventTypo]}>
                      Reviews
                    </Text>
                  </Pressable>
                  <View style={[styles.eventParent, styles.aboutPosition]}>
                    <Text style={[styles.event, styles.eventTypo]}>event</Text>
                    <Image
                      style={styles.frameItem}
                      contentFit="cover"
                      source={require("../assets/rectangle-41501.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.frame7}>
                <View style={styles.card1Parent}>
                  <View style={[styles.card1, styles.cardShadowBox]}>
                    <Image
                      style={styles.jazzIcon}
                      contentFit="cover"
                      source={require("../assets/group-333491.png")}
                    />
                    <View style={[styles.frame8, styles.frameParentFlexBox]}>
                      <View style={styles.frame9}>
                        <View style={styles.stMaySat200PmParent}>
                          <Text style={[styles.stMaySat, styles.eventTypo]}>
                            1st May- Sat -2:00 PM
                          </Text>
                          <Text style={styles.imGoingTo}>
                            A virtual evening of smooth jazz
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={styles.frameIcon1}
                        contentFit="cover"
                        source={require("../assets/frame19.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.card11, styles.cardShadowBox]}>
                    <Image
                      style={styles.jazzIcon}
                      contentFit="cover"
                      source={require("../assets/group-33349.png")}
                    />
                    <View style={[styles.frame8, styles.frameParentFlexBox]}>
                      <View style={styles.frame9}>
                        <View style={styles.stMaySat200PmParent}>
                          <Text style={[styles.stMaySat, styles.eventTypo]}>
                            1st May- Sat -2:00 PM
                          </Text>
                          <Text
                            style={styles.imGoingTo}
                          >{`Jo malone london’s mother’s day `}</Text>
                        </View>
                      </View>
                      <Image
                        style={styles.frameIcon1}
                        contentFit="cover"
                        source={require("../assets/frame20.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.card12, styles.cardShadowBox]}>
                    <Image
                      style={styles.jazzIcon}
                      contentFit="cover"
                      source={require("../assets/group-333492.png")}
                    />
                    <View style={[styles.frame8, styles.frameParentFlexBox]}>
                      <View style={styles.frame9}>
                        <View style={styles.stMaySat200PmParent}>
                          <Text style={[styles.stMaySat, styles.eventTypo]}>
                            1st May- Sat -2:00 PM
                          </Text>
                          <Text style={styles.imGoingTo}>
                            Women's leadership conference
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={styles.frameIcon1}
                        contentFit="cover"
                        source={require("../assets/frame19.png")}
                      />
                    </View>
                  </View>
                  <View style={[styles.card13, styles.cardShadowBox]}>
                    <Image
                      style={styles.jazzIcon}
                      contentFit="cover"
                      source={require("../assets/group-333493.png")}
                    />
                    <View style={styles.frame14}>
                      <Image
                        style={styles.iconbookmark}
                        contentFit="cover"
                        source={require("../assets/iconbookmark4.png")}
                      />
                      <View style={styles.frameView}>
                        <Text style={[styles.stMaySat, styles.eventTypo]}>
                          1st May- Sat -2:00 PM
                        </Text>
                        <Text style={styles.imGoingTo}>
                          International kids safe parents night out
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={[styles.card14, styles.cardShadowBox]}>
                    <Image
                      style={styles.jazzIcon}
                      contentFit="cover"
                      source={require("../assets/gala-music-festival1.png")}
                    />
                    <View style={[styles.frame8, styles.frameParentFlexBox]}>
                      <View style={styles.frame9}>
                        <View style={styles.stMaySat200PmParent}>
                          <Text style={[styles.stMaySat, styles.eventTypo]}>
                            1st May- Sat -2:00 PM
                          </Text>
                          <Text style={styles.imGoingTo}>
                            International gala music festival
                          </Text>
                        </View>
                      </View>
                      <Image
                        style={styles.frameIcon1}
                        contentFit="cover"
                        source={require("../assets/frame19.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.frame17}>
            <View style={styles.frame18}>
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
            </View>
            <View style={styles.frame19}>
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
                    style={[styles.userPlusIcon, styles.backLayout]}
                    contentFit="cover"
                    source={require("../assets/messagecircle.png")}
                  />
                  <Text style={[styles.d1, styles.dTypo]}>Messages</Text>
                </View>
              </Pressable>
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
  framePosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout1: {
    width: 335,
    position: "absolute",
    overflow: "hidden",
  },
  aboutPosition: {
    top: 0,
    position: "absolute",
  },
  frameLayout: {
    height: 54,
    overflow: "hidden",
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
  eventTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textTransform: "uppercase",
  },
  cardShadowBox: {
    padding: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(83, 89, 144, 0.07)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    left: "0%",
    right: "0%",
    height: "41.33%",
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
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
    height: 25,
    alignItems: "center",
    flexDirection: "row",
  },
  backLayout: {
    height: 22,
    width: 22,
  },
  dTypo: {
    marginLeft: 10,
    lineHeight: 25,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  icon: {
    height: "100%",
    width: "100%",
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
  backParent: {
    top: 29,
    left: 24,
    width: 327,
    position: "absolute",
  },
  frame: {
    overflow: "hidden",
  },
  frameIcon: {
    left: 119,
    borderRadius: Border.br_11xl,
    width: 96,
    height: 96,
    overflow: "hidden",
  },
  sattu: {
    top: "17.74%",
    left: "42.09%",
    fontSize: FontSize.size_lgi,
    textTransform: "capitalize",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  textTypo: {
    color: Color.colorTypographyTitle,
    lineHeight: 34,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  totalCalories: {
    marginTop: -3,
    textAlign: "center",
    color: Color.colorTypographySubColor,
  },
  frame3: {
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
    color: Color.colorTypographyTitle,
    lineHeight: 34,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
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
  frame4: {
    width: 89,
  },
  frameParent: {
    alignSelf: "stretch",
  },
  frame2: {
    top: 156,
    left: 78,
    width: 179,
    justifyContent: "center",
    position: "absolute",
    overflow: "hidden",
  },
  about1: {
    letterSpacing: 0.2,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
    color: Color.colorTypographySubColor,
    textAlign: "left",
  },
  about: {
    left: 0,
  },
  reviews1: {
    letterSpacing: 0.2,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.colorTypographySubColor,
  },
  reviews: {
    left: 251,
  },
  event: {
    color: Color.colorForestgreen_100,
    letterSpacing: 0.2,
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  frameItem: {
    borderRadius: Border.br_xs,
    height: 3,
    marginTop: 11,
    width: 58,
  },
  eventParent: {
    left: 128,
    justifyContent: "flex-end",
    width: 58,
    height: 34,
  },
  aboutParent: {
    height: 34,
    alignSelf: "stretch",
  },
  frame6: {
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  jazzIcon: {
    width: 79,
    height: 92,
    borderRadius: Border.br_3xs,
  },
  stMaySat: {
    fontSize: FontSize.size_xs,
    color: Color.colorForestgreen_100,
    textAlign: "left",
  },
  imGoingTo: {
    fontSize: FontSize.size_lg,
    marginTop: 3,
    lineHeight: 25,
    color: Color.colorTypographyTitle,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  stMaySat200PmParent: {
    alignSelf: "stretch",
  },
  frame9: {
    width: 193,
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
  },
  frameIcon1: {
    height: 76,
    width: 16,
    overflow: "hidden",
  },
  frame8: {
    width: 206,
  },
  card1: {
    top: "0%",
    bottom: "58.67%",
  },
  card11: {
    top: "47.23%",
    bottom: "11.44%",
  },
  card12: {
    top: "94.46%",
    bottom: "-35.79%",
  },
  iconbookmark: {
    height: 16,
    width: 16,
  },
  frameView: {
    marginTop: -8,
    alignSelf: "stretch",
  },
  frame14: {
    width: 206,
    alignItems: "flex-end",
  },
  card13: {
    top: "141.7%",
    bottom: "-83.03%",
  },
  card14: {
    top: "188.93%",
    bottom: "-130.26%",
  },
  card1Parent: {
    height: 271,
    alignSelf: "stretch",
  },
  frame7: {
    marginTop: 20,
    alignSelf: "stretch",
    justifyContent: "center",
  },
  frameGroup: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  frame5: {
    top: 312,
    alignItems: "flex-end",
    justifyContent: "center",
    left: 0,
  },
  userPlusIcon: {
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
  frame18: {
    alignSelf: "stretch",
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
  frame19: {
    marginTop: -50,
    alignItems: "flex-end",
    alignSelf: "stretch",
    justifyContent: "center",
    overflow: "hidden",
  },
  frame17: {
    top: 232,
    left: 5,
    width: 325,
    alignItems: "center",
    position: "absolute",
    overflow: "hidden",
  },
  frame1: {
    top: 109,
    left: 20,
    height: 637,
  },
  organizerProfileEvent: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default OrganizerProfileEvent;
