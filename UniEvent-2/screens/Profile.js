import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={[styles.backParent, styles.frame1FlexBox]}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={styles.helloAshfak}>{`Profile `}</Text>
      </View>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameIcon}
              contentFit="cover"
              source={require("../assets/rectangle-4159.png")}
            />
            <Text style={[styles.sattu, styles.sattuTypo]}>sattu</Text>
          </View>
          <View style={styles.frameViewFlexBox}>
            <View style={styles.frame}>
              <Text style={[styles.text, styles.dTypo]}>350</Text>
              <Text style={styles.totalCalories}>Following</Text>
            </View>
            <View style={[styles.frame1, styles.frame1FlexBox]}>
              <View style={styles.frameChild} />
              <View style={styles.frame2}>
                <Text style={[styles.text, styles.dTypo]}>346</Text>
                <Text style={styles.totalCalories}>Followers</Text>
              </View>
            </View>
          </View>
          <View style={[styles.followButtonParent, styles.frameViewFlexBox]}>
            <Pressable
              style={[styles.followButton, styles.buttonLayout]}
              onPress={() => navigation.navigate("FollowRequests")}
            >
              <View style={styles.dParent}>
                <Text style={[styles.d, styles.dTypo]}>Follow Requests</Text>
                <Image
                  style={[styles.userPlusIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/userplus1.png")}
                />
              </View>
            </Pressable>
            <View style={[styles.massagesButton, styles.buttonLayout]}>
              <Text style={[styles.d1, styles.d1Typo]}>Edit Profile</Text>
              <Image
                style={[styles.editIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/edit.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.frame3}>
            <Text style={[styles.aboutMe, styles.sattuTypo]}>About Me</Text>
          </View>
          <View style={[styles.frame4, styles.frameSpaceBlock]}>
            <View style={[styles.frame5, styles.frameParentLayout]}>
              <View style={[styles.interestsParent, styles.frameParentLayout]}>
                <Text style={[styles.interests, styles.textLayout]}>
                  Interests
                </Text>
                <View style={[styles.frameParent2, styles.frameParentLayout]}>
                  <View
                    style={[styles.frameParent3, styles.frameParent3Position]}
                  >
                    <View style={[styles.musicWrapper, styles.wrapperBorder1]}>
                      <Text
                        style={[styles.music, styles.musicTypo]}
                      >{`Music `}</Text>
                    </View>
                    <View
                      style={[styles.danceWrapper, styles.frameParent3Position]}
                    >
                      <Text style={styles.dance}>Dance</Text>
                    </View>
                    <View
                      style={[styles.thisWeekWrapper, styles.wrapperBorder]}
                    >
                      <Text style={[styles.thisWeek, styles.musicTypo]}>
                        This week
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.culturalEventsWrapper, styles.wrapperBorder]}
                  >
                    <Text
                      style={[styles.culturalEvents, styles.frameItemPosition]}
                    >{`Cultural Events `}</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.beachPartiesWrapper, styles.wrapperBorder1]}>
                <Text
                  style={[styles.beachParties, styles.frameItemPosition]}
                >{`Beach Parties `}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.frame6, styles.frameSpaceBlock]}>
            <View style={[styles.frameParent4, styles.parentLayout]}>
              <View style={[styles.vadodaraGujaratParent, styles.parentLayout]}>
                <Text style={[styles.vadodaraGujarat, styles.d1Typo]}>
                  Vadodara, Gujarat
                </Text>
                <Image
                  style={[styles.frameItem, styles.frameItemPosition]}
                  contentFit="cover"
                  source={require("../assets/group-182072.png")}
                />
              </View>
              <Text
                style={[styles.interests, styles.textLayout]}
              >{`From `}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frame1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  sattuTypo: {
    color: Color.colorBlack,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  dTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
  },
  frameViewFlexBox: {
    marginTop: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLayout: {
    height: 52,
    width: 156,
    borderWidth: 1.5,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorForestgreen_100,
    borderStyle: "solid",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  d1Typo: {
    lineHeight: 25,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  frameSpaceBlock: {
    marginTop: 19,
    overflow: "hidden",
  },
  frameParentLayout: {
    width: 322,
    left: 0,
  },
  textLayout: {
    lineHeight: 34,
    textAlign: "left",
    color: Color.colorTypographyTitle,
  },
  frameParent3Position: {
    height: 42,
    top: 0,
    position: "absolute",
  },
  wrapperBorder1: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  musicTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  wrapperBorder: {
    backgroundColor: Color.colorMediumseagreen,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    height: 42,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  frameItemPosition: {
    top: 8,
    position: "absolute",
  },
  parentLayout: {
    width: 334,
    position: "absolute",
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
  backParent: {
    width: 123,
    height: 29,
    alignItems: "center",
  },
  frameIcon: {
    borderRadius: Border.br_11xl,
    height: 96,
    left: 0,
    top: 0,
    position: "absolute",
    width: 96,
    overflow: "hidden",
  },
  sattu: {
    top: 96,
    left: 22,
    fontSize: FontSize.size_lgi,
    textTransform: "capitalize",
  },
  frameContainer: {
    height: 119,
    width: 96,
  },
  text: {
    lineHeight: 34,
    textAlign: "left",
    color: Color.colorTypographyTitle,
  },
  totalCalories: {
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTypographySubColor,
    textAlign: "center",
  },
  frame: {
    alignItems: "center",
    overflow: "hidden",
  },
  frameChild: {
    borderRightWidth: 1,
    width: 1,
    height: 33,
    borderColor: Color.colorForestgreen_100,
    borderStyle: "solid",
  },
  frame2: {
    marginLeft: 22,
    alignItems: "center",
    overflow: "hidden",
  },
  frame1: {
    marginLeft: 19,
    alignItems: "center",
    overflow: "hidden",
  },
  d: {
    width: "91.73%",
    top: "0%",
    left: "8.27%",
    lineHeight: 13,
    color: Color.colorWhite,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "500",
    position: "absolute",
    alignItems: "center",
  },
  userPlusIcon: {
    height: "84.62%",
    width: "16.54%",
    top: "7.69%",
    right: "83.46%",
    bottom: "7.69%",
    left: "0%",
  },
  dParent: {
    top: 12,
    left: 21,
    width: 133,
    height: 26,
    position: "absolute",
  },
  followButton: {
    backgroundColor: Color.colorLime,
  },
  d1: {
    left: "32.15%",
    color: Color.colorForestgreen_100,
    top: "25.24%",
    textAlign: "center",
  },
  editIcon: {
    height: "42.72%",
    width: "14.15%",
    right: "74.28%",
    bottom: "32.04%",
    left: "11.58%",
    top: "25.24%",
  },
  massagesButton: {
    marginLeft: 25,
  },
  followButtonParent: {
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  aboutMe: {
    fontSize: FontSize.size_6xl,
    lineHeight: 33,
    left: 0,
    top: 0,
  },
  frame3: {
    width: 344,
    height: 33,
    overflow: "hidden",
  },
  interests: {
    fontSize: FontSize.size_base,
    lineHeight: 34,
    left: 0,
    top: 0,
    position: "absolute",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  music: {
    left: 18,
    top: 9,
    color: Color.colorGray_100,
    position: "absolute",
  },
  musicWrapper: {
    width: 81,
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorSalmon,
    borderWidth: 1,
    height: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
    left: 0,
    top: 0,
  },
  dance: {
    left: 30,
    color: Color.colorMediumseagreen,
    fontSize: FontSize.size_mini,
    top: 9,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  danceWrapper: {
    left: 93,
    width: 110,
    backgroundColor: Color.colorLime,
    borderRadius: Border.br_3xs,
    height: 42,
  },
  thisWeek: {
    left: 15,
    top: 9,
    color: Color.colorGray_100,
    position: "absolute",
  },
  thisWeekWrapper: {
    left: 215,
    width: 107,
    top: 0,
  },
  frameParent3: {
    width: 322,
    left: 0,
  },
  culturalEvents: {
    left: 13,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  culturalEventsWrapper: {
    top: 56,
    width: 142,
    left: 0,
  },
  frameParent2: {
    top: 46,
    height: 98,
    position: "absolute",
  },
  interestsParent: {
    height: 144,
    top: 0,
    position: "absolute",
  },
  beachParties: {
    left: 29,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  beachPartiesWrapper: {
    top: 102,
    left: 157,
    width: 165,
    borderColor: Color.colorGainsboro_100,
    backgroundColor: Color.colorSalmon,
    borderWidth: 1,
    height: 42,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  frame5: {
    height: 144,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  frame4: {
    width: 324,
    height: 144,
  },
  vadodaraGujarat: {
    top: 18,
    left: 71,
    color: Color.colorGray_300,
    textAlign: "left",
  },
  frameItem: {
    left: 8,
    width: 45,
    height: 45,
  },
  vadodaraGujaratParent: {
    top: 45,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPalegreen,
    borderColor: Color.colorPalegreen,
    height: 60,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  frameParent4: {
    left: 10,
    height: 105,
    top: 0,
  },
  frame6: {
    height: 105,
    width: 344,
  },
  frameParent1: {
    marginTop: 47,
    alignItems: "center",
  },
  frameParent: {
    marginTop: 57,
    alignItems: "center",
  },
  profile: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    height: 812,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 41,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
