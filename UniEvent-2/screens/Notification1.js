import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Notification1 = () => {
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
      <View style={styles.notification}>
        <View style={styles.frameParent}>
          <View style={styles.frame}>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={styles.helloAshfak}>Notification</Text>
          </View>
          <Pressable style={styles.back} onPress={openMoreIcon}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/more.png")}
            />
          </Pressable>
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.frame1}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/frame3.png")}
            />
            <View style={styles.frameContainer}>
              <View style={styles.sattuInvitedJoMaloneLondonWrapper}>
                <Text style={styles.sattuInvitedJoContainer}>
                  <Text style={styles.sattuInvitedJoContainer1}>
                    <Text style={styles.sattu}>
                      <Text style={styles.sattu1}>Sattu</Text>
                    </Text>
                    <Text style={styles.invitedJoMaloneLondonsMot}>
                      <Text style={styles.sattu}>{` `}</Text>
                      <Text
                        style={styles.invitedJoMalone}
                      >{`Invited Jo Malone London’s Mother’s `}</Text>
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frame2}>
                <Text style={styles.justNow}>Just now</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame3}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-62.png")}
            />
            <View style={styles.jayStartedFollowingYouParent}>
              <Text style={styles.jayStartedFollowingContainer}>
                <Text style={styles.sattu}>
                  <Text style={styles.sattu1}>Jay</Text>
                </Text>
                <Text style={styles.invitedJoMaloneLondonsMot}>
                  <Text style={styles.sattu}>{` `}</Text>
                  <Text style={styles.invitedJoMalone}>
                    Started following you
                  </Text>
                </Text>
              </Text>
              <Text style={styles.minAgo}>5 min ago</Text>
            </View>
          </View>
          <View style={styles.frame3}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-63.png")}
            />
            <View style={styles.frame5}>
              <View style={styles.alpenInvitedAVirtualEveninWrapper}>
                <Text style={styles.alpenInvitedAContainer}>
                  <Text style={styles.sattuInvitedJoContainer1}>
                    <Text style={styles.sattu}>
                      <Text style={styles.sattu1}>Alpen</Text>
                    </Text>
                    <Text style={styles.invitedJoMaloneLondonsMot}>
                      <Text style={styles.sattu}>{` `}</Text>
                      <Text style={styles.invitedJoMalone}>
                        Invited A virtual Evening of Smooth Jazz
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.minAgoWrapper}>
                <Text style={styles.justNow}>20 min ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame6}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-64.png")}
            />
            <View style={styles.frameView}>
              <View style={styles.frame7}>
                <Text style={styles.gurjyotLikesYourContainer}>
                  <Text style={styles.sattuInvitedJoContainer1}>
                    <Text style={styles.sattu}>
                      <Text style={styles.sattu1}>Gurjyot</Text>
                    </Text>
                    <Text style={styles.invitedJoMaloneLondonsMot}>
                      <Text style={styles.sattu}>{` `}</Text>
                      <Text style={styles.invitedJoMalone}>
                        Likes your events
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frame8}>
                <Text style={styles.justNow}>1 hr ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame3}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-65.png")}
            />
            <View style={styles.frame5}>
              <View style={styles.alpenInvitedAVirtualEveninWrapper}>
                <Text style={styles.gurjyotLikesYourContainer}>
                  <Text style={styles.sattuInvitedJoContainer1}>
                    <Text style={styles.sattu}>
                      <Text style={styles.sattu1}>Sneh</Text>
                    </Text>
                    <Text style={styles.invitedJoMaloneLondonsMot}>
                      <Text style={styles.sattu}></Text>
                      <Text style={styles.invitedJoMalone}>
                        Joined your Event Gala Music Festival
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.hrAgoWrapper}>
                <Text style={styles.justNow}>9 hr ago</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame3}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-66.png")}
            />
            <View style={styles.frame12}>
              <View style={styles.alpenInvitedAVirtualEveninWrapper}>
                <Text style={styles.gurjyotLikesYourContainer}>
                  <Text style={styles.sattuInvitedJoContainer1}>
                    <Text style={styles.manav}>{`Manav `}</Text>
                    <Text
                      style={styles.invitesYouInternational}
                    >{`Invites you International Kids Safe `}</Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.tue510PmWrapper}>
                <Text style={styles.justNow}>Tue , 5:10 pm</Text>
              </View>
            </View>
          </View>
          <View style={styles.frame3}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/ellipse-63.png")}
            />
            <View style={styles.frameParent1}>
              <View style={styles.alpenInvitedAVirtualEveninWrapper}>
                <Text style={styles.gurjyotLikesYourContainer}>
                  <Text style={styles.sattuInvitedJoContainer1}>
                    <Text style={styles.sattu}>
                      <Text style={styles.sattu1}>Alpen</Text>
                    </Text>
                    <Text style={styles.invitedJoMaloneLondonsMot}>
                      <Text style={styles.sattu}>{` `}</Text>
                      <Text style={styles.invitedJoMalone}>
                        Started following you
                      </Text>
                    </Text>
                  </Text>
                </Text>
              </View>
              <View style={styles.frame14}>
                <Text style={styles.justNow}>Wed, 3:30 pm</Text>
              </View>
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
  icon: {
    width: "100%",
    height: "100%",
  },
  back: {
    position: "relative",
    width: 22,
    height: 22,
  },
  helloAshfak: {
    position: "relative",
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorTypographyTitle,
    textAlign: "left",
    marginLeft: 11,
  },
  frame: {
    width: 179,
    height: 29,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
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
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameIcon: {
    position: "relative",
    width: 45,
    height: 46,
    overflow: "hidden",
  },
  sattu1: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
  },
  sattu: {
    color: Color.colorGray_400,
  },
  invitedJoMalone: {
    color: Color.colorTypographyParagraph,
  },
  invitedJoMaloneLondonsMot: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
  },
  sattuInvitedJoContainer1: {
    width: "100%",
  },
  sattuInvitedJoContainer: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 210,
  },
  sattuInvitedJoMaloneLondonWrapper: {
    width: 245,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  justNow: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTypographyParagraph,
    textAlign: "right",
  },
  frame2: {
    height: 22,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameContainer: {
    width: 282,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame1: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameChild: {
    position: "relative",
    width: 45,
    height: 45,
  },
  jayStartedFollowingContainer: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    textAlign: "left",
    width: 28,
    marginTop: 5,
  },
  minAgo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTypographyParagraph,
    textAlign: "right",
    width: 28,
    marginBottom: 13,
    marginLeft: 28,
  },
  jayStartedFollowingYouParent: {
    width: 268,
    height: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame3: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  alpenInvitedAContainer: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 192,
  },
  alpenInvitedAVirtualEveninWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  minAgoWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 8,
  },
  frame5: {
    height: 46,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gurjyotLikesYourContainer: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 180,
  },
  frame7: {
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frame8: {
    height: 45,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 24,
  },
  frameView: {
    width: 251,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginLeft: 15,
  },
  frame6: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },
  hrAgoWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 38,
  },
  manav: {
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorGray_400,
  },
  invitesYouInternational: {
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorTypographyParagraph,
  },
  tue510PmWrapper: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 11,
  },
  frame12: {
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frame14: {
    width: 82,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
  },
  frameParent1: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  frameGroup: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 57,
  },
  notification: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_10xl,
    paddingBottom: 290,
  },
});

export default Notification1;
