import React, { useState, useCallback } from "react";
import { Text, StyleSheet, View, Pressable, Modal } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import Invite from "../components/Invite";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import RazorpayCheckout from "react-native-razorpay";

const EventDetails = () => {
  const [frameContainer12Visible, setFrameContainer12Visible] = useState(false);
  const navigation = useNavigation();

  const openFrameContainer12 = useCallback(() => {
    setFrameContainer12Visible(true);
  }, []);

  const closeFrameContainer12 = useCallback(() => {
    setFrameContainer12Visible(false);
  }, []);

  const payNow = async () => {
    // Replace with your payment logic
    const options = {
      description: 'Credits towards consultation',
      // image: require('../../../images/logo.png'),
      currency: 'INR',
      key: 'rzp_test_za80t23TBsd5Yw', // Replace with your Razorpay key
      amount: 12000, // Amount in paisa (e.g., 12000 for 120 INR)
      name: 'Food App',
      order_id: '', //Replace this with an order_id created using Orders API.
      prefill: {
        email: 'user@example.com',
        contact: '9876543210',
        name: 'John Doe',
      },
      theme: {color: '#EC9912'},
    };
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        navigation.navigate('OrderStatus', {
          status: 'success',
          paymentId: data.razorpay_payment_id,
          // Add other necessary data to navigate to the OrderStatus screen
        });
      })
      .catch(error => {
        // handle failure
        navigation.navigate('OrderStatus', {
          status: 'failed',
        });
      });
  };


  return (
    <>
      <View style={styles.eventDetails}>
        <View style={styles.frame}>
          <View style={styles.frame1}>
            <View style={styles.frameLayout}>
              <View style={[styles.believerParent, styles.believerPosition]}>
                <Text style={[styles.believer, styles.popularTypo]}>
                  14 December, 2023
                </Text>
                <Text style={[styles.majorLazerShowtek, styles.nowPlayingTypo]}>
                  Tuesday, 4:00PM - 9:00PM
                </Text>
              </View>
              <Image
                style={[styles.dateIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/date.png")}
              />
            </View>
            <Pressable
              style={[styles.frameGroup, styles.frameLayout]}
              onPress={() => navigation.navigate("MapView")}
            >
              <View style={[styles.believerGroup, styles.believerPosition]}>
                <Text style={[styles.believer, styles.popularTypo]}>
                  Gala Convention Center
                </Text>
                <Text
                  style={[styles.majorLazerShowtek, styles.nowPlayingTypo]}
                >{`36 Guild Street London, UK `}</Text>
              </View>
              <Image
                style={[styles.dateIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/location.png")}
              />
            </Pressable>
            <Pressable
              style={styles.imageParent}
              onPress={() => navigation.navigate("Frame")}
            >
              <Image
                style={[styles.imageIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/image.png")}
              />
              <View
                style={[styles.onLiveWrapper, styles.liveContainerShadowBox]}
              >
                <Text style={[styles.onLive, styles.liveTypo]}>Follow</Text>
              </View>
              <View style={styles.best15RockParent}>
                <Text style={[styles.best15Rock, styles.goingTypo]}>Sattu</Text>
                <Text style={[styles.nowPlaying, styles.nowPlayingTypo]}>
                  Organizer
                </Text>
              </View>
            </Pressable>
            <View style={styles.popularParent}>
              <Text style={[styles.popular, styles.popularTypo]}>
                About Event
              </Text>
              <Text
                style={[
                  styles.theDevelopmentOfContainer,
                  styles.nowPlayingTypo,
                ]}
              >
                <Text
                  style={styles.enjoyYourFavorite}
                >{`Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. `}</Text>
                <Text style={styles.readMore}>Read More...</Text>
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.navrachanaMusicFestWrapper,
              styles.navrachanaPosition,
            ]}
          >
            <Text
              style={[styles.navrachanaMusicFest, styles.navrachanaPosition]}
            >
              Navrachana Music Fest
            </Text>
          </View>
        </View>
        <LinearGradient
          style={[styles.frame2, styles.framePosition]}
          locations={[0, 0.59, 0.59]}
          colors={[
            "rgba(255, 255, 255, 0)",
            "rgba(186, 253, 155, 0.5)",
            "rgba(186, 253, 155, 0.5)",
          ]}
        >
          <View style={[styles.continueParent, styles.parentContainerFlexBox]}>
            
            <Pressable onPress={payNow}>
            <Text style={[styles.continue, styles.continueTypo]}>
              Buy Ticket $120
            </Text>
            </Pressable>
            <Image
              style={styles.frameChild}
              contentFit="cover"
              source={require("../assets/group-41.png")}
            />
          </View>
        </LinearGradient>
        <View style={[styles.frame3, styles.framePosition]}>
          <Image
            style={[styles.image77Icon, styles.framePosition]}
            contentFit="cover"
            source={require("../assets/image-77.png")}
          />
          <View style={[styles.frameContainer, styles.parentContainerFlexBox]}>
            <View style={[styles.groupParent, styles.parentContainerFlexBox]}>
              <Image
                style={styles.groupIcon}
                contentFit="cover"
                source={require("../assets/group1.png")}
              />
              <Text style={[styles.going, styles.goingTypo]}>+20 Going</Text>
            </View>
            <Pressable
              style={[styles.onLiveContainer, styles.parentContainerFlexBox]}
              onPress={openFrameContainer12}
            >
              <Text style={[styles.onLive1, styles.liveTypo]}>Invite</Text>
            </Pressable>
          </View>
          <View style={styles.frameWrapper}>
            <View style={styles.frame4}>
              <Pressable
                style={styles.back}
                onPress={() => navigation.goBack()}
              >
                <Image
                  style={styles.icon}
                  contentFit="cover"
                  source={require("../assets/back2.png")}
                />
              </Pressable>
              <Text style={[styles.helloAshfak, styles.liveTypo]}>
                Event Details
              </Text>
              <Image
                style={styles.favIcon}
                contentFit="cover"
                source={require("../assets/fav-icon.png")}
              />
            </View>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={frameContainer12Visible}>
        <View style={styles.frameContainer12Overlay}>
          <Pressable
            style={styles.frameContainer12Bg}
            onPress={closeFrameContainer12}
          />
          <Invite onClose={closeFrameContainer12} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  believerPosition: {
    height: 51,
    left: 62,
    top: 0,
    position: "absolute",
  },
  popularTypo: {
    opacity: 0.84,
    lineHeight: 34,
    textAlign: "left",
    color: Color.colorTypographyTitle,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "0%",
    position: "absolute",
  },
  nowPlayingTypo: {
    fontFamily: FontFamily.montserratRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
    overflow: "hidden",
  },
  frameLayout: {
    height: 53,
    width: 205,
  },
  liveContainerShadowBox: {
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  liveTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  goingTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  navrachanaPosition: {
    width: 339,
    top: 0,
    position: "absolute",
  },
  framePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  parentContainerFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  continueTypo: {
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  believer: {
    fontSize: FontSize.size_base,
    top: "0%",
  },
  majorLazerShowtek: {
    top: "70.59%",
    color: Color.colorTypographySubColor,
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  believerParent: {
    width: 158,
  },
  dateIcon: {
    height: "90.57%",
    width: "23.41%",
    top: "9.43%",
    right: "76.59%",
    borderRadius: Border.br_xs,
  },
  believerGroup: {
    width: 196,
  },
  frameGroup: {
    marginTop: 20,
  },
  imageIcon: {
    width: "13.46%",
    right: "86.54%",
    height: "100%",
    top: "0%",
  },
  onLive: {
    top: "25%",
    left: "16.67%",
    color: Color.colorForestgreen_100,
    textAlign: "center",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  onLiveWrapper: {
    height: "63.64%",
    width: "18.35%",
    top: "18.18%",
    right: "0%",
    bottom: "18.18%",
    left: "81.65%",
    backgroundColor: "rgba(18, 155, 65, 0.12)",
    shadowColor: "rgba(74, 210, 228, 0.08)",
    borderRadius: Border.br_6xs,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    position: "absolute",
  },
  best15Rock: {
    lineHeight: 25,
    color: "#0e0c26",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  nowPlaying: {
    top: "63.41%",
    color: "#706e8f",
    fontSize: FontSize.size_xs,
    left: "0%",
  },
  best15RockParent: {
    top: 1,
    left: 57,
    width: 60,
    height: 41,
    position: "absolute",
  },
  imageParent: {
    width: 327,
    height: 44,
    marginTop: 20,
  },
  popular: {
    marginTop: -77,
    top: "50%",
    fontSize: FontSize.size_lg,
  },
  enjoyYourFavorite: {
    color: Color.colorTypographyTitle,
  },
  readMore: {
    color: Color.colorPrimaryBlue,
  },
  theDevelopmentOfContainer: {
    top: 42,
    lineHeight: 28,
    width: 335,
    fontSize: FontSize.size_base,
    left: 0,
  },
  popularParent: {
    height: 154,
    width: 335,
    marginTop: 20,
  },
  frame1: {
    top: 110,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  navrachanaMusicFest: {
    fontSize: 35,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorTypographyTitle,
    left: 0,
  },
  navrachanaMusicFestWrapper: {
    left: 4,
    height: 86,
  },
  frame: {
    top: 271,
    left: 16,
    width: 343,
    height: 521,
    position: "absolute",
  },
  continue: {
    letterSpacing: 1,
    textTransform: "uppercase",
    width: 162,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  frameChild: {
    width: 30,
    height: 30,
  },
  continueParent: {
    borderRadius: Border.br_mini,
    width: 271,
    height: 58,
    flexDirection: "row",
    backgroundColor: Color.colorLime,
    justifyContent: "center",
  },
  frame2: {
    top: 634,
    height: 181,
    justifyContent: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_16xl,
    backgroundColor: "transparent",
    alignItems: "center",
    overflow: "hidden",
  },
  image77Icon: {
    height: 244,
    top: 0,
    width: 375,
  },
  groupIcon: {
    width: 80,
    height: 34,
  },
  going: {
    color: Color.colorRoyalblue,
    display: "flex",
    width: 84,
    height: 29,
    marginLeft: 9,
    alignItems: "center",
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  groupParent: {
    flexDirection: "row",
  },
  frameContainer12Overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  frameContainer12Bg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  onLive1: {
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  onLiveContainer: {
    width: 67,
    height: 28,
    marginLeft: 27,
    backgroundColor: Color.colorLime,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(74, 210, 228, 0.08)",
    borderRadius: Border.br_6xs,
  },
  frameContainer: {
    height: "21.9%",
    marginLeft: -147.5,
    top: "78.1%",
    left: "50%",
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorPalegreen,
    shadowColor: "rgba(90, 90, 90, 0.1)",
    width: 295,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 0,
    flexDirection: "row",
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    bottom: "0%",
    justifyContent: "center",
    position: "absolute",
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
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "500",
  },
  favIcon: {
    borderRadius: Border.br_3xs,
    width: 36,
    height: 36,
  },
  frame4: {
    width: 333,
    justifyContent: "space-between",
    height: 36,
    flexDirection: "row",
    alignItems: "center",
  },
  frameWrapper: {
    top: 45,
    left: 24,
    width: 331,
    height: 36,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  frame3: {
    top: -23,
    height: 274,
  },
  eventDetails: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorLavender_100,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default EventDetails;
