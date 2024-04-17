import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import Filter from "../components/Filter";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Search = () => {
  const navigation = useNavigation();
  const [moreIconVisible, setMoreIconVisible] = useState(false);
  const [filterContainerVisible, setFilterContainerVisible] = useState(false);

  const openMoreIcon = useCallback(() => {
    setMoreIconVisible(true);
  }, []);

  const closeMoreIcon = useCallback(() => {
    setMoreIconVisible(false);
  }, []);

  const openFilterContainer = useCallback(() => {
    setFilterContainerVisible(true);
  }, []);

  const closeFilterContainer = useCallback(() => {
    setFilterContainerVisible(false);
  }, []);

  return (
    <>
      <View style={styles.search}>
        <View style={[styles.frame, styles.frameFlexBox]}>
          <View style={[styles.frameParent, styles.frameParentFlexBox]}>
            <View style={[styles.frame1, styles.frame1FlexBox]}>
              <Pressable
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/back.png")}
                />
              </Pressable>
              <Text style={[styles.helloAshfak, styles.imGoingToTypo]}>
                Search
              </Text>
            </View>
            <Pressable style={styles.back} onPress={openMoreIcon}>
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/more.png")}
              />
            </Pressable>
          </View>
          <View style={[styles.frame2, styles.frameParentFlexBox]}>
            <View style={[styles.searchParent, styles.frameParentFlexBox]}>
              <Image
                style={styles.searchIcon}
                contentFit="cover"
                source={require("../assets/search.png")}
              />
              <View style={styles.searchGroup}>
                <Text style={styles.search1}>Search...</Text>
                <View style={[styles.frameChild, styles.frameChildPosition]} />
              </View>
            </View>
            <Pressable style={styles.filter} onPress={openFilterContainer}>
              <View style={[styles.filterCircleParent, styles.frame1FlexBox]}>
                <Image
                  style={styles.searchIcon}
                  contentFit="cover"
                  source={require("../assets/filtercircle.png")}
                />
                <Text style={[styles.filters, styles.filtersTypo]}>
                  Filters
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
        <View style={[styles.card1Parent, styles.frameFlexBox]}>
          <View style={styles.card1}>
            <Image
              style={styles.jazzIcon}
              contentFit="cover"
              source={require("../assets/-jazz.png")}
            />
            <View style={[styles.frame3, styles.frameLayout]}>
              <Image
                style={styles.iconbookmark}
                contentFit="cover"
                source={require("../assets/iconbookmark.png")}
              />
              <View
                style={[styles.stMaySat200PmParent, styles.frameChildPosition]}
              >
                <Text style={[styles.stMaySat, styles.filtersTypo]}>
                  1st May- Sat -2:00 PM
                </Text>
                <Text style={[styles.imGoingTo, styles.imGoingToTypo]}>
                  A virtual evening of smooth jazz
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <Image
              style={styles.jazzIcon}
              contentFit="cover"
              source={require("../assets/mothers-day.png")}
            />
            <View style={[styles.frame3, styles.frameLayout]}>
              <Image
                style={styles.iconbookmark}
                contentFit="cover"
                source={require("../assets/iconbookmark1.png")}
              />
              <View
                style={[styles.stMaySat200PmParent, styles.frameChildPosition]}
              >
                <Text style={[styles.stMaySat, styles.filtersTypo]}>
                  1st May- Sat -2:00 PM
                </Text>
                <Text style={[styles.imGoingTo, styles.imGoingToTypo]}>
                  Navarachana Music Fest
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <Image
              style={styles.jazzIcon}
              contentFit="cover"
              source={require("../assets/womens-leadership.png")}
            />
            <View style={[styles.frame3, styles.frameLayout]}>
              <Image
                style={styles.iconbookmark}
                contentFit="cover"
                source={require("../assets/iconbookmark.png")}
              />
              <View
                style={[styles.stMaySat200PmParent, styles.frameChildPosition]}
              >
                <Text style={[styles.stMaySat, styles.filtersTypo]}>
                  1st May- Sat -2:00 PM
                </Text>
                <Text style={[styles.imGoingTo, styles.imGoingToTypo]}>
                  Women's leadership conference
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <Image
              style={styles.jazzIcon}
              contentFit="cover"
              source={require("../assets/international-kids-safe.png")}
            />
            <View style={[styles.frame6, styles.frameLayout]}>
              <Image
                style={styles.iconbookmark3}
                contentFit="cover"
                source={require("../assets/iconbookmark1.png")}
              />
              <View style={styles.frameView}>
                <Text style={[styles.stMaySat, styles.filtersTypo]}>
                  1st May- Sat -2:00 PM
                </Text>
                <Text style={[styles.imGoingTo, styles.imGoingToTypo]}>
                  International kids safe parents night out
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.cardShadowBox}>
            <Image
              style={styles.jazzIcon}
              contentFit="cover"
              source={require("../assets/gala-music-festival.png")}
            />
            <View style={[styles.frame3, styles.frameLayout]}>
              <Image
                style={styles.iconbookmark}
                contentFit="cover"
                source={require("../assets/iconbookmark.png")}
              />
              <View
                style={[styles.stMaySat200PmParent, styles.frameChildPosition]}
              >
                <Text style={[styles.stMaySat, styles.filtersTypo]}>
                  1st May- Sat -2:00 PM
                </Text>
                <Text style={[styles.imGoingTo, styles.imGoingToTypo]}>
                  International gala music festival
                </Text>
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

      <Modal animationType="fade" transparent visible={filterContainerVisible}>
        <View style={styles.filterContainerOverlay}>
          <Pressable
            style={styles.filterContainerBg}
            onPress={closeFilterContainer}
          />
          <Filter onClose={closeFilterContainer} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  frameFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  frameParentFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  frame1FlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  imGoingToTypo: {
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  frameChildPosition: {
    left: 0,
    position: "absolute",
  },
  filtersTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  frameLayout: {
    width: 206,
    overflow: "hidden",
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
  },
  frame1: {
    width: 118,
    height: 29,
    overflow: "hidden",
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
  },
  searchIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  search1: {
    top: 0,
    left: 7,
    fontSize: 24,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorBlack,
    opacity: 0.3,
    position: "absolute",
    textAlign: "left",
  },
  frameChild: {
    top: 2,
    borderStyle: "solid",
    borderColor: Color.colorPalegreen,
    borderRightWidth: 1,
    width: 1,
    height: 27,
  },
  searchGroup: {
    width: 106,
    height: 30,
  },
  searchParent: {
    width: 140,
  },
  filterContainerOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  filterContainerBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  filters: {
    color: "#ecebfc",
    textAlign: "center",
    marginLeft: 1,
  },
  filterCircleParent: {
    width: 63,
    height: 24,
  },
  filter: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorLime,
    width: 75,
    height: 32,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  frame2: {
    marginTop: 51,
    overflow: "hidden",
    alignSelf: "stretch",
  },
  frame: {
    overflow: "hidden",
  },
  jazzIcon: {
    borderRadius: Border.br_3xs,
    width: 79,
    height: 92,
  },
  iconbookmark: {
    height: "21.05%",
    width: "7.81%",
    top: "0%",
    right: "0%",
    bottom: "78.95%",
    left: "92.19%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  stMaySat: {
    textTransform: "uppercase",
    color: Color.colorForestgreen_100,
    textAlign: "left",
  },
  imGoingTo: {
    fontSize: FontSize.size_lg,
    lineHeight: 25,
    marginTop: 3,
    textAlign: "left",
    alignSelf: "stretch",
  },
  stMaySat200PmParent: {
    top: 8,
    width: 193,
  },
  frame3: {
    height: 76,
  },
  card1: {
    padding: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(83, 89, 144, 0.07)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cardShadowBox: {
    marginTop: 16,
    padding: Padding.p_3xs,
    shadowOpacity: 1,
    elevation: 25,
    shadowRadius: 25,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(83, 89, 144, 0.07)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    justifyContent: "space-between",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconbookmark3: {
    width: 16,
    height: 16,
  },
  frameView: {
    marginTop: -8,
    alignSelf: "stretch",
  },
  frame6: {
    alignItems: "flex-end",
  },
  card1Parent: {
    marginTop: 29,
  },
  search: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_10xl,
    paddingBottom: 17,
    width: "100%",
  },
});

export default Search;
