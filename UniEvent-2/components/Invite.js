import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Invite = ({ onClose }) => {
  return (
    <View style={[styles.invite, styles.inviteLayout]}>
      <View style={[styles.selectParent, styles.searchPosition]}>
        <Image
          style={[styles.selectIcon, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/select.png")}
        />
        <Image
          style={[styles.noSelectIcon, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/noselect.png")}
        />
        <Image
          style={[styles.selectIcon1, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/select.png")}
        />
        <Image
          style={[styles.noSelectIcon1, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/noselect.png")}
        />
        <Image
          style={[styles.selectIcon2, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/select.png")}
        />
        <Image
          style={[styles.noSelectIcon2, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/noselect.png")}
        />
        <Image
          style={[styles.selectIcon3, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/select.png")}
        />
        <Image
          style={[styles.noSelectIcon3, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/noselect.png")}
        />
        <Image
          style={[styles.selectIcon4, styles.selectIconLayout]}
          contentFit="cover"
          source={require("../assets/select.png")}
        />
        <View style={[styles.frameParent, styles.groupFramePosition]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-62.png")}
          />
          <View style={[styles.jayParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Jay</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              2k Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.groupFramePosition]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-60.png")}
          />
          <View style={[styles.jayParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Ronaldo</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              56 Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameLayout]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-601.png")}
          />
          <View style={[styles.alpenParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Alpen</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              300 Followers
            </Text>
          </View>
        </View>
        <View style={[styles.groupView, styles.groupFramePosition]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-64.png")}
          />
          <View style={[styles.jayParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Gurjyot</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              5k Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent1, styles.frameLayout]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-602.png")}
          />
          <View style={[styles.alpenParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Manav</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              402 Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.groupFramePosition]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-603.png")}
          />
          <View style={[styles.viratKohliParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Virat Kohli</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              893 Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent3, styles.frameParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-604.png")}
          />
          <View style={[styles.sattuParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Sattu</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              225 Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent4, styles.frameParentLayout]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-605.png")}
          />
          <View style={[styles.sattuParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Spaiderman</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              322 Followers
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent5, styles.groupFramePosition]}>
          <Image
            style={[styles.groupChild, styles.groupFramePosition]}
            contentFit="cover"
            source={require("../assets/ellipse-606.png")}
          />
          <View style={[styles.jayParent, styles.parentPosition]}>
            <Text style={[styles.jay, styles.jayTypo]}>Jhon Wick</Text>
            <Text style={[styles.kFollowers, styles.kFollowersTypo]}>
              2k Followers
            </Text>
          </View>
        </View>
      </View>
      <LinearGradient
        style={styles.frame}
        locations={[0, 0.59, 0.59]}
        colors={[
          "rgba(255, 255, 255, 0)",
          "rgba(186, 253, 155, 0.5)",
          "rgba(186, 253, 155, 0.5)",
        ]}
      >
        <View style={styles.continueParent}>
          <Text style={styles.continue}>Invite</Text>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-41.png")}
          />
        </View>
      </LinearGradient>
      <View style={[styles.search, styles.searchPosition]}>
        <View style={[styles.rectangle60, styles.rectangle60Position]} />
        <View style={styles.details}>
          <Text style={[styles.findConversation, styles.rectangle60Position]}>
            Search
          </Text>
          <Image
            style={[styles.search6Icon, styles.inviteLayout]}
            contentFit="cover"
            source={require("../assets/search-6.png")}
          />
        </View>
      </View>
      <Text style={[styles.inviteFriend, styles.jayTypo]}>Invite Friend</Text>
      <View style={styles.rectangle} />
    </View>
  );
};

const styles = StyleSheet.create({
  inviteLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    top: 20,
  },
  searchPosition: {
    width: 327,
    left: 24,
    position: "absolute",
  },
  selectIconLayout: {
    height: 20,
    width: 20,
    left: 307,
    position: "absolute",
  },
  groupFramePosition: {
    height: 45,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 37,
    left: 56,
    top: 4,
    position: "absolute",
  },
  jayTypo: {
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  kFollowersTypo: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
  },
  frameLayout: {
    width: 146,
    height: 45,
    left: 0,
    position: "absolute",
  },
  frameParentLayout: {
    width: 144,
    height: 45,
    left: 0,
    position: "absolute",
  },
  rectangle60Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  selectIcon: {
    top: 12,
  },
  noSelectIcon: {
    top: 73,
  },
  selectIcon1: {
    top: 134,
  },
  noSelectIcon1: {
    top: 195,
  },
  selectIcon2: {
    top: 256,
  },
  noSelectIcon2: {
    top: 317,
  },
  selectIcon3: {
    top: 378,
  },
  noSelectIcon3: {
    top: 439,
  },
  selectIcon4: {
    top: 500,
  },
  groupChild: {
    width: 45,
    top: 0,
  },
  jay: {
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
  },
  kFollowers: {
    top: 21,
    fontSize: FontSize.size_smi,
    color: Color.colorTypographySubColor,
    left: 0,
    position: "absolute",
  },
  jayParent: {
    width: 81,
  },
  frameParent: {
    width: 137,
    height: 45,
    top: 0,
  },
  frameGroup: {
    top: 61,
    width: 137,
    height: 45,
  },
  alpenParent: {
    width: 90,
  },
  frameContainer: {
    top: 122,
  },
  groupView: {
    top: 183,
    width: 137,
    height: 45,
  },
  frameParent1: {
    top: 244,
  },
  viratKohliParent: {
    width: 89,
  },
  frameParent2: {
    top: 305,
    width: 145,
  },
  sattuParent: {
    width: 88,
  },
  frameParent3: {
    top: 366,
  },
  frameParent4: {
    top: 427,
  },
  frameParent5: {
    top: 488,
    width: 137,
    height: 45,
  },
  selectParent: {
    top: 159,
    height: 533,
  },
  continue: {
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    textTransform: "uppercase",
    color: Color.colorWhite,
    textAlign: "center",
    width: 162,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frame: {
    top: 560,
    height: 181,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_16xl,
    backgroundColor: "transparent",
    alignItems: "center",
    left: 0,
    position: "absolute",
    overflow: "hidden",
    width: 375,
  },
  rectangle60: {
    height: "100%",
    width: "100%",
    bottom: "0%",
    borderRadius: Border.br_81xl,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1.2,
    right: "0%",
    backgroundColor: Color.colorWhite,
    left: "0%",
    top: "0%",
  },
  findConversation: {
    lineHeight: 23,
    color: "#8193ae",
    opacity: 0.7,
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    fontSize: FontSize.size_sm,
  },
  search6Icon: {
    height: "69.57%",
    width: "5.82%",
    top: "13.04%",
    bottom: "17.39%",
    left: "94.18%",
    right: "0%",
    position: "absolute",
  },
  details: {
    height: "46%",
    width: "84.1%",
    top: "28%",
    right: "6.73%",
    bottom: "26%",
    left: "9.17%",
    position: "absolute",
  },
  search: {
    top: 72,
    height: 50,
  },
  inviteFriend: {
    top: 35,
    fontSize: FontSize.size_5xl,
    left: 24,
    textAlign: "left",
    color: Color.colorTypographyTitle,
  },
  rectangle: {
    height: "0.67%",
    width: "6.93%",
    top: "1.62%",
    right: "46.67%",
    bottom: "97.71%",
    left: "46.4%",
    borderRadius: 3,
    backgroundColor: Color.colorDarkgray_400,
    position: "absolute",
  },
  invite: {
    borderTopRightRadius: Border.br_21xl,
    borderTopLeftRadius: Border.br_21xl,
    height: 741,
    width: 375,
    maxHeight: "100%",
    maxWidth: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Invite;
