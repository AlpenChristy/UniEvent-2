import React, { useState, useCallback, useEffect } from "react";
// import { Image } from "expo-image";
import { Image, FlatList, TextInput, StyleSheet, Pressable, Text, View, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { supabase } from '../components/supabase';
import EventDetails from './EventDetails.js';

const SeeAllEvents = () => {
  const navigation = useNavigation();
  const [moreIconVisible, setMoreIconVisible] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const renderSeparator = () => <View style={styles.separator} />;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase.from("events").select("*");
      if (error) {
        throw error;
      }
      setEvents(data || []);
    } catch (error) {
      console.error("Error fetching events:", error.message);
    }
  };
  
  const keyExtractor = (item, index) => {
    return item.id ? item.id.toString() : index.toString();
  };
  
  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('EventDetails', { eventId: item.id })}>
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
                {item.date} • {item.time}
              </Text>
              <View style={[styles.iconbookmark, styles.iconbookmarkLayout]} />
            </View>
            <Text style={[styles.imGoingTo, styles.goingTypo1]}>
              {item.title}
            </Text>
          </View>
          <View style={styles.mapPinParent}>
            <Image
              style={styles.mapPinIcon}
              contentFit="cover"
              source={require("../assets/mappin.png")}
            />
            <Text style={[styles.min, styles.minTypo1]}>{item.location}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );


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
              <TextInput
                style={styles.searchInput}
                placeholder="Search events"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
              />
              <Image
                style={[styles.searchIcon]}
                contentFit="cover"
                source={require("../assets/search1.png")}
              />
              <Pressable
                style={[styles.more, styles.backLayout]}
                onPress={() => setMoreIconVisible(!moreIconVisible)}
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

        <FlatList
          data={searchQuery === "" ? events : filteredEvents}
          renderItem={renderItem}
          keyExtractor={(item) => item.eventid.toString()}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>

      <Modal animationType="fade" transparent visible={moreIconVisible}>
        <View style={styles.moreIconOverlay}>
          <Pressable style={styles.moreIconBg} onPress={closeMoreIcon} />
          <Menu onClose={() => setMoreIconVisible(false)} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 12, // Adjust as needed for the desired spacing
  },
  frameFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  frame1Layout: {
    flex: 1, 
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
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24, // Adjust the height as needed
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
    marginRight: 20,
  },
  frame1: {
    width: "100%",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  frame: {
    flexDirection: "row",
    width: "100%",
    height: 29,
    alignItems: "center",
    overflow: "hidden",
  },
  searchInput: {
    flex: 1,
    marginLeft: 50,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorTypographyTitle,
    alignSelf: 'center',
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
    justifyContent: "flex-start",
    paddingHorizontal: Padding.p_5xl,
    paddingTop: Padding.p_10xl,
    paddingBottom: Padding.p_6xs,
    overflow: "hidden",
    width: "100%",
  },
});

export default SeeAllEvents;
