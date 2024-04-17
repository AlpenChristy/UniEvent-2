import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Share1 = () => {
  return (
    <View style={[styles.share, styles.shareFlexBox]}>
      <View style={styles.frameParent}>
        <View style={[styles.rectangleWrapper, styles.rectanglePosition]}>
          <View style={styles.rectangle} />
        </View>
        <View style={styles.frame}>
          <Text style={styles.shareWithFriends}>Share with friends</Text>
        </View>
        <View style={[styles.frame1, styles.shareFlexBox]}>
          <View style={styles.rectangleParent}>
            <Image
              style={[styles.rectangleIcon, styles.rectanglePosition]}
              contentFit="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={styles.continue}>cancel</Text>
          </View>
        </View>
        <View style={[styles.frame2, styles.framePosition2]}>
          <Text style={styles.instagram}>Instagram</Text>
        </View>
        <View style={[styles.frame3, styles.frameFlexBox]}>
          <Text style={styles.instagram}>Skype</Text>
        </View>
        <View style={[styles.frame4, styles.framePosition2]}>
          <Text style={styles.instagram}>Message</Text>
        </View>
        <View style={[styles.frame5, styles.frameFlexBox]}>
          <Text style={styles.instagram}>Twitter</Text>
        </View>
        <View style={[styles.frame6, styles.frameIconPosition]}>
          <Text style={styles.instagram}>WhatsApp</Text>
        </View>
        <View style={[styles.frame7, styles.frameLayout]}>
          <Text style={styles.instagram}>Facebook</Text>
        </View>
        <View style={[styles.frame8, styles.frameIconPosition]}>
          <Text style={styles.instagram}>Messenger</Text>
        </View>
        <View style={[styles.frame9, styles.frameLayout]}>
          <Text style={styles.instagram}>Copy Link</Text>
        </View>
        <View style={[styles.frame10, styles.frame10Position]}>
          <View style={[styles.frameChild, styles.frameIconLayout1]} />
        </View>
        <Image
          style={[styles.frameIcon, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame4.png")}
        />
        <Image
          style={[styles.frameIcon1, styles.frameIconLayout]}
          contentFit="cover"
          source={require("../assets/frame5.png")}
        />
        <Image
          style={[styles.frameIcon2, styles.frameIconLayout1]}
          contentFit="cover"
          source={require("../assets/frame6.png")}
        />
        <View style={[styles.frame11, styles.frameIconLayout1]}>
          <View style={[styles.frameGroup, styles.frameIconLayout1]}>
            <View style={[styles.bgParent, styles.frameIconLayout1]}>
              <View style={[styles.bg, styles.frameIconLayout1]} />
              <View style={[styles.bg1, styles.frameIconLayout1]} />
              <View style={[styles.bg1, styles.frameIconLayout1]} />
            </View>
            <Image
              style={styles.shapeIcon}
              contentFit="cover"
              source={require("../assets/shape.png")}
            />
          </View>
        </View>
        <Image
          style={[styles.frameIcon3, styles.frameIconLayout1]}
          contentFit="cover"
          source={require("../assets/frame7.png")}
        />
        <Image
          style={[styles.frameIcon4, styles.frameIconLayout1]}
          contentFit="cover"
          source={require("../assets/frame8.png")}
        />
        <Image
          style={[styles.frameIcon5, styles.frameIconLayout1]}
          contentFit="cover"
          source={require("../assets/frame9.png")}
        />
        <Image
          style={styles.frameIcon6}
          contentFit="cover"
          source={require("../assets/frame10.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shareFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  framePosition2: {
    height: 67,
    top: 176,
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "absolute",
    alignItems: "center",
  },
  frameFlexBox: {
    height: 66,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameIconPosition: {
    top: 88,
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    width: 64,
    top: 88,
    height: 66,
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "absolute",
    alignItems: "center",
  },
  frame10Position: {
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  frameIconLayout1: {
    height: 40,
    width: 40,
  },
  frameIconLayout: {
    height: 41,
    width: 40,
    top: 176,
    overflow: "hidden",
    position: "absolute",
  },
  rectangle: {
    backgroundColor: Color.colorDarkgray_400,
    width: 26,
    height: 2,
    borderRadius: Border.br_21xl,
  },
  rectangleWrapper: {
    backgroundColor: Color.colorWhite,
    paddingHorizontal: 0,
    paddingVertical: 6,
    alignItems: "center",
    borderRadius: Border.br_21xl,
  },
  shareWithFriends: {
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorTypographyTitle,
    textAlign: "center",
    alignSelf: "stretch",
  },
  frame: {
    top: 24,
    left: 24,
    width: 226,
    justifyContent: "flex-end",
    overflow: "hidden",
    position: "absolute",
    alignItems: "center",
  },
  rectangleIcon: {
    borderRadius: Border.br_mini,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  continue: {
    marginTop: -11,
    top: "50%",
    left: "36.9%",
    fontSize: FontSize.size_base,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: "#484646",
    textAlign: "center",
    position: "absolute",
  },
  rectangleParent: {
    height: 58,
    alignSelf: "stretch",
  },
  frame1: {
    top: 278,
    left: 52,
    width: 271,
    overflow: "hidden",
    position: "absolute",
  },
  instagram: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTypographyParagraph,
    textAlign: "center",
  },
  frame2: {
    left: 115,
    width: 67,
  },
  frame3: {
    width: 40,
    overflow: "hidden",
    left: 211,
    top: 177,
    position: "absolute",
  },
  frame4: {
    left: 285,
    width: 58,
  },
  frame5: {
    left: 42,
    width: 46,
    top: 177,
    overflow: "hidden",
    position: "absolute",
  },
  frame6: {
    left: 113,
    width: 70,
    height: 66,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frame7: {
    left: 199,
  },
  frame8: {
    left: 278,
    width: 72,
    height: 66,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frame9: {
    left: 33,
  },
  frameChild: {
    backgroundColor: "#efe9e9",
    borderRadius: Border.br_xs,
    height: 40,
  },
  frame10: {
    left: 44,
    height: 128,
    width: 40,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  frameIcon: {
    left: 45,
  },
  frameIcon1: {
    left: 295,
  },
  frameIcon2: {
    left: 294,
    top: 88,
    overflow: "hidden",
    position: "absolute",
  },
  bg: {
    borderRadius: Border.br_xs,
    height: 40,
  },
  bg1: {
    marginTop: -40,
    borderRadius: Border.br_xs,
    height: 40,
  },
  bgParent: {
    left: 0,
    top: 0,
    position: "absolute",
    alignItems: "center",
  },
  shapeIcon: {
    top: 7,
    left: 8,
    width: 23,
    height: 26,
    position: "absolute",
  },
  frameGroup: {
    shadowColor: "rgba(225, 66, 93, 0.2)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 12,
    elevation: 12,
    shadowOpacity: 1,
  },
  frame11: {
    left: 128,
    top: 177,
    overflow: "hidden",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameIcon3: {
    left: 212,
    top: 88,
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon4: {
    left: 129,
    top: 88,
    overflow: "hidden",
    position: "absolute",
  },
  frameIcon5: {
    left: 211,
    top: 177,
    position: "absolute",
    overflow: "hidden",
  },
  frameIcon6: {
    top: 96,
    left: 53,
    width: 22,
    height: 23,
    overflow: "hidden",
    position: "absolute",
  },
  frameParent: {
    height: 359,
    alignSelf: "stretch",
  },
  share: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    borderRadius: Border.br_21xl,
  },
});

export default Share1;
