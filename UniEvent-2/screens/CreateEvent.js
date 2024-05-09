import React, { useState, useCallback, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, Modal, TextInput, TouchableOpacity, ScrollView, Button, Platform  } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import Menu from "../components/Menu";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import DateTimePicker from '@react-native-community/datetimepicker';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

const CreateEvent = () => {
  const [eventName, setEventName] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventPass, setEventPass] = useState('');
  const [eventQuantity, setEventQuantity] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const navigation = useNavigation();
  const [moreIconVisible, setMoreIconVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios'); // Only show date picker on android
    setDate(currentDate);
    // You can handle storing the date in the database here
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios'); // Only show time picker on android
    setTime(currentTime);
    // You can handle storing the time in the database here
  };

  const openMoreIcon = useCallback(() => {
    setMoreIconVisible(true);
  }, []);

  const closeMoreIcon = useCallback(() => {
    setMoreIconVisible(false);
  }, []);

  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const handleApply = async () => {
 
    const { data: lastEvent, error: lastEventError } = await supabase
    .from('events')
    .select('eventid')
    .order('eventid', { ascending: false })
    .limit(1);

    if (lastEventError) {
      console.error('Error fetching last event id:', lastEventError.message);
      return;
    }

    // Calculate the new id by incrementing the last id by 1
    const newId = lastEvent.length > 0 ? lastEvent[0].eventid + 1 : 1;

    const formattedTime = time.toLocaleTimeString('en-US', { hour12: false });

    try {
      const { data, error } = await supabase
        .from('events') // Replace 'events' with your table name
        .insert([
          {
            eventid: newId,
            title: eventName,
            description: eventDescription, // Get the description value from the TextInput
            ticketprice: eventPass, // Get the pass price value from the TextInput
            ticketsavailable: eventQuantity, // Get the pass quantity value from the TextInput
            location: eventLocation, // Get the location value from the TextInput
            date: date.toISOString(), // Convert the date object to a string in ISO format
            time: formattedTime, // Convert the time object to a string in ISO format
          },
        ]);
  
      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
        // Reset or clear form fields if needed
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <View style={styles.createEvent}>
        <View style={styles.frame}>
          <View style={[styles.frameChild, styles.frameChildPosition]} />
          <View style={styles.frame1}>
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
            <Text style={styles.helloAshfak}>Create Event</Text>
            <Pressable
              style={[styles.more, styles.backLayout]}
              onPress={openMoreIcon}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/more.png")}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.section3}>
        
        <View style={[styles.frame2, styles.frameLayout1]}>
          <View style={styles.frame3}>
            <View style={[styles.descriptionParent, styles.frameLayout1]}>
              <Text style={styles.eventTypo}>Description</Text>
              <View style={styles.yourEmail}>
                <View style={[styles.emailBackground, styles.frameChildPosition]} />
                <TextInput
                    style={styles.aboutEvent} // Add your custom input styles here
                    placeholder="Enter Description"
                    value={eventDescription}
                    onChangeText={setEventDescription}
                  />
              </View>
            </View>
            <View style={[styles.frame4, styles.frameLayout1]}>
              <Text style={[styles.passPrice, styles.eventTypo]}>
                Pass Price and Quantity
              </Text>
              <View style={[styles.frameGroup, styles.frameGroupLayout1]}>
                <View style={styles.frame6}>
                <TextInput
                    style={styles.enterPassPrice1} // Add your custom input styles here
                    placeholder="Price"
                    value={eventPass}
                    onChangeText={setEventPass}
                  />
                </View>
              </View>
              <View style={[styles.frameGroup, styles.frameGroupLayout2]}>
                <View style={styles.frame6}>
                <TextInput
                    style={styles.enterPassPrice1} // Add your custom input styles here
                    placeholder="Quantity"
                    value={eventQuantity}
                    onChangeText={setEventQuantity}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.framePosition]}>
              <View style={[styles.groupParent, styles.frameGroupLayout]}>
                <Image
                  style={styles.frame9Position}
                  contentFit="cover"
                  source={require("../assets/group-182071.png")}
                />
                <View style={styles.frame5}>
                  <TextInput
                    style={styles.enterPassPrice1} // Add your custom input styles here
                    placeholder="Enter location"
                    value={eventLocation}
                    onChangeText={setEventLocation}
                  />
                </View>
              </View>
              <Text style={[styles.location, styles.eventTypo]}>Location</Text>
            </View>
            <View style={[styles.frame11, styles.frameLayout1]}>
              <View style={[styles.timeDateParent, styles.frameViewPosition]}>
                <Text
                  style={[styles.location, styles.eventTypo]}
                >{`Time & Date`}</Text>
                <View style={[styles.frameView, styles.frameViewPosition]}>
                    <Pressable onPress={showDatePickerModal} style={[
                      styles.chooseFromCalenderParent,
                      styles.wrapperBorder,
                    ]}>
                    <Image
                      style={[styles.calendarIcon, styles.iconLayout]}
                      contentFit="cover"
                      source={require("../assets/calendar1.png")}
                    />
                    <Text style={[styles.chooseFromCalender, styles.todayTypo]}>
                    {`Selected: ${date.toLocaleDateString()}`}
                    </Text>
                    <Image
                      style={[styles.frameChild1, styles.frameLayout]}
                      contentFit="cover"
                      source={require("../assets/vector-9.png")}
                    />
                    </Pressable>
                    {showDatePicker && (
                  <DateTimePicker
                    testID="datePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display="default"
                    onChange={handleDateChange}
                  />
                )}
                </View>
                <View style={[styles.frameView1, styles.frameViewPosition]}>
                    <Pressable onPress={showTimePickerModal} style={[
                      styles.chooseFromCalenderParent,
                      styles.wrapperBorder,
                    ]}>
                        <Image
                        style={[styles.calendarIcon, styles.iconLayout]}
                        contentFit="cover"
                        source={require("../assets/clock.png")}
                      />
                        <Text style={[styles.chooseFromCalender, styles.todayTypo]}>
                        {`Selected: ${time.toLocaleTimeString()}`}
                        </Text>
                      <Image
                        style={[styles.frameChild1, styles.frameLayout]}
                        contentFit="cover"
                        source={require("../assets/vector-9.png")}
                      />
                    </Pressable>
                    {showTimePicker && (
                  <DateTimePicker
                    testID="timePicker"
                    value={time}
                    mode="time"
                    is24Hour={true}
                    display="default"
                    onChange={handleTimeChange}
                  />
                )}
                </View>


              </View>
            </View>
            <Text style={[styles.event, styles.eventTypo]}>Event</Text>
            <View style={[styles.frameParent2, styles.frameGroupLayout]}>
              <View style={styles.frame5}>
                <TextInput
                    style={styles.enterPassPrice1} // Add your custom input styles here
                    placeholder="Enter event name"
                    value={eventName}
                    onChangeText={setEventName}
                  />
              </View>
              <View style={[styles.frame9, styles.frame9Position]}>
                <View style={styles.frameInner1}>
                </View>
                <Image
                  style={styles.partyIcon}
                  source={require("../assets/party.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.frame14}>
            <View style={[styles.frameParent3, styles.framePosition]}>
              <View style={styles.rectangleContainer}>
                <Image
                  style={[styles.rectangleIcon, styles.rectangleIconLayout]}
                  contentFit="cover"
                  source={require("../assets/rectangle1.png")}
                />
                <Pressable onPress={handleApply}>
                <Text style={[styles.continue, styles.continueTypo]}>
                  Apply
                </Text>
                </Pressable>
              </View>
              <View
                style={[styles.continueWrapper, styles.rectangleIconLayout]}
              >
                <Text style={[styles.continue1, styles.continueTypo]}>
                  Reset
                </Text>
              </View>
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
    </>
  );
};

