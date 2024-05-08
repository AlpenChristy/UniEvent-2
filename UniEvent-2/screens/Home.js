import React, { useState, useCallback, useEffect } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import Menu from "../components/Menu";
import Filter from "../components/Filter";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const [combinedShape2Visible, setCombinedShape2Visible] = useState(false);
  const [frameContainer45Visible, setFrameContainer45Visible] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    // Reset menu state when component gains focus
    setCombinedShape2Visible(false);
    setFrameContainer45Visible(false);
  }, [isFocused]);

  const openCombinedShape2 = useCallback(() => {
    setCombinedShape2Visible(true);
  }, []);

  const closeCombinedShape2 = useCallback(() => {
    setCombinedShape2Visible(false);
  }, []);

  const openFrameContainer45 = useCallback(() => {
    setFrameContainer45Visible(true);
  }, []);

  const closeFrameContainer45 = useCallback(() => {
    setFrameContainer45Visible(false);
  }, []);

  return (
    <>
      <View style={styles.home}>
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', flex:2 }} showsVerticalScrollIndicator={true}>
        <View style={styles.frameParent}>
          <View style={styles.popularParent}>
            <Text style={styles.popular}>Upcoming Events</Text>
            <Pressable
              style={styles.allCopyParent}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "SeeAllEvents" })
              }
            >
              <Text style={styles.allCopy}>See All</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameGroup}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.frameContainer}>
              <Pressable
                style={styles.frame}
                onPress={() => navigation.navigate("EventDetails")}
              >
                <View style={styles.frameItem} />
                <View style={styles.frame1}>
                  <View style={styles.frame2}>
                    <View style={styles.imGoingToShakeYParent}>
                      <Text style={styles.imGoingTo}>
                        Navrachana Music Fest
                      </Text>
                      <View style={styles.minParent}>
                        <Text
                          style={styles.min}
                        >{`36 Guild Street London, UK `}</Text>
                        <Image
                          style={styles.mapPinIcon}
                          contentFit="cover"
                          source={require("../assets/mappin3.png")}
                        />
                      </View>
                      <View style={styles.groupParent}>
                        <Image
                          style={styles.groupIcon}
                          contentFit="cover"
                          source={require("../assets/group2.png")}
                        />
                        <Text style={styles.going}>+20 Going</Text>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("../assets/frame21.png")}
                  />
                </View>
              </Pressable>
              <View style={styles.frame3}>
                <View style={styles.frame4}>
                  <View style={styles.armanRokniWrapper}>
                    <Text style={styles.armanRokni}>
                      <Text style={styles.armanRokniTxtContainer}>
                        <Text style={styles.text}>{`
                        10
`}</Text>
                        <Text style={styles.june}>June</Text>
                      </Text>
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame22.png")}
                />
              </View>
            </View>
            <View style={styles.frameView}>
              <View style={styles.frame5}>
                <View style={styles.frameInner} />
                <View style={styles.frame6}>
                  <View style={styles.frame7}>
                    <View style={styles.imGoingToShakeYGroup}>
                      <Text style={styles.imGoingTo1}>
                        Jo Malone London’s Mo..
                      </Text>
                      <View style={styles.minGroup}>
                        <Text style={styles.min1}>
                          Radius Gallery • Santa Cruz, CA
                        </Text>
                        <Image
                          style={styles.mapPinIcon}
                          contentFit="cover"
                          source={require("../assets/mappin3.png")}
                        />
                      </View>
                      <View style={styles.groupParent}>
                        <Image
                          style={styles.groupIcon}
                          contentFit="cover"
                          source={require("../assets/group2.png")}
                        />
                        <Text style={styles.going}>+20 Going</Text>
                      </View>
                    </View>
                  </View>
                  <Image
                    style={styles.frameIcon}
                    contentFit="cover"
                    source={require("../assets/frame23.png")}
                  />
                </View>
              </View>
              <View style={styles.frame3}>
                <View style={styles.frame4}>
                  <View style={styles.armanRokniWrapper}>
                    <Text style={styles.armanRokni}>
                      <Text style={styles.armanRokniTxtContainer}>
                        <Text style={styles.text}>{`
                        10
`}</Text>
                        <Text style={styles.june}>June</Text>
                      </Text>
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame24.png")}
                />
              </View>
            </View>
            </ScrollView>
          </View>
          <View style={styles.popularGroup}>
            <Text style={styles.popular}>Nearby You</Text>
            <Pressable
              style={styles.allCopyParent}
              onPress={() =>
                navigation.navigate("DrawerRoot", { screen: "SeeAllEvents" })
              }
            >
              <Text style={styles.allCopy}>See All</Text>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/vector-1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.womensLeadershipParent}>
            <Image
              style={styles.womensLeadership}
              contentFit="cover"
              source={require("../assets/group-333492.png")}
            />
            <View style={styles.frame10}>
              <View style={styles.stMaySat200PmParent}>
                <Text style={styles.stMaySat}>1st May- Sat -2:00 PM</Text>
                <View style={styles.imGoingToShakeYContainer}>
                  <Text style={styles.imGoingTo2}>
                    Women's leadership conference
                  </Text>
                  <View style={styles.mapPinParent}>
                    <Image
                      style={styles.mapPinIcon2}
                      contentFit="cover"
                      source={require("../assets/mappin4.png")}
                    />
                    <Text style={styles.min2}>Radius Gallery • Santa Cruz</Text>
                  </View>
                </View>
              </View>
              <Image
                style={styles.iconbookmark}
                contentFit="cover"
                source={require("../assets/iconbookmark3.png")}
              />
            </View>
          </View>
          <View style={styles.internationalKidsSafeParent}>
            <Image
              style={styles.womensLeadership}
              contentFit="cover"
              source={require("../assets/group-333493.png")}
            />
            <View style={styles.frame11}>
              <Image
                style={styles.iconbookmark1}
                contentFit="cover"
                source={require("../assets/iconbookmark5.png")}
              />
              <View style={styles.stMaySat200PmGroup}>
                <Text style={styles.stMaySat}>1st May- Sat -2:00 PM</Text>
                <View style={styles.imGoingToShakeYParent1}>
                  <Text style={styles.imGoingTo3}>
                    International kids safe parents night out
                  </Text>
                  <View style={styles.mapPinGroup}>
                    <Image
                      style={styles.mapPinIcon2}
                      contentFit="cover"
                      source={require("../assets/mappin5.png")}
                    />
                    <Text style={styles.min3}>Radius Gallery • Santa Cruz</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.groupContainer}>
            <Image
              style={styles.frameChild1}
              contentFit="cover"
              source={require("../assets/group-33650.png")}
            />
            <View style={styles.frame12}>
              <View style={styles.frame13}>
                <View style={styles.frame14}>
                  <Text style={styles.internationalGalaM}>
                    Invite your friends
                  </Text>
                </View>
                <View style={styles.frame14}>
                  <Text style={styles.madisonAveNew}>Get $20 for ticket</Text>
                </View>
              </View>
              <View style={styles.inviteWrapper}>
                <Text style={styles.invite}>Invite</Text>
              </View>
            </View>
          </View>
        </View>
        </ScrollView>
        <View style={styles.frame16}>
          <View style={styles.rectangleView} />
          <View style={styles.combinedShape2Parent}>
            <Pressable
              style={styles.combinedShape2}
              onPress={openCombinedShape2}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/combined-shape-2.png")}
              />
            </Pressable>
            <View style={styles.groupView}>
              <View style={styles.currentLocationParent}>
                <Text style={styles.currentLocation}>Current Location</Text>
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/dropdown.png")}
                />
              </View>
              <Text style={styles.stateCountry}>Gujarat, India</Text>
            </View>
            <Pressable
              style={styles.wrapper}
              onPress={() => navigation.navigate("EmptyNotification")}
            >
              <Image
                style={styles.icon2}
                contentFit="cover"
                source={require("../assets/group-18103.png")}
              />
            </Pressable>
          </View>
          <View style={styles.searchParent}>
            <Pressable
              style={styles.search}
              onPress={() => navigation.navigate("Search")}
            >
              <Image
                style={styles.icon3}
                contentFit="cover"
                source={require("../assets/search2.png")}
              />
            </Pressable>
            <Pressable
              style={styles.frameWrapper}
              onPress={openFrameContainer45}
            >
              <View style={styles.filterCircleParent}>
                <Image
                  style={styles.filterCircleIcon}
                  contentFit="cover"
                  source={require("../assets/filtercircle.png")}
                />
                <Text style={styles.filters}>Filters</Text>
              </View>
            </Pressable>
            <View style={styles.frame17}>
              <View style={styles.lineView} />
              <View style={styles.searchWrapper}>
                <Text style={styles.search1}>Search...</Text>
              </View>
            </View>
          </View>
          <View style={styles.frameParent1}>
            <View style={styles.frameWrapper1}>
              <View style={styles.parent}>
                <Image
                  style={styles.icon4}
                  contentFit="cover"
                  source={require("../assets/1381174.png")}
                />
                <Text style={styles.music}>Music</Text>
              </View>
            </View>
            <View style={styles.frameWrapper2}>
              <View style={styles.group}>
                <Image
                  style={styles.icon4}
                  contentFit="cover"
                  source={require("../assets/2476154.png")}
                />
                <Text style={styles.music}>Sports</Text>
              </View>
            </View>
            <View style={styles.frameWrapper3}>
              <View style={styles.container}>
                <Image
                  style={styles.icon4}
                  contentFit="cover"
                  source={require("../assets/685352.png")}
                />
                <Text style={styles.music}>Food</Text>
              </View>
            </View>
            <View style={styles.frameWrapper4}>
              <View style={styles.parent1}>
                <Image
                  style={styles.icon4}
                  contentFit="cover"
                  source={require("../assets/4303516.png")}
                />
                <Text style={styles.art}>Art</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.vectorParent}>
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle-83.png")}
          />
          <Pressable
            style={styles.iconlyboldcalendarParent}
            onPress={() =>
              navigation.navigate("DrawerRoot", { screen: "SeeAllEvents" })
            }
          >
            <Image
              style={styles.iconlyboldcalendar}
              contentFit="cover"
              source={require("../assets/iconlyboldcalendar.png")}
            />
            <Text style={styles.events}>Events</Text>
          </Pressable>
          <Text style={styles.explore}>Explore</Text>
          <Image
            style={styles.compassIcon}
            contentFit="cover"
            source={require("../assets/compass.png")}
          />
          <Pressable
            style={styles.groupPressable}
            onPress={() => navigation.navigate("CreateEvent")}
          >
            <Image
              style={styles.icon8}
              contentFit="cover"
              source={require("../assets/group-33324.png")}
            />
          </Pressable>
          <Pressable
            style={styles.iconlyboldprofileParent}
            onPress={() => navigation.navigate("Profile")}
          >
            <Image
              style={styles.iconlyboldcalendar}
              contentFit="cover"
              source={require("../assets/iconlyboldprofile.png")}
            />
            <Text style={styles.events}>Profile</Text>
          </Pressable>
          <Pressable
            style={styles.iconlyboldlocationParent}
            onPress={() => navigation.navigate("MapView")}
          >
            <Image
              style={styles.iconlyboldcalendar}
              contentFit="cover"
              source={require("../assets/iconlyboldlocation.png")}
            />
            <Text style={styles.events}>Map</Text>
          </Pressable>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={combinedShape2Visible}>
        <View style={styles.combinedShape2Overlay}>
          <Pressable
            style={styles.combinedShape2Bg}
            onPress={closeCombinedShape2}
          />
          <Menu onClose={closeCombinedShape2} />
        </View>
      </Modal>

      {/* <Modal animationType="slide" transparent visible={frameContainer45Visible}>
        <View style={styles.frameContainer45Overlay}>
          <Pressable
            style={styles.frameContainer45Bg}
            onPress={closeFrameContainer45}
          />
          <Filter onClose={closeFrameContainer45} />
        </View>
      </Modal> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  popular: {
    position: "relative",
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorTypographyTitle,
    textAlign: "left",
    opacity: 0.84,
  },
  allCopy: {
    position: "relative",
    fontSize: FontSize.size_sm,
    lineHeight: 23,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorTypographySubColor,
    textAlign: "right",
  },
  frameChild: {
    position: "relative",
    borderRadius: Border.br_12xs,
    width: 6,
    height: 9,
    opacity: 0.5,
    marginLeft: 5,
  },
  allCopyParent: {
    width: 59,
    height: 23,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  popularParent: {
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameItem: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(80, 85, 136, 0.06)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 237,
    height: 255,
  },
  imGoingTo: {
    position: "absolute",
    marginTop: -41.5,
    width: "100%",
    top: "50%",
    left: "0%",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  min: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: "10.55%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  mapPinIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  minParent: {
    position: "absolute",
    top: 67,
    left: 0,
    width: 199,
    height: 16,
    opacity: 0.5,
  },
  groupIcon: {
    position: "absolute",
    height: "100%",
    width: "43.75%",
    top: "0%",
    right: "56.25%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  going: {
    position: "absolute",
    top: 3,
    left: 66,
    fontSize: FontSize.size_xs,
    lineHeight: 19,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorRoyalblue,
    textAlign: "left",
  },
  groupParent: {
    position: "absolute",
    top: 33,
    left: 0,
    width: 128,
    height: 24,
  },
  imGoingToShakeYParent: {
    position: "absolute",
    top: 154,
    left: 0,
    width: 225,
    height: 83,
  },
  frame2: {
    position: "absolute",
    top: 0,
    left: 7,
    width: 225,
    height: 237,
    overflow: "hidden",
  },
  frameIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 218,
    height: 140,
    overflow: "hidden",
  },
  frame1: {
    position: "absolute",
    top: 0,
    left: 9,
    width: 232,
    height: 237,
    overflow: "hidden",
  },
  frame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 241,
    height: 255,
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_lg,
    lineHeight: 6,
  },
  june: {
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
  },
  armanRokniTxtContainer: {
    width: "100%",
  },
  armanRokni: {
    position: "absolute",
    marginTop: -19.5,
    width: "73.33%",
    top: "50%",
    left: "13.33%",
    textTransform: "uppercase",
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorSalmon,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    height: 44,
  },
  armanRokniWrapper: {
    position: "absolute",
    top: 17,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_500,
    width: 45,
    height: 45,
  },
  frame4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 45,
    height: 62,
    overflow: "hidden",
  },
  frameIcon1: {
    position: "absolute",
    top: 0,
    left: 172,
    width: 30,
    height: 133,
    overflow: "hidden",
  },
  frame3: {
    position: "absolute",
    top: 0,
    left: 17,
    width: 202,
    height: 133,
    overflow: "hidden",
  },
  frameContainer: {
    position: "relative",
    width: 241,
    height: 255,
  },
  frameInner: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(80, 85, 136, 0.06)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 237,
    height: 255,
  },
  imGoingTo1: {
    position: "absolute",
    marginTop: -41.5,
    top: "50%",
    left: "0%",
    fontSize: FontSize.size_lg,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorBlack,
    textAlign: "left",
  },
  min1: {
    position: "absolute",
    marginTop: -8,
    top: "50%",
    left: "9.25%",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorGray_200,
    textAlign: "left",
  },
  minGroup: {
    position: "absolute",
    top: 67,
    left: 0,
    width: 227,
    height: 16,
    opacity: 0.5,
  },
  imGoingToShakeYGroup: {
    position: "absolute",
    top: 154,
    left: 0,
    width: 227,
    height: 83,
  },
  frame7: {
    position: "absolute",
    top: 0,
    left: 7,
    width: 227,
    height: 237,
    overflow: "hidden",
  },
  frame6: {
    position: "absolute",
    top: 0,
    left: 9,
    width: 234,
    height: 237,
    overflow: "hidden",
  },
  frame5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 243,
    height: 255,
    overflow: "hidden",
  },
  frameView: {
    position: "relative",
    width: 243,
    height: 255,
    marginLeft: 12,
  },
  frameGroup: {
    width: 329,
    height: 255,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 17,
  },
  popularGroup: {
    width: 327,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 17,
  },
  womensLeadership: {
    position: "relative",
    borderRadius: Border.br_3xs,
    width: 79,
    height: 92,
  },
  stMaySat: {
    position: "relative",
    fontSize: FontSize.size_xs,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorPrimaryBlue,
    textAlign: "left",
  },
  imGoingTo2: {
    position: "relative",
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorTypographyTitle,
    textAlign: "left",
    width: 191,
  },
  mapPinIcon2: {
    position: "relative",
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  min2: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorTypographySubColor,
    textAlign: "left",
    marginLeft: 6,
  },
  mapPinParent: {
    width: 199,
    height: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 11,
  },
  imGoingToShakeYContainer: {
    width: 199,
    height: 64,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 3,
  },
  stMaySat200PmParent: {
    width: 199,
    height: 82,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconbookmark: {
    position: "relative",
    width: 16,
    height: 16,
    marginLeft: -9,
  },
  frame10: {
    width: 206,
    height: 84,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: Padding.p_11xs,
    marginLeft: 18,
  },
  womensLeadershipParent: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(80, 85, 136, 0.06)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 327,
    height: 112,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: 17,
  },
  iconbookmark1: {
    position: "relative",
    width: 16,
    height: 16,
  },
  imGoingTo3: {
    position: "relative",
    fontSize: FontSize.size_mini,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorTypographyTitle,
    textAlign: "left",
    width: 191,
  },
  min3: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorTypographySubColor,
    textAlign: "left",
    marginLeft: 6,
  },
  mapPinGroup: {
    width: 203,
    height: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 11,
  },
  imGoingToShakeYParent1: {
    width: 203,
    height: 64,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 3,
  },
  stMaySat200PmGroup: {
    width: 203,
    height: 82,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginLeft: -206,
  },
  frame11: {
    width: 206,
    height: 84,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 190,
    marginLeft: 18,
  },
  internationalKidsSafeParent: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(80, 85, 136, 0.06)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 30,
    elevation: 30,
    shadowOpacity: 1,
    width: 327,
    height: 112,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginTop: 17,
  },
  frameChild1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  internationalGalaM: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_lg,
    lineHeight: 34,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorTypographyTitle,
    textAlign: "left",
  },
  frame14: {
    alignSelf: "stretch",
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  madisonAveNew: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    color: "#484d70",
    textAlign: "left",
  },
  frame13: {
    width: 183,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  invite: {
    position: "relative",
    fontSize: FontSize.size_xs,
    lineHeight: 23,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  inviteWrapper: {
    borderRadius: 5,
    backgroundColor: Color.colorLime,
    width: 72,
    height: 32,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_9xs,
    marginLeft: 18,
    marginTop: 14,
  },
  frame12: {
    position: "absolute",
    top: 13,
    left: 0,
    width: 183,
    height: 96,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupContainer: {
    position: "relative",
    borderRadius: Border.br_xs,
    backgroundColor: "rgba(0, 248, 255, 0.16)",
    width: 328,
    height: 127,
    marginTop: 17,
  },
  frameParent: {
    position: "absolute",
    top: 218,
    left: 24,
    height: "auto", // Remove the fixed height
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexGrow: 1, // Add this line
  },
  rectangleView: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorForestgreen_100,
    width: 375,
    height: 180,
    zIndex: 0,
  },
  combinedShape2Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
    
  },
  combinedShape2Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  icon: {
    width: "100%",
    height: "100%",
    opacity: 0.94,
  },
  combinedShape2: {
    position: "relative",
    width: 24,
    height: 19,
  },
  currentLocation: {
    position: "absolute",
    marginTop: -7,
    top: "50%",
    left: "-3.74%",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "center",
    opacity: 0.7,
  },
  icon1: {
    position: "absolute",
    height: "31.25%",
    width: "9.35%",
    top: "37.5%",
    right: "0%",
    bottom: "31.25%",
    left: "90.65%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    opacity: 0.9,
  },
  currentLocationParent: {
    position: "relative",
    width: 107,
    height: 16,
  },
  stateCountry: {
    position: "relative",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratRegular,
    color: "#f4f4fe",
    textAlign: "center",
    marginTop: 2,
  },
  groupView: {
    width: 122,
    height: 36,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_5xs,
    paddingRight: Padding.p_6xs,
    marginLeft: 73,
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  wrapper: {
    position: "relative",
    width: 36,
    height: 36,
    marginLeft: 73,
  },
  combinedShape2Parent: {
    position: "absolute",
    top: 22,
    left: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  icon3: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  search: {
    position: "absolute",
    left: 0,
    top: 4,
    width: 24,
    height: 24,
  },
  frameContainer45Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer45Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  filterCircleIcon: {
    position: "relative",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  filters: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 3,
  },
  filterCircleParent: {
    width: 64,
    height: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameWrapper: {
    position: "absolute",
    top: 0,
    left: 252,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorLime,
    width: 75,
    height: 32,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  lineView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#7974e7",
    borderRightWidth: 1,
    width: 1,
    height: 21,
  },
  search1: {
    position: "relative",
    fontSize: 20,
    letterSpacing: -1,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
    opacity: 0.3,
  },
  searchWrapper: {
    width: 75,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 7,
  },
  frame17: {
    position: "absolute",
    top: 4,
    left: 34,
    width: 82,
    height: 25,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 0,
  },
  searchParent: {
    position: "absolute",
    top: 90,
    left: 24,
    width: 327,
    height: 32,
    zIndex: 2,
  },
  icon4: {
    position: "relative",
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  music: {
    position: "relative",
    fontSize: FontSize.size_mini,
    lineHeight: 25,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 8,
  },
  parent: {
    width: 71,
    height: 25,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameWrapper1: {
    position: "absolute",
    top: 0,
    left: 118,
    borderRadius: 21,
    backgroundColor: "#f59762",
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 101,
    height: 39,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
  group: {
    width: 75,
    height: 25,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameWrapper2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 21,
    backgroundColor: Color.colorSalmon,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 107,
    height: 39,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  container: {
    width: 65,
    height: 25,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameWrapper3: {
    position: "absolute",
    top: 0,
    left: 230,
    borderRadius: 21,
    backgroundColor: Color.colorMediumseagreen,
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 95,
    height: 39,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  art: {
    position: "relative",
    fontSize: 15,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorWhite,
    textAlign: "left",
    marginLeft: 8,
  },
  parent1: {
    width: 50,
    height: 19,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  frameWrapper4: {
    position: "absolute",
    top: 0,
    left: 337,
    borderRadius: 21,
    backgroundColor: "#46cdfb",
    shadowColor: "rgba(46, 46, 79, 0.12)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 82,
    height: 39,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameParent1: {
    position: "absolute",
    top: 159,
    left: 24,
    width: 326,
    height: 39,
    zIndex: 3,
  },
  frame16: {
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_14xl,
    borderBottomLeftRadius: Border.br_14xl,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleIcon: {
    position: "absolute",
    height: "76.53%",
    width: "100%",
    top: "23.47%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyboldcalendar: {
    position: "relative",
    width: 23,
    height: 23,
  },
  events: {
    position: "relative",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorDarkslategray_300,
    textAlign: "center",
    marginTop: 3,
  },
  iconlyboldcalendarParent: {
    position: "absolute",
    top: 39,
    left: 104,
    width: 42,
    height: 41,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    opacity: 0.2,
  },
  explore: {
    position: "absolute",
    top: "66.33%",
    left: "6.93%",
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.montserratSemiBold,
    color: Color.colorRoyalblue,
    textAlign: "center",
  },
  compassIcon: {
    position: "absolute",
    top: 39,
    left: 38,
    width: 23,
    height: 23,
    overflow: "hidden",
  },
  icon8: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupPressable: {
    position: "absolute",
    left: "43.73%",
    top: "0%",
    right: "44%",
    bottom: "53.06%",
    width: "12.27%",
    height: "46.94%",
  },
  iconlyboldprofileParent: {
    position: "absolute",
    top: 39,
    left: 308,
    width: 41,
    height: 41,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    opacity: 0.2,
  },
  iconlyboldlocationParent: {
    position: "absolute",
    top: 39,
    left: 241,
    width: 27,
    height: 41,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    opacity: 0.2,
  },
  vectorParent: {
    position: "absolute",
    marginLeft: -187.5,
    bottom: -1,
    left: "50%",
    width: 375,
    height: 98,
  },
  home: {
    position: "relative",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
  },
});

export default Home;
