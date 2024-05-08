const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome";
import VuesaxlineareyeSlash from "./components/VuesaxlineareyeSlash";
import SignUpPage from "./screens/SignUpPage";
import Reset from "./screens/Reset";
import Onboarding from "./screens/Onboarding";
import Onboarding1 from "./screens/Onboarding1";
import Search from "./screens/Search";
import Menu from "./components/Menu";
import SeeAllEvents from "./screens/SeeAllEvents";
import FollowRequests from "./screens/FollowRequests";
import EmptyNotification from "./screens/EmptyNotification";
import Notification1 from "./screens/Notification1";
import Share1 from "./screens/Share1";
import Messages from "./screens/Messages";
import Verification from "./screens/Verification";
import Chat from "./screens/Chat";
import Onboarding2 from "./screens/Onboarding2";
import MapView from "./screens/MapView";
import EmptyEvents from "./screens/EmptyEvents";
import OrganizerProfileReview from "./screens/OrganizerProfileReview";
import Filter from "./components/Filter";
import EventDetails from "./screens/EventDetails";
import OrganizerProfileEvent from "./screens/OrganizerProfileEvent";
import Frame from "./screens/Frame";
import CreateEvent from "./screens/CreateEvent";
import Home from "./screens/Home";
import SignInPage from "./screens/SignInPage";
import Profile from "./screens/Profile";
import Invite from "./components/Invite";
import FrameComponent from "./components/FrameComponent";
import FrameComponent1 from "./components/FrameComponent1";
import FrameComponent2 from "./components/FrameComponent2";
import FrameComponent3 from "./components/FrameComponent3";
import FrameComponent4 from "./components/FrameComponent4";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 201 } }}
      drawerContent={(props) => <Menu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SeeAllEvents"
        component={SeeAllEvents}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="EmptyEvents"
        component={EmptyEvents}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="SignInPage"
        component={SignInPage}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "MontserratAlternates-SemiBold": require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VuesaxlineareyeSlash"
              component={VuesaxlineareyeSlash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reset"
              component={Reset}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FollowRequests"
              component={FollowRequests}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EmptyNotification"
              component={EmptyNotification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Share1"
              component={Share1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verification"
              component={Verification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MapView"
              component={MapView}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrganizerProfileReview"
              component={OrganizerProfileReview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EventDetails"
              component={EventDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrganizerProfileEvent"
              component={OrganizerProfileEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateEvent"
              component={CreateEvent}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Invite"
              component={Invite}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
