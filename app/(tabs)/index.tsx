import "react-native-gesture-handler";
import SplashScreen from "@/src/screens/SplashScreen";
import Register from "../../src/screens/Register";
import Welcome from "@/src/screens/Welcome";
import Login from "@/src/screens/Login";
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";

export type RootStackParamList = {
  SplashScreen: undefined;
  Register: undefined;
  Login: undefined;
  Welcome: { username: string; token: string };
};

export default function HomeScreen() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#50C2C9" },
      }}
    >
      <Stack.Screen
        options={{ title: "Getting Started", cardShadowEnabled: true }}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{
          title: "Register",
          cardShadowEnabled: true,
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          title: "Login",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ title: "Welcome" }}
        name="Welcome"
        component={Welcome}
      />
    </Stack.Navigator>
  );
}
