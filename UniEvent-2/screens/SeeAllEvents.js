import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const SeeAllEvents = () => {
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
      <View style={styles.seeAllEvents}>
        <View style={[styles.backParent, styles.frameFlexBox]}>
          <Pressable
            style={styles.backLayout}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/back.png")}
            />
          </Pressable>
          <View style={[styles.frame, styles.frameFlexBox]}>
            <Text style={styles.helloAshfak}>Events</Text>
            <View style={[styles.frame1, styles.frame1Layout]}>
              <Image
                style={[styles.searchIcon, styles.frame1Layout]}
                contentFit="cover"
                source={require("../assets/search1.png")}
              />
              <Pressable
                style={[styles.more, styles.backLayout]}
                onPress={openMoreIcon}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/more.png")}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={styles.frameParent}>
          <View style={styles.groupParent}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-33349.png")}
            />
            <View style={styles.frameGroup}>
              <View style={[styles.frame2, styles.frameLayout1]}>
                <View style={[styles.frame3, styles.frameFlexBox]}>
                  <Text style={[styles.wedApr28, styles.minTypo1]}>
                    Wed, Apr 28 • 5:30 PM
                  </Text>
                  <View
                    style={[styles.iconbookmark, styles.iconbookmarkLayout]}
                  />
                </View>
                <Text style={[styles.imGoingTo, styles.goingTypo1]}>
                  Navrachana Music Fest
                </Text>
              </View>
              <View style={styles.mapPinParent}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text style={[styles.min, styles.minTypo1]}>
                  Radius Gallery • Santa Cruz, CA
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupParentShadowBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-333491.png")}
            />
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <View style={styles.frameLayout1}>
                <View style={[styles.frame3, styles.frameFlexBox]}>
                  <Text style={[styles.wedApr28, styles.minTypo1]}>
                    Sat, May 1 • 2:00 PM
                  </Text>
                  <View
                    style={[styles.iconbookmark1, styles.iconbookmarkLayout]}
                  />
                </View>
                <Text style={[styles.imGoingTo1, styles.goingTypo1]}>
                  A Virtual Evening of Smooth Jazz
                </Text>
              </View>
              <View style={[styles.mapPinGroup, styles.mapParentFlexBox]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text style={[styles.min1, styles.minTypo]}>
                  Lot 13 • Oakland, CA
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.frameView, styles.groupParentShadowBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-333492.png")}
            />
            <View style={[styles.frameParent1, styles.frameLayout]}>
              <View style={[styles.frame2, styles.frameLayout1]}>
                <View style={[styles.frame3, styles.frameFlexBox]}>
                  <Text style={[styles.wedApr28, styles.minTypo1]}>
                    Sat, Apr 24 • 1:30 PM
                  </Text>
                  <View
                    style={[styles.iconbookmark2, styles.iconbookmarkLayout]}
                  />
                </View>
                <Text style={[styles.imGoingTo2, styles.goingTypo]}>
                  Women's Leadership Conference 2021
                </Text>
              </View>
              <View style={[styles.mapPinContainer, styles.mapParentFlexBox]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text style={[styles.min2, styles.minTypo1]}>
                  53 Bush St • San Francisco, CA
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupParent1, styles.groupParentShadowBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-333493.png")}
            />
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <View style={[styles.frame2, styles.frameLayout1]}>
                <View style={[styles.frame3, styles.frameFlexBox]}>
                  <Text style={[styles.wedApr28, styles.minTypo1]}>
                    Fri, Apr 23 • 6:00 PM
                  </Text>
                  <View
                    style={[styles.iconbookmark3, styles.iconbookmarkLayout]}
                  />
                </View>
                <Text style={[styles.imGoingTo2, styles.goingTypo]}>
                  International Kids Safe Parents Night Out
                </Text>
              </View>
              <View style={[styles.mapPinGroup, styles.mapParentFlexBox]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text style={[styles.min1, styles.minTypo]}>
                  Lot 13 • Oakland, CA
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupParentShadowBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-333494.png")}
            />
            <View style={[styles.frameContainer, styles.frameLayout]}>
              <View style={[styles.frame2, styles.frameLayout1]}>
                <View style={[styles.frame3, styles.frameFlexBox]}>
                  <Text style={[styles.wedApr28, styles.minTypo1]}>
                    Mon, Jun 21 • 10:00 PM
                  </Text>
                  <View
                    style={[styles.iconbookmark4, styles.iconbookmarkLayout]}
                  />
                </View>
                <Text
                  style={[styles.imGoingTo4, styles.goingTypo1]}
                >{`Collectivity Plays the Music of Jimi `}</Text>
              </View>
              <View style={[styles.mapPinParent2, styles.mapParentFlexBox]}>
                <Image
                  style={styles.mapPinIcon}
                  contentFit="cover"
                  source={require("../assets/mappin.png")}
                />
                <Text
                  style={[styles.min1, styles.minTypo]}
                >{`Longboard Margarita Bar `}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.groupParent3, styles.groupParentShadowBox]}>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-333495.png")}
            />
            <View style={styles.frameParent4}>
              <View style={[styles.frame2, styles.frameLayout1]}>
                <View style={[styles.frame3, styles.frameFlexBox]}>
                  <Text style={[styles.wedApr28, styles.minTypo1]}>
                    Sun, Apr 25 • 10:15 AM
                  </Text>
                  <View
                    style={[styles.iconbookmark5, styles.iconbookmarkLayout]}
                  />
                </View>
                <Text style={[styles.imGoingTo5, styles.goingTypo]}>
                  International Gala Music Festival
                </Text>
              </View>
              <View style={[styles.mapPinParent3, styles.mapParentFlexBox]}>
                <Image
                  style={[styles.mapPinIcon5, styles.iconbookmarkLayout]}
                  contentFit="cover"
                  source={require("../assets/mappin1.png")}
                />
                <Text
                  style={[styles.min5, styles.minTypo]}
                >{`36 Guild Street London, UK  `}</Text>
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
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  frame1Layout: {
    height: 24,
    overflow: "hidden",
  },
  backLayout: {
    height: 22,
    width: 22,
  },
  frameLayout1: {
    height: 58,
    width: 207,
    overflow: "hidden",
  },
  minTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  iconbookmarkLayout: {
    width: 16,
    height: 16,
  },
  goingTypo1: {
    marginTop: 5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  groupParentShadowBox: {
    marginTop: 12,
    paddingVertical: Padding.p_6xs,
    height: 106,
    shadowOpacity: 1,
    elevation: 35,
    shadowRadius: 35,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(87, 92, 138, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    flexDirection: "row",
    width: 327,
  },
  frameLayout: {
    height: 85,
    marginLeft: 18,
  },
  mapParentFlexBox: {
    marginTop: 11,
    alignItems: "center",
    flexDirection: "row",
  },
  minTypo: {
    marginLeft: 6,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  goingTypo: {
    width: 203,
    marginTop: 5,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorTypographyTitle,
  },
  searchIcon: {
    width: 24,
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
    marginLeft: 16,
  },
  frame1: {
    width: 62,
    marginLeft: 148,
    alignItems: "center",
    flexDirection: "row",
  },
  frame: {
    width: 294,
    height: 29,
    alignItems: "center",
    overflow: "hidden",
  },
  backParent: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 327,
  },
  frameChild: {
    width: 79,
    height: 92,
  },
  wedApr28: {
    color: Color.colorForestgreen_100,
  },
  iconbookmark: {
    marginLeft: 44,
    height: 16,
  },
  frame3: {
    height: 17,
    width: 207,
    alignItems: "center",
    overflow: "hidden",
  },
  imGoingTo: {
    width: 206,
  },
  frame2: {
    alignItems: "center",
  },
  mapPinIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  min: {
    marginLeft: 2,
    color: Color.colorTypographySubColor,
  },
  mapPinParent: {
    marginTop: 10,
    height: 16,
    width: 222,
    alignItems: "center",
    flexDirection: "row",
  },
  frameGroup: {
    height: 84,
    marginLeft: 18,
    width: 222,
  },
  groupParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_6xs,
    height: 106,
    shadowOpacity: 1,
    elevation: 35,
    shadowRadius: 35,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(87, 92, 138, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    flexDirection: "row",
    width: 327,
  },
  iconbookmark1: {
    marginLeft: 60,
    height: 16,
  },
  imGoingTo1: {
    width: 193,
  },
  min1: {
    color: Color.colorTypographySubColor,
  },
  mapPinGroup: {
    width: 153,
    height: 16,
  },
  frameContainer: {
    width: 207,
  },
  groupContainer: {
    paddingHorizontal: Padding.p_5xs,
    marginTop: 12,
  },
  iconbookmark2: {
    marginLeft: 56,
    height: 16,
  },
  imGoingTo2: {
    color: Color.colorTypographyTitle,
    width: 203,
  },
  min2: {
    marginLeft: 5,
    color: Color.colorTypographySubColor,
  },
  mapPinContainer: {
    width: 219,
    height: 16,
  },
  frameParent1: {
    width: 219,
  },
  frameView: {
    paddingHorizontal: Padding.p_10xs,
  },
  iconbookmark3: {
    marginLeft: 57,
    height: 16,
  },
  groupParent1: {
    paddingHorizontal: Padding.p_5xs,
    marginTop: 12,
  },
  iconbookmark4: {
    marginLeft: 41,
    height: 16,
  },
  imGoingTo4: {
    width: 207,
  },
  mapPinParent2: {
    width: 187,
    height: 16,
  },
  groupParent2: {
    paddingHorizontal: Padding.p_5xs,
    marginTop: 12,
  },
  iconbookmark5: {
    marginLeft: 48,
    height: 16,
  },
  imGoingTo5: {
    color: Color.colorBlack,
  },
  mapPinIcon5: {
    height: 16,
    overflow: "hidden",
  },
  min5: {
    color: "#989aa6",
  },
  mapPinParent3: {
    width: 200,
    height: 17,
  },
  frameParent4: {
    height: 86,
    marginLeft: 22,
    width: 207,
  },
  groupParent3: {
    paddingHorizontal: Padding.p_9xs,
  },
  frameParent: {
    height: 701,
    marginTop: 46,
    alignItems: "center",
    width: 327,
  },
  seeAllEvents: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    height: 812,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_10xl,
    paddingBottom: Padding.p_6xs,
    overflow: "hidden",
    width: "100%",
  },
});

export default SeeAllEvents;
