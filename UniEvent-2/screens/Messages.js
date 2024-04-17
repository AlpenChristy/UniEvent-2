import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Messages = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.messages}>
      <View style={styles.ellipseParent}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-7.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
      </View>
      <Pressable style={styles.group} onPress={() => navigation.goBack()}>
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/group.png")}
        />
      </Pressable>
      <Image
        style={styles.messagesChild}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Text style={styles.chat}>Chat</Text>
      <Pressable
        style={[styles.ellipseGroup, styles.ellipseParentFlexBox]}
        onPress={() => navigation.navigate("Chat")}
      >
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-71.png")}
        />
        <View style={styles.frame}>
          <Text style={styles.sattu}>Sattu</Text>
          <Text style={[styles.hiDavidHope, styles.davidTypo]}>
            Hi, David. Hope you’re doing....
          </Text>
        </View>
      </Pressable>
      <View style={[styles.ellipseContainer, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-11.png")}
        />
        <View style={styles.frame1}>
          <Text style={styles.sattu}>{`Innoxent Jay `}</Text>
          <Text style={[styles.letsGetBack, styles.davidTypo]}>
            Let’s get back to the work, You..
          </Text>
        </View>
      </View>
      <View style={[styles.frameView, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-9.png")}
        />
        <View style={styles.frame2}>
          <Text style={styles.sattu}>John Walton</Text>
          <Text style={[styles.letsGetBack, styles.davidTypo]}>
            I’am sending you a parcel rece..
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseParent1, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.childLayout}
          contentFit="cover"
          source={require("../assets/ellipse-12.png")}
        />
        <View style={styles.frame}>
          <Text style={styles.sattu}>Jonnas Autron</Text>
          <Text style={[styles.hiDavidHope, styles.davidTypo]}>
            Hi, David. Hope you’re doing....
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseParent2, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
        <View style={styles.frame4}>
          <Text style={styles.sattu}>Merry An.</Text>
          <Text style={styles.areYouReady}>
            Are you ready for today’s part..
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseParent3, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-13.png")}
        />
        <View style={styles.frame5}>
          <Text style={styles.sattu}>Harry Samit</Text>
          <Text style={[styles.listenDavidI, styles.davidTypo]}>
            Listen david, i have a problem..
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseParent4, styles.ellipseParentFlexBox]}>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/ellipse-10.png")}
        />
        <View style={styles.frame6}>
          <Text style={styles.sattu}>Monica Randawa</Text>
          <Text style={[styles.letsGetBack, styles.davidTypo]}>
            Hope you’re doing well today..
          </Text>
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <View style={styles.messagesItem} />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.searchHere}>Search here..</Text>
      <Image
        style={[styles.vectorIcon2, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={styles.messagesInner}
        contentFit="cover"
        source={require("../assets/ellipse-14.png")}
      />
      <Image
        style={[styles.messagesChild1, styles.childLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={[styles.edit1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <Image
        style={[styles.messagesChild2, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild3, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild4, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild5, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild6, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild7, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild8, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-16.png")}
      />
      <Image
        style={[styles.messagesChild9, styles.messagesChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-25.png")}
      />
      <Text style={[styles.mar, styles.marTypo]}>12 mar</Text>
      <Text style={[styles.mar1, styles.marTypo]}>29 mar</Text>
      <Text style={[styles.feb, styles.marTypo]}>08 Feb</Text>
      <Text style={[styles.feb1, styles.marTypo]}>02 Feb</Text>
      <Text style={[styles.jan, styles.marTypo]}>25 Jan</Text>
      <Text style={[styles.jan1, styles.marTypo]}>18 Jan</Text>
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 1]}
        colors={["#129b41", "#007665"]}
      />
      <Image
        style={[styles.messagesChild10, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-26.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>2</Text>
      <Image
        style={[styles.edit3Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/edit-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  ellipseParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  davidTypo: {
    marginTop: 3,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  childLayout: {
    height: 52,
    width: 52,
  },
  iconPosition: {
    top: 47,
    position: "absolute",
  },
  messagesChildLayout: {
    height: 58,
    width: 58,
    position: "absolute",
  },
  marTypo: {
    color: Color.colorSilver,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  textPosition: {
    top: 260,
    position: "absolute",
  },
  frameChild: {
    width: 50,
    height: 50,
  },
  frameItem: {
    width: 48,
    height: 48,
    marginLeft: 14,
  },
  ellipseParent: {
    top: 171,
    width: 346,
    flexDirection: "row",
    left: 16,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  group: {
    left: "4.35%",
    top: "6.31%",
    right: "91.92%",
    bottom: "92.18%",
    width: "3.73%",
    height: "1.51%",
    position: "absolute",
  },
  messagesChild: {
    top: "0%",
    left: "0%",
    width: 0,
    height: 0,
    position: "absolute",
  },
  chat: {
    top: 40,
    left: 49,
    fontSize: 26,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  sattu: {
    fontSize: FontSize.size_lg,
    alignSelf: "stretch",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  hiDavidHope: {
    color: Color.colorDarkgray_300,
  },
  frame: {
    width: 240,
    overflow: "hidden",
  },
  ellipseGroup: {
    top: 254,
    width: 313,
    alignItems: "center",
    left: 20,
    justifyContent: "space-between",
  },
  letsGetBack: {
    color: Color.colorGainsboro_200,
  },
  frame1: {
    width: 250,
    overflow: "hidden",
  },
  ellipseContainer: {
    top: 614,
    width: 323,
    alignItems: "center",
    left: 20,
    justifyContent: "space-between",
  },
  frame2: {
    width: 257,
    overflow: "hidden",
  },
  frameView: {
    top: 434,
    width: 330,
    alignItems: "center",
    left: 20,
    justifyContent: "space-between",
  },
  ellipseParent1: {
    top: 788,
    width: 312,
    paddingTop: Padding.p_10xs,
    left: 16,
  },
  areYouReady: {
    color: Color.colorGainsboro_500,
    marginTop: 3,
    fontSize: FontSize.size_base,
    alignSelf: "stretch",
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  frame4: {
    width: 248,
    overflow: "hidden",
  },
  ellipseParent2: {
    top: 344,
    width: 321,
    alignItems: "center",
    left: 20,
    justifyContent: "space-between",
  },
  listenDavidI: {
    color: Color.colorGainsboro_300,
  },
  frame5: {
    width: 249,
    overflow: "hidden",
  },
  ellipseParent3: {
    top: 704,
    width: 322,
    alignItems: "center",
    left: 20,
    justifyContent: "space-between",
  },
  frame6: {
    width: 242,
    overflow: "hidden",
  },
  ellipseParent4: {
    top: 524,
    width: 315,
    alignItems: "center",
    left: 20,
    justifyContent: "space-between",
  },
  vectorIcon: {
    height: "1.66%",
    width: "3.6%",
    top: "23.28%",
    right: "87.07%",
    bottom: "75.06%",
    left: "9.33%",
    position: "absolute",
  },
  messagesItem: {
    top: 94,
    left: 17,
    borderRadius: 62,
    backgroundColor: "#fffdfd",
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 356,
    height: 42,
    position: "absolute",
  },
  vectorIcon1: {
    height: "2.36%",
    width: "3.97%",
    top: "12.56%",
    right: "8.85%",
    bottom: "85.07%",
    left: "87.17%",
    position: "absolute",
  },
  searchHere: {
    top: 105,
    left: 68,
    fontSize: FontSize.size_sm,
    color: Color.colorGainsboro_500,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIcon2: {
    height: "2.03%",
    width: "4.4%",
    top: "12.67%",
    right: "87.15%",
    bottom: "85.3%",
    left: "8.45%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "1.42%",
    width: "4.61%",
    top: "96.44%",
    right: "128.45%",
    bottom: "2.14%",
    left: "-33.07%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "2.19%",
    width: "4.75%",
    top: "96.1%",
    right: "119.87%",
    bottom: "1.71%",
    left: "-24.61%",
    position: "absolute",
  },
  messagesInner: {
    top: 916,
    left: 160,
    width: 62,
    height: 62,
    position: "absolute",
  },
  messagesChild1: {
    top: 921,
    left: 165,
    position: "absolute",
  },
  edit1Icon: {
    left: 326,
    width: 22,
    height: 22,
    display: "none",
  },
  messagesChild2: {
    left: 77,
    top: 166,
    height: 58,
    width: 58,
  },
  messagesChild3: {
    top: 431,
    left: 16,
  },
  messagesChild4: {
    top: 611,
    left: 16,
  },
  messagesChild5: {
    top: 521,
    left: 16,
  },
  messagesChild6: {
    left: 137,
    top: 166,
    height: 58,
    width: 58,
  },
  messagesChild7: {
    left: 198,
    top: 166,
    height: 58,
    width: 58,
  },
  messagesChild8: {
    left: 262,
    top: 166,
    height: 58,
    width: 58,
  },
  messagesChild9: {
    left: 321,
    top: 166,
    height: 58,
    width: 58,
  },
  mar: {
    top: 347,
    left: 316,
    fontFamily: FontFamily.poppinsRegular,
  },
  mar1: {
    top: 256,
    left: 311,
  },
  feb: {
    top: 437,
    left: 316,
    fontFamily: FontFamily.poppinsRegular,
  },
  feb1: {
    top: 527,
    left: 316,
    fontFamily: FontFamily.poppinsRegular,
  },
  jan: {
    top: 617,
    left: 315,
  },
  jan1: {
    top: 707,
    left: 319,
  },
  rectangleLineargradient: {
    top: 838,
    left: 106,
    width: 77,
    height: 5,
    backgroundColor: "transparent",
    position: "absolute",
  },
  messagesChild10: {
    left: 226,
    width: 14,
    height: 14,
  },
  text: {
    left: 230,
    fontSize: FontSize.size_3xs,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorWhite,
    textAlign: "left",
  },
  edit3Icon: {
    left: 336,
    width: 24,
    height: 24,
  },
  messages: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Messages;
