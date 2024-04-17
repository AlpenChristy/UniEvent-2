import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Filter = ({ onClose }) => {
  return (
    <View style={[styles.filter, styles.filterLayout]}>
      <View style={[styles.frame, styles.framePosition2]}>
        <View style={styles.rectangleWrapper}>
          <View style={styles.rectangle} />
        </View>
        <View style={[styles.frame1, styles.frameLayout]}>
          <Text style={styles.filter1}>Filter</Text>
        </View>
      </View>
      <View style={[styles.frame2, styles.frameLayout]}>
        <View style={[styles.frame3, styles.framePosition2]}>
          <View style={styles.frameParent}>
            <View style={[styles.musicParent, styles.parentPosition]}>
              <Text style={[styles.music, styles.artTypo]}>Music</Text>
              <Image
                style={[styles.frameChild, styles.parentPosition]}
                contentFit="cover"
                source={require("../assets/group-18314.png")}
              />
            </View>
            <View style={[styles.artParent, styles.parentPosition]}>
              <Text style={[styles.art, styles.artTypo]}>Art</Text>
              <Image
                style={[styles.frameChild, styles.parentPosition]}
                contentFit="cover"
                source={require("../assets/group-18315.png")}
              />
            </View>
            <View style={[styles.sportsParent, styles.parentPosition]}>
              <Text style={[styles.sports, styles.sportsPosition]}>Sports</Text>
              <Image
                style={[styles.frameChild, styles.parentPosition]}
                contentFit="cover"
                source={require("../assets/group-18316.png")}
              />
            </View>
            <View style={[styles.foodParent, styles.parentPosition]}>
              <Text style={[styles.food, styles.artTypo]}>Food</Text>
              <Image
                style={[styles.frameChild, styles.parentPosition]}
                contentFit="cover"
                source={require("../assets/group-18317.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frame4, styles.frame4Layout]}>
          <View style={[styles.timeDateParent, styles.frameGroupLayout]}>
            <Text
              style={[styles.timeDate, styles.textPosition]}
            >{`Time & Date`}</Text>
            <View style={[styles.frameGroup, styles.groupPosition]}>
              <View style={styles.frameContainer}>
                <View style={[styles.todayWrapper, styles.wrapperBorder]}>
                  <Text style={[styles.today, styles.todayTypo]}>Today</Text>
                </View>
                <View style={styles.tomorrowWrapper}>
                  <Text style={[styles.tomorrow, styles.tomorrowTypo]}>
                    Tomorrow
                  </Text>
                </View>
                <View style={[styles.thisWeekWrapper, styles.wrapperBorder]}>
                  <Text style={[styles.thisWeek, styles.todayTypo]}>
                    This week
                  </Text>
                </View>
              </View>
              <View
                style={[styles.chooseFromCalenderParent, styles.wrapperBorder]}
              >
                <Text style={[styles.chooseFromCalender, styles.todayTypo]}>
                  Choose from calender
                </Text>
                <Image
                  style={[styles.calendarIcon, styles.framePosition2]}
                  contentFit="cover"
                  source={require("../assets/calendar1.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector-9.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frame5, styles.framePosition]}>
          <View style={[styles.frameView, styles.framePosition]}>
            <View style={[styles.groupParent, styles.groupParentBorder]}>
              <Image
                style={[styles.frameChild1, styles.sportsPosition]}
                contentFit="cover"
                source={require("../assets/group-18207.png")}
              />
              <View style={[styles.frame6, styles.framePosition2]}>
                <Image
                  style={[styles.frameChild2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector-9.png")}
                />
                <Text style={[styles.vadodaraGujarat, styles.tomorrowTypo]}>
                  Vadodara, Gujarat
                </Text>
              </View>
            </View>
            <Text style={[styles.timeDate, styles.textPosition]}>Location</Text>
          </View>
        </View>
        <View style={[styles.frame7, styles.frameParentLayout]}>
          <View style={[styles.frameParent1, styles.frameParentLayout]}>
            <View style={[styles.rectangleParent, styles.frameParentLayout]}>
              <Image
                style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                contentFit="cover"
                source={require("../assets/rectangle1.png")}
              />
              <Text style={[styles.continue, styles.continueTypo]}>Apply</Text>
            </View>
            <View style={[styles.continueWrapper, styles.rectangleIconLayout]}>
              <Text style={[styles.continue1, styles.continueTypo]}>Reset</Text>
            </View>
          </View>
        </View>
        <View style={[styles.frame8, styles.frame8Position]}>
          <View style={[styles.groupContainer, styles.frame8Position]}>
            <Image
              style={styles.frameChild3}
              contentFit="cover"
              source={require("../assets/group-18302.png")}
            />
            <View style={[styles.frame9, styles.framePosition2]}>
              <Text style={[styles.timeDate, styles.textPosition]}>
                Select price range
              </Text>
              <Text style={[styles.text, styles.textPosition]}>$20-$120</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  filterLayout: {
    top: 20,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  framePosition2: {
    overflow: "hidden",
    position: "absolute",
  },
  frameLayout: {
    width: 335,
    overflow: "hidden",
  },
  parentPosition: {
    width: 63,
    top: 0,
    position: "absolute",
  },
  artTypo: {
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    top: 74,
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  sportsPosition: {
    left: 8,
    position: "absolute",
  },
  frame4Layout: {
    height: 144,
    position: "absolute",
  },
  frameGroupLayout: {
    width: 322,
    left: 0,
  },
  textPosition: {
    lineHeight: 34,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    top: 46,
    position: "absolute",
  },
  wrapperBorder: {
    borderWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    height: 42,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  todayTypo: {
    color: Color.colorGray_100,
    lineHeight: 25,
    fontSize: FontSize.size_mini,
    top: 9,
    textAlign: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  tomorrowTypo: {
    lineHeight: 25,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  vectorIconLayout: {
    height: 9,
    width: 5,
    position: "absolute",
  },
  framePosition: {
    height: 106,
    left: 0,
    position: "absolute",
  },
  groupParentBorder: {
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  frameParentLayout: {
    height: 58,
    position: "absolute",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  continueTypo: {
    textTransform: "uppercase",
    letterSpacing: 1,
    top: "50%",
    fontSize: FontSize.size_base,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  frame8Position: {
    height: 115,
    left: 0,
    position: "absolute",
  },
  rectangle: {
    height: "0.67%",
    width: "6.93%",
    top: "1.62%",
    right: "46.67%",
    bottom: "97.71%",
    left: "46.4%",
    backgroundColor: Color.colorDarkgray_400,
    borderRadius: Border.br_21xl,
    position: "absolute",
  },
  rectangleWrapper: {
    backgroundColor: Color.colorWhite,
    borderTopLeftRadius: Border.br_21xl,
    borderTopRightRadius: Border.br_21xl,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  filter1: {
    fontSize: FontSize.size_6xl,
    lineHeight: 33,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame1: {
    top: 29,
    height: 33,
    left: 20,
    position: "absolute",
  },
  frame: {
    left: 0,
    top: 0,
    height: 741,
    width: 375,
  },
  music: {
    left: 11,
    position: "absolute",
  },
  frameChild: {
    height: 63,
    left: 0,
  },
  musicParent: {
    left: 79,
    height: 97,
  },
  art: {
    left: 20,
    position: "absolute",
  },
  artParent: {
    left: 158,
    height: 97,
  },
  sports: {
    textAlign: "center",
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    top: 74,
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  sportsParent: {
    height: 97,
    left: 0,
  },
  food: {
    left: 13,
    position: "absolute",
  },
  foodParent: {
    left: 237,
    height: 97,
  },
  frameParent: {
    width: 300,
    height: 97,
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame3: {
    left: 17,
    width: 301,
    height: 97,
    top: 0,
  },
  timeDate: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    color: Color.colorTypographyTitle,
    lineHeight: 34,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  today: {
    left: 18,
  },
  todayWrapper: {
    width: 81,
    left: 0,
    top: 0,
  },
  tomorrow: {
    left: 16,
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
    top: 9,
    lineHeight: 25,
    textAlign: "center",
  },
  tomorrowWrapper: {
    left: 93,
    backgroundColor: Color.colorLime,
    width: 110,
    borderRadius: Border.br_3xs,
    height: 42,
    top: 0,
    position: "absolute",
  },
  thisWeek: {
    left: 15,
  },
  thisWeekWrapper: {
    left: 215,
    width: 107,
    top: 0,
  },
  frameContainer: {
    height: 42,
    width: 322,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chooseFromCalender: {
    left: 41,
  },
  calendarIcon: {
    height: "55.48%",
    width: "8.71%",
    top: "21.43%",
    right: "85.48%",
    bottom: "23.1%",
    left: "5.81%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon: {
    top: 17,
    left: 216,
  },
  chooseFromCalenderParent: {
    top: 56,
    width: 241,
    left: 0,
  },
  frameGroup: {
    height: 98,
    width: 322,
    left: 0,
  },
  timeDateParent: {
    height: 144,
    position: "absolute",
    top: 0,
  },
  frame4: {
    top: 121,
    width: 335,
    overflow: "hidden",
    left: 0,
  },
  frameChild1: {
    top: 8,
    width: 45,
    height: 45,
  },
  frameChild2: {
    top: 7,
    left: 240,
  },
  vadodaraGujarat: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  frame6: {
    top: 18,
    left: 71,
    width: 245,
    height: 25,
  },
  groupParent: {
    borderRadius: Border.br_mini,
    height: 60,
    width: 334,
    top: 46,
    position: "absolute",
  },
  frameView: {
    width: 334,
    top: 0,
  },
  frame5: {
    top: 291,
    width: 335,
    overflow: "hidden",
  },
  rectangleIcon: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    height: "100%",
    borderRadius: Border.br_sm,
    overflow: "hidden",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  continue: {
    marginTop: -10,
    left: "34.59%",
    color: Color.colorWhite,
  },
  rectangleParent: {
    left: 149,
    width: 185,
    top: 0,
  },
  continue1: {
    marginTop: -10.5,
    left: "28.24%",
    color: Color.colorTypographyTitle,
  },
  continueWrapper: {
    width: 131,
    height: 59,
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  frameParent1: {
    width: 334,
    left: 0,
    top: 0,
  },
  frame7: {
    top: 580,
    width: 335,
    overflow: "hidden",
    left: 0,
  },
  frameChild3: {
    top: 49,
    width: 333,
    height: 66,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 253,
    fontSize: FontSize.size_lg,
    color: Color.colorForestgreen_100,
    textAlign: "right",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 34,
  },
  frame9: {
    height: 34,
    width: 334,
    left: 0,
    top: 0,
  },
  groupContainer: {
    width: 334,
    top: 0,
  },
  frame8: {
    top: 421,
    width: 335,
    overflow: "hidden",
  },
  frame2: {
    top: 85,
    height: 638,
    left: 20,
    position: "absolute",
  },
  filter: {
    height: 741,
    width: 375,
  },
});

export default Filter;
