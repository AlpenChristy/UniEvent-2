import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
      <Image
        style={styles.edit1Icon}
        contentFit="cover"
        source={require("../assets/edit-1.png")}
      />
      <View style={styles.chatChild} />
      <View style={styles.frame}>
        <Pressable
          style={styles.vectorParent}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/ellipse-72.png")}
          />
        </Pressable>
        <View style={styles.frame1}>
          <View style={styles.frame2}>
            <Text style={styles.sattu}>Sattu</Text>
            <Text style={styles.activeNow}>Active Now</Text>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/ellipse-261.png")}
          />
        </View>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/frame-34074.png")}
        />
        <Image
          style={styles.frameIcon}
          contentFit="cover"
          source={require("../assets/frame-34073.png")}
        />
      </View>
      <View style={styles.frame3}>
        <View style={styles.frame4}>
          <Text style={styles.sendMessage}>Send Message</Text>
          <Image
            style={styles.vectorIcon1}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
        <Image
          style={styles.frameIcon1}
          contentFit="cover"
          source={require("../assets/frame12.png")}
        />
      </View>
      <Image
        style={styles.frameIcon2}
        contentFit="cover"
        source={require("../assets/frame13.png")}
      />
      <Image
        style={styles.chatItem}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={styles.frameParent}>
        <View style={styles.frame5}>
          <View style={styles.frame6}>
            <View style={styles.frame7}>
              <Image
                style={styles.frameIcon1}
                contentFit="cover"
                source={require("../assets/frame14.png")}
              />
              <View style={styles.frame8}>
                <Text style={styles.areYouStill}>
                  Are you still travelling?
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame9}>
          <View style={styles.frame10}>
            <View style={styles.frame11}>
              <View style={styles.frame12}>
                <Text style={styles.yesImAt}>{`Yes, i’m at Istanbul.. `}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame13}>
          <View style={styles.frame14}>
            <View style={styles.frame15}>
              <View style={styles.frame16}>
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame14.png")}
                />
                <View style={styles.frame17}>
                  <View style={styles.frame18}>
                    <Text style={styles.areYouStill}>OoOo, Thats so Cool!</Text>
                  </View>
                  <View style={styles.frame19}>
                    <Text style={styles.raining}>Raining??</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.frameIcon5}
          contentFit="cover"
          source={require("../assets/frame15.png")}
        />
        <View style={styles.frame20}>
          <View style={styles.frame21}>
            <View style={styles.frame22}>
              <Text style={styles.thursday242022}>Thursday 24, 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.frame23}>
          <View style={styles.frame24}>
            <View style={styles.frame25}>
              <View style={styles.frame26}>
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame14.png")}
                />
                <View style={styles.frame27}>
                  <Image
                    style={styles.frameIcon7}
                    contentFit="cover"
                    source={require("../assets/frame16.png")}
                  />
                  <View style={styles.frame28}>
                    <View style={styles.frame29}>
                      <Text style={styles.raining}>Ok!</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.frame30}>
          <View style={styles.frame31}>
            <View style={styles.frame32}>
              <View style={styles.frame33}>
                <Text style={styles.areYouStill}>Hi, Did you heared?</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  edit1Icon: {
    position: "absolute",
    top: 47,
    left: 326,
    width: 22,
    height: 22,
    display: "none",
  },
  chatChild: {
    position: "absolute",
    top: 94,
    left: -1,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_500,
    borderTopWidth: 1,
    width: 377,
    height: 1,
  },
  vectorIcon: {
    position: "relative",
    width: 14,
    height: 12,
  },
  frameChild: {
    position: "relative",
    width: 50,
    height: 50,
    marginLeft: 12,
  },
  vectorParent: {
    width: 76,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 1,
  },
  sattu: {
    position: "relative",
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorBlack,
    textAlign: "left",
  },
  activeNow: {
    position: "relative",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGainsboro_400,
    textAlign: "left",
    marginTop: -3,
  },
  frame2: {
    width: 44,
    height: 39,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
  },
  frameItem: {
    position: "relative",
    width: 8,
    height: 8,
  },
  frame1: {
    width: 68,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameInner: {
    width: 15,
    height: 19,
  },
  frameIcon: {
    width: 23,
    height: 17,
  },
  frame: {
    position: "absolute",
    top: 32,
    left: 16,
    width: 340,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sendMessage: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGainsboro_300,
    textAlign: "left",
  },
  vectorIcon1: {
    position: "relative",
    width: 17,
    height: 17,
  },
  frame4: {
    borderRadius: 28,
    backgroundColor: "#f7f7f7",
    width: 300,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 21,
    paddingVertical: 12,
  },
  frameIcon1: {
    position: "relative",
    width: 50,
    height: 50,
    overflow: "hidden",
  },
  frame3: {
    position: "absolute",
    top: 735,
    left: 16,
    width: 354,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameIcon2: {
    position: "absolute",
    top: 916,
    left: -124,
    width: 346,
    height: 62,
    overflow: "hidden",
  },
  chatItem: {
    position: "absolute",
    top: "0%",
    left: "0%",
    width: 0,
    height: 0,
  },
  areYouStill: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  frame8: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_500,
    width: 200,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: 0,
  },
  frame7: {
    width: 270,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frame6: {
    position: "absolute",
    top: 0,
    left: -140,
    width: 411,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 271,
    height: 50,
  },
  yesImAt: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: "#007665",
    textAlign: "left",
  },
  frame12: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorPalegreen,
    width: 170,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: Padding.p_5xs,
  },
  frame11: {
    position: "absolute",
    top: 0,
    left: -316,
    width: 490,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame10: {
    position: "relative",
    width: 174,
    height: 40,
  },
  frame9: {
    position: "absolute",
    top: 74,
    left: 0,
    width: 350,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame18: {
    alignSelf: "stretch",
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_500,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 6,
  },
  raining: {
    position: "relative",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray_200,
    textAlign: "left",
  },
  frame19: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_500,
    width: 100,
    height: 40,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    marginTop: 10,
  },
  frame17: {
    width: 190,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame16: {
    width: 260,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frame15: {
    position: "absolute",
    top: 0,
    left: -141,
    width: 401,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame14: {
    alignSelf: "stretch",
    position: "relative",
    height: 90,
  },
  frame13: {
    position: "absolute",
    top: 144,
    left: 0,
    width: 261,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon5: {
    position: "absolute",
    top: 261,
    left: 0,
    width: 347,
    height: 55,
    overflow: "hidden",
  },
  thursday242022: {
    position: "relative",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGainsboro_400,
    textAlign: "left",
  },
  frame22: {
    position: "absolute",
    top: 0,
    left: -264,
    width: 389,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame21: {
    position: "relative",
    width: 125,
    height: 21,
    overflow: "hidden",
  },
  frame20: {
    position: "absolute",
    top: 346,
    left: 0,
    width: 249,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameIcon7: {
    alignSelf: "stretch",
    position: "relative",
    borderTopLeftRadius: Border.br_8xl_5,
    borderTopRightRadius: Border.br_8xl_5,
    borderBottomRightRadius: Border.br_8xl_5,
    maxWidth: "100%",
    overflow: "hidden",
    height: 55,
    width: "100%",
  },
  frame29: {
    width: 34,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame28: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_500,
    width: 50,
    height: 40,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginTop: 11,
  },
  frame27: {
    width: 280,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frame26: {
    width: 350,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  frame25: {
    position: "absolute",
    top: 0,
    left: -141,
    width: 491,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame24: {
    alignSelf: "stretch",
    position: "relative",
    height: 106,
  },
  frame23: {
    position: "absolute",
    top: 449,
    left: 0,
    width: 351,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame33: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    borderBottomRightRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_500,
    width: 179,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
  },
  frame32: {
    position: "absolute",
    top: 0,
    left: -211,
    width: 390,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frame31: {
    position: "relative",
    width: 179,
    height: 40,
  },
  frame30: {
    position: "absolute",
    top: 397,
    left: 0,
    width: 250,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  frameParent: {
    position: "absolute",
    top: 124,
    left: 10,
    width: 351,
    height: 555,
  },
  chat: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Chat;
