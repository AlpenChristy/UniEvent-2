import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const MapView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mapView}>
      <Image
        style={styles.image23Icon}
        contentFit="cover"
        source={require("../assets/image-23.png")}
      />
      <LinearGradient
        style={[styles.mapViewChild, styles.mapViewLayout1]}
        locations={[0, 0.59]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
      />
      <View style={[styles.frameParent, styles.frameParentFlexBox]}>
        <View style={styles.frameWrapper}>
          <Pressable
            style={[styles.path3391Parent, styles.frameParentFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.path3391Icon}
              contentFit="cover"
              source={require("../assets/path-3391.png")}
            />
            <Text style={styles.findForFood}>
              Find for food or restaurant...
            </Text>
          </Pressable>
        </View>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/frame-34113.png")}
        />
      </View>
      <LinearGradient
        style={[styles.mapViewItem, styles.mapViewLayout1]}
        locations={[0, 0.59]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
      />
      <Image
        style={[styles.mapViewInner, styles.frameChildLayout]}
        contentFit="cover"
        source={require("../assets/frame-18511.png")}
      />
      <View style={[styles.frameGroup, styles.frameParentFlexBox]}>
        <View style={[styles.frameContainer, styles.frameShadowBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/group-33349.png")}
          />
          <View style={styles.frameView}>
            <View style={[styles.frame, styles.framePosition]}>
              <Text style={[styles.wedApr28, styles.sportsTypo]}>
                Wed, Apr 28 • 5:30 PM
              </Text>
              <Image
                style={[styles.iconbookmark, styles.iconbookmarkLayout]}
                contentFit="cover"
                source={require("../assets/iconbookmark2.png")}
              />
            </View>
            <View style={[styles.mapPinParent, styles.mapPosition]}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={[styles.min, styles.minTypo]}>
                Radius Gallery • Santa Cruz, CA
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Jo Malone London’s Mother’s Day Presents
            </Text>
          </View>
        </View>
        <View style={[styles.cardlight, styles.frameShadowBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/group-33349.png")}
          />
          <View style={styles.frameParent1}>
            <View style={[styles.frame1, styles.framePosition]}>
              <Text style={[styles.wedApr28, styles.sportsTypo]}>
                Wed, Apr 28 • 5:30 PM
              </Text>
              <Image
                style={[styles.iconbookmark1, styles.iconbookmarkLayout]}
                contentFit="cover"
                source={require("../assets/iconbookmark3.png")}
              />
            </View>
            <View style={[styles.mapPinGroup, styles.mapPosition]}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={[styles.min1, styles.minTypo]}>
                Radius Gallery • Santa Cruz, CA
              </Text>
            </View>
            <Text style={[styles.imGoingTo1, styles.goingTypo]}>
              Navrachana Music Fest
            </Text>
          </View>
        </View>
        <View style={[styles.frameParent2, styles.frameShadowBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/group-33349.png")}
          />
          <View style={styles.frameParent3}>
            <View style={[styles.frame1, styles.framePosition]}>
              <Text style={[styles.wedApr28, styles.sportsTypo]}>
                Wed, Apr 28 • 5:30 PM
              </Text>
              <Image
                style={[styles.iconbookmark1, styles.iconbookmarkLayout]}
                contentFit="cover"
                source={require("../assets/iconbookmark3.png")}
              />
            </View>
            <View style={[styles.mapPinContainer, styles.mapPosition]}>
              <Image
                style={styles.mapPinIcon}
                contentFit="cover"
                source={require("../assets/mappin2.png")}
              />
              <Text style={styles.minTypo}>
                Radius Gallery • Santa Cruz, CA
              </Text>
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo]}>
              Jo Malone London’s Mother’s Day Presents
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.groupIcon, styles.mapViewLayout]}
        contentFit="cover"
        source={require("../assets/group-33510.png")}
      />
      <Image
        style={[styles.mapViewChild1, styles.mapViewLayout]}
        contentFit="cover"
        source={require("../assets/group-33511.png")}
      />
      <Image
        style={[styles.mapViewChild2, styles.mapViewLayout]}
        contentFit="cover"
        source={require("../assets/group-33512.png")}
      />
      <Image
        style={[styles.mapViewChild3, styles.mapViewLayout]}
        contentFit="cover"
        source={require("../assets/group-33513.png")}
      />
      <View style={[styles.tabParent, styles.parentPosition]}>
        <View style={[styles.tab, styles.tabSpaceBlock]}>
          <Image
            style={styles.tabChild}
            contentFit="cover"
            source={require("../assets/group-18248.png")}
          />
          <Text style={[styles.sports, styles.sportsTypo]}>Sports</Text>
        </View>
        <View style={[styles.tab1, styles.tabSpaceBlock]}>
          <Image
            style={styles.tabChild}
            contentFit="cover"
            source={require("../assets/group-182481.png")}
          />
          <Text style={[styles.sports, styles.sportsTypo]}>Music</Text>
        </View>
        <View style={[styles.tab2, styles.tabSpaceBlock]}>
          <Image
            style={styles.tabChild}
            contentFit="cover"
            source={require("../assets/group-182482.png")}
          />
          <Text style={[styles.sports, styles.sportsTypo]}>Food</Text>
        </View>
        <View style={[styles.tab3, styles.tabSpaceBlock]}>
          <Image
            style={styles.tabChild}
            contentFit="cover"
            source={require("../assets/group-182483.png")}
          />
          <Text style={[styles.sports, styles.sportsTypo]}>Food</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapViewLayout1: {
    backgroundColor: "transparent",
    opacity: 0.43,
    height: 181,
    width: 375,
    position: "absolute",
  },
  frameParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChildLayout: {
    height: 51,
    width: 51,
  },
  frameShadowBox: {
    paddingVertical: Padding.p_6xs,
    paddingHorizontal: 0,
    width: 327,
    elevation: 32,
    shadowRadius: 32,
    shadowColor: "rgba(73, 62, 131, 0.12)",
    borderRadius: Border.br_base,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
  },
  framePosition: {
    top: 0,
    width: 207,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  sportsTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  iconbookmarkLayout: {
    width: 16,
    height: 16,
  },
  mapPosition: {
    top: 69,
    left: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  minTypo: {
    color: Color.colorTypographySubColor,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  goingTypo: {
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_mini,
    left: "0%",
    top: "25.88%",
    textAlign: "left",
    position: "absolute",
  },
  mapViewLayout: {
    height: 47,
    width: 42,
    position: "absolute",
  },
  parentPosition: {
    left: 25,
    position: "absolute",
  },
  tabSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_smi,
    borderRadius: 107,
    top: 0,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    position: "absolute",
  },
  image23Icon: {
    top: -77,
    left: -623,
    width: 1023,
    height: 889,
    opacity: 0.6,
    position: "absolute",
  },
  mapViewChild: {
    top: 181,
    left: 375,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  path3391Icon: {
    width: 6,
    height: 12,
  },
  findForFood: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratRegular,
    color: "rgba(97, 103, 121, 0.5)",
    textAlign: "left",
  },
  path3391Parent: {
    width: 227,
    justifyContent: "space-between",
  },
  frameWrapper: {
    borderRadius: Border.br_xs,
    shadowColor: "rgba(211, 209, 216, 0.5)",
    shadowRadius: 60,
    elevation: 60,
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    width: 262,
    paddingHorizontal: 17,
    paddingVertical: Padding.p_mini,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 40,
    },
    backgroundColor: Color.colorWhite,
  },
  frameChild: {
    marginLeft: 15,
  },
  frameParent: {
    top: 25,
    justifyContent: "center",
    left: 25,
    position: "absolute",
  },
  mapViewItem: {
    top: 631,
    left: 0,
  },
  mapViewInner: {
    top: 580,
    right: 25,
    borderRadius: Border.br_31xl,
    position: "absolute",
  },
  frameItem: {
    borderRadius: Border.br_3xs,
    width: 79,
    height: 92,
  },
  wedApr28: {
    color: Color.colorPrimaryBlue,
    fontSize: FontSize.size_smi,
    fontWeight: "500",
  },
  iconbookmark: {
    marginLeft: 44,
    height: 16,
  },
  frame: {
    height: 17,
    width: 207,
  },
  mapPinIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  min: {
    marginLeft: 2,
  },
  mapPinParent: {
    height: 16,
    width: 222,
  },
  imGoingTo: {
    width: "92.34%",
  },
  frameView: {
    marginLeft: 17,
    height: 85,
    width: 222,
  },
  frameContainer: {
    height: 106,
  },
  iconbookmark1: {
    height: 16,
  },
  frame1: {
    width: 207,
    justifyContent: "space-between",
  },
  min1: {
    width: 207,
  },
  mapPinGroup: {
    width: 223,
    justifyContent: "space-between",
  },
  imGoingTo1: {
    width: "91.93%",
  },
  frameParent1: {
    width: 223,
    height: 85,
  },
  cardlight: {
    justifyContent: "space-between",
  },
  mapPinContainer: {
    width: 222,
    justifyContent: "space-between",
  },
  frameParent3: {
    height: 85,
    width: 222,
  },
  frameParent2: {
    justifyContent: "space-between",
  },
  frameGroup: {
    top: 669,
    left: -316,
    width: 1007,
    justifyContent: "space-between",
    position: "absolute",
  },
  groupIcon: {
    top: 267,
    left: 81,
  },
  mapViewChild1: {
    top: 193,
    left: 225,
  },
  mapViewChild2: {
    top: 337,
    left: 257,
  },
  mapViewChild3: {
    top: 416,
    left: 123,
  },
  tabChild: {
    width: 20,
    height: 20,
  },
  sports: {
    fontSize: FontSize.size_base_6,
    lineHeight: 20,
    color: Color.colorLightslategray_100,
    marginLeft: 10,
  },
  tab: {
    left: 0,
  },
  tab1: {
    left: 117,
  },
  tab2: {
    left: 332,
  },
  tab3: {
    left: 227,
  },
  tabParent: {
    top: 96,
    width: 431,
    height: 40,
  },
  mapView: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default MapView;