const styles = StyleSheet.create({
  section3: {
    flex: 1,
  },

  frameChildPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  backLayout: {
    height: 22,
    width: 22,
  },
  frameLayout1: {
    width: 335,
    position: "absolute",
  },
  frameLayout2: {
    width: 335,
    position: "absolute",
  },
  eventTypo: {
    lineHeight: 34,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  frameGroupLayout: {
    height: 60,
    borderRadius: Border.br_mini,
    width: 334,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  frameGroupLayout1: {
    height: 60,
    borderRadius: Border.br_mini,
    width: 120,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  frameGroupLayout2: {
    height: 60,
    left : 180,
    borderRadius: Border.br_mini,
    width: 120,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    position: "absolute",
  },
  frameLayout: {
    height: 9,
    width: 5,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorForestgreen_100,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 34,
  },
  frame9Position: {
    height: 45,
    width: 45,
    left: 8,
    top: 8,
    position: "absolute",
  },
  rectangleSpaceBlock: {
    paddingBottom: 7,
    paddingRight: 7,
    paddingTop: 7,
    paddingLeft: 7,
    backgroundColor: Color.colorForestgreen_200,
    borderRadius: 12,
    justifyContent: "flex-end",
    height: 45,
    width: 45,
    alignItems: "center",
  },
  framePosition: {
    width: 334,
    left: 0,
    position: "absolute",
  },
  frameViewPosition: {
    width: 322,
    left: 0,
    position: "absolute",
  },
  wrapperBorder: {
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    height: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  todayTypo: {
    textAlign: "center",
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 25,
    top: 9,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  rectangleIconLayout: {
    borderRadius: Border.br_sm,
    position: "absolute",
  },
  continueTypo: {
    textTransform: "uppercase",
    letterSpacing: 1,
    top: "50%",
    textAlign: "center",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  helloAshfak: {
    fontSize: FontSize.size_5xl,
    marginLeft: 64,
    textAlign: "left",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    color: Color.colorTypographyTitle,
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
    marginLeft: 64,
  },
  frame1: {
    top: 29,
    left: 24,
    width: 327,
    height: 29,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frame: {
    width: 375,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
    height: 812,
  },
  emailBackground: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    height: 120,
    left: "10%",
    right: "0%",
    top: 0,
    position: "absolute",
  },
  aboutEvent: {
    left: 19,
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratRegular,
    top: 9,
    lineHeight: 34,
    width: "100%",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  yourEmail: {
    marginTop: 15,
    height: 218,
    alignSelf: "stretch",
  },
  descriptionParent: {
    top: 475,
    left: 1,
  },
  passPrice: {
    top: 4,
    left: 0,
    position: "absolute",
  },
  frameItem: {
    top: 7,
    left: 240,
  },
  enterPassPrice: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    lineHeight: 25,
    color: Color.colorGray_300,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  frame5: {
    top: 15,
    left: 71,
    width: 245,
    height: 25,
    overflow: "hidden",
    position: "absolute",
  },
  frameInner: {
    borderRadius: 10,
    width: 31,
    height: 31,
    backgroundColor: Color.colorLavender_100,
  },
  mapPin: {
    width: 15,
    height: 15,
    marginTop: -22,
    overflow: "hidden",
  },
  text: {
    marginTop: -39,
  },
  frame6: {
    justifyContent: "flex-start",
    height: 45,
    width: "100%",
    left: 15,
    top: 15,
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
  },
  frameParent: {
    top: 46,
    left: 1,
    backgroundColor: Color.colorLavender_100,
  },
  frame4: {
    top: 365,
    height: 106,
    left: 1,
    overflow: "hidden",
  },
  enterPassPrice1: {
    lineHeight: 25,
    width: "100%",
    color: Color.colorGray_300,
    fontFamily: FontFamily.montserratRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  text1: {
    top: 6,
    left: 15,
    position: "absolute",
  },
  frame9: {
    overflow: "hidden",
  },
  frameGroup: {
    top: 46,
    backgroundColor: Color.colorWhite,
    left: 1,
  },
  groupParent: {
    top: 46,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  location: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  frameContainer: {
    top: 260,
    height: 106,
  },
  today: {
    left: 18,
    color: Color.colorGray_100,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  todayWrapper: {
    width: 81,
    left: 0,
    top: 0,
  },
  tomorrow: {
    left: 16,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    color: Color.colorGray_300,
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
    color: Color.colorGray_100,
    textAlign: "center",
    fontSize: FontSize.size_mini,
    left: 15,
  },
  thisWeekWrapper: {
    left: 215,
    width: 107,
    top: 0,
  },
  frameParent1: {
    height: 42,
    width: 322,
    left: 0,
    top: 0,
    position: "absolute",
  },
  chooseFromCalender: {
    left: 41,
    color: Color.colorGray_100,
    textAlign: "center",
    fontSize: FontSize.size_mini,
  },
  calendarIcon: {
    height: "55.48%",
    width: "8.71%",
    top: "21.43%",
    right: "85.48%",
    bottom: "23.1%",
    left: "5.81%",
    position: "absolute",
  },
  frameChild1: {
    top: 17,
    left: 216,
  },
  chooseFromCalenderParent: {
    width: 250,
  },
  frameView: {
    height: 98,
    top: 46,
  },
  frameView1: {
    height: 98,
    top: 90,
  },
  timeDateParent: {
    height: 144,
    top: 0,
  },
  frame11: {
    top: 122,
    height: 144,
    left: 1,
    overflow: "hidden",
  },
  event: {
    left: 5,
    top: 0,
    position: "absolute",
  },
  frameInner1: {
    backgroundColor: Color.colorForestgreen_200,
    borderRadius: 12,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    top: 0,
    position: "absolute",
  },
  partyIcon: {
    top: 10,
    left: 11,
    width: 23,
    height: 23,
    position: "absolute",
  },
  frameParent2: {
    top: 48,
    backgroundColor: Color.colorWhite,
    left: 1,
  },
  frame3: {
    height: 632,
    alignSelf: "stretch",
  },
  rectangleIcon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  continue: {
    marginTop: 18,
    left: "34.59%",
    color: Color.colorLavender_100,
  },
  rectangleContainer: {
    left: 149,
    width: 185,
    height: 58,
    top: 0,
    position: "absolute",
  },
  continue1: {
    marginTop: -10.5,
    left: "28.24%",
    color: Color.colorLavender_100,
    textTransform: "uppercase",
    letterSpacing: 1,
    top: "50%",
  },
  continueWrapper: {
    width: 131,
    height: 59,
    borderWidth: 1,
    borderColor: Color.colorGainsboro_200,
    borderStyle: "solid",
    borderRadius: Border.br_sm,
    backgroundColor: Color.colorForestgreen_100,
    left: 0,
    top: 0,
  },
  frameParent3: {
    height: 58,
    top: 0,
  },
  frame14: {
    marginTop: 23,
    height: 58,
    alignSelf: "stretch",
    overflow: "hidden",
  },
  frame2: {
    top: 76,
    left: 20,
    alignItems: "center",
    width: 335,
    overflow: "hidden",
  },
  createEvent: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default CreateEvent;
