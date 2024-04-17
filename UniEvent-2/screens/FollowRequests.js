import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const FollowRequests = () => {
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
      <View style={[styles.followRequests, styles.frameGroupFlexBox]}>
        <View style={[styles.frameParent, styles.frameFlexBox]}>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Pressable style={styles.back} onPress={() => navigation.goBack()}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/back.png")}
              />
            </Pressable>
            <Text style={styles.helloAshfak}>Follow Requests</Text>
          </View>
          <Pressable style={styles.back} onPress={openMoreIcon}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/more.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
          <View style={styles.frame1}>
            <View style={styles.maskGroupParent}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require("../assets/mask-group.png")}
              />
              <View style={styles.frame2}>
                <Text style={styles.justNow}>Just Now</Text>
                <View style={styles.frame3}>
                  <View style={styles.rectangle2Layout}>
                    <Image
                      style={styles.rectangle2Copy2}
                      contentFit="cover"
                      source={require("../assets/rectangle-2-copy-2.png")}
                    />
                    <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                  </View>
                  <View
                    style={[
                      styles.rectangle2Copy2Group,
                      styles.rectangle2Layout,
                    ]}
                  >
                    <Image
                      style={styles.rectangle2Copy2}
                      contentFit="cover"
                      source={require("../assets/rectangle-2-copy-21.png")}
                    />
                    <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                  </View>
                </View>
              </View>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
            </View>
            <Text style={styles.mohammadreza}>David Silbia</Text>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={styles.mohammadreza1}>{`  Alpen `}</Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={styles.mohammadreza2}>{`  Sattu `}</Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group3.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={[styles.mohammadreza3, styles.mohammadrezaPosition]}>
                {" "}
                Sneh Patel
              </Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group4.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={[styles.mohammadreza3, styles.mohammadrezaPosition]}>
                {" "}
                Jay Prajapati
              </Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group5.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={[styles.mohammadreza5, styles.mohammadrezaPosition]}>
                Manav patel
              </Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={[styles.mohammadreza5, styles.mohammadrezaPosition]}>
                {" "}
                Deep Parmar
              </Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group6.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text
                style={[styles.mohammadreza5, styles.mohammadrezaPosition]}
              >{`Gurjyot Gill `}</Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.maskGroupShadowBox}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <View style={styles.frame4}>
              <Text
                style={[
                  styles.navrachnaUniversityVadodara1,
                  styles.navrachnaTypo,
                ]}
              >{`navrachna  university
vadodara`}</Text>
              <Text style={[styles.mohammadreza5, styles.mohammadrezaPosition]}>
                David Silbia
              </Text>
            </View>
            <View style={styles.frame2}>
              <Text style={styles.justNow}>Just Now</Text>
              <View style={styles.frame3}>
                <View style={styles.rectangle2Layout}>
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-2.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>Yes</Text>
                </View>
                <View
                  style={[styles.rectangle2Copy2Group, styles.rectangle2Layout]}
                >
                  <Image
                    style={styles.rectangle2Copy2}
                    contentFit="cover"
                    source={require("../assets/rectangle-2-copy-21.png")}
                  />
                  <Text style={[styles.yes, styles.yesFlexBox]}>No</Text>
                </View>
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
  frameGroupFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  yesFlexBox: {
    textAlign: "center",
    justifyContent: "center",
  },
  rectangle2Layout: {
    width: 37,
    height: 37,
  },
  navrachnaTypo: {
    textTransform: "uppercase",
    fontSize: FontSize.size_3xs,
    color: Color.colorForestgreen_100,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
    textAlign: "left",
  },
  mohammadrezaPosition: {
    fontSize: FontSize.size_mini,
    width: "75.89%",
    marginTop: -22,
    height: 18,
    top: "50%",
    left: "0%",
    display: "flex",
    position: "absolute",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    alignItems: "center",
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
    fontSize: FontSize.size_5xl,
    marginLeft: 11,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  frame: {
    height: 29,
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
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  maskGroupIcon: {
    left: 11,
    width: 52,
    height: 52,
    top: 8,
    position: "absolute",
  },
  justNow: {
    fontSize: FontSize.size_5xs,
    width: 40,
    height: 9,
    display: "flex",
    color: Color.colorForestgreen_100,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    alignItems: "center",
  },
  rectangle2Copy2: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    maxWidth: "100%",
    maxHeight: "100%",
    left: "0%",
    position: "absolute",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  yes: {
    height: "72.97%",
    width: "51.35%",
    top: "13.51%",
    left: "24.32%",
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    display: "flex",
    position: "absolute",
    alignItems: "center",
  },
  rectangle2Copy2Group: {
    marginLeft: 5,
  },
  frame3: {
    marginTop: 3,
    height: 37,
    width: 79,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  frame2: {
    left: 235,
    height: 49,
    alignItems: "flex-end",
    paddingRight: Padding.p_11xs,
    width: 79,
    top: 8,
    position: "absolute",
    overflow: "hidden",
  },
  navrachnaUniversityVadodara: {
    top: "48.53%",
    left: "22.32%",
  },
  maskGroupParent: {
    top: 0,
    left: 0,
    width: 327,
    shadowOpacity: 1,
    elevation: 35,
    shadowRadius: 35,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(87, 92, 138, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xl,
    position: "absolute",
    height: 68,
  },
  mohammadreza: {
    marginTop: -21,
    width: "32.72%",
    left: "20.49%",
    height: 18,
    fontSize: FontSize.size_sm,
    top: "50%",
    textAlign: "center",
    display: "flex",
    position: "absolute",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
  },
  frame1: {
    height: 68,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  navrachnaUniversityVadodara1: {
    top: "45.45%",
    left: "4.26%",
  },
  mohammadreza1: {
    width: "75.89%",
    marginTop: -22,
    height: 18,
    fontSize: FontSize.size_sm,
    top: "50%",
    left: "0%",
    display: "flex",
    position: "absolute",
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    alignItems: "center",
  },
  frame4: {
    top: 13,
    left: 67,
    width: 141,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  maskGroupShadowBox: {
    marginTop: 12,
    shadowOpacity: 1,
    elevation: 35,
    shadowRadius: 35,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(87, 92, 138, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_5xl,
    height: 68,
    alignSelf: "stretch",
  },
  mohammadreza2: {
    width: "80.85%",
    textTransform: "capitalize",
    height: 17,
    marginTop: -22,
    fontSize: FontSize.size_sm,
    top: "50%",
    left: "0%",
    display: "flex",
    position: "absolute",
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    alignItems: "center",
  },
  mohammadreza3: {
    textAlign: "left",
  },
  mohammadreza5: {
    textAlign: "center",
    justifyContent: "center",
  },
  frameGroup: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  followRequests: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    height: 805,
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: 0,
    overflow: "hidden",
    width: "100%",
    alignItems: "center",
  },
});

export default FollowRequests;
