import "react-native-gesture-handler";
import Welcome from "@/src/screens/Welcome";
import Home from "../../src/screens/Home";
import ProductList from "@/src/screens/ProductList";
import ProductDetail from "@/src/screens/ProductDetail";
import {
  createStackNavigator,
  CardStyleInterpolators,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  ProductList: undefined;
  ProductDetail: undefined;
};

export default function HomeScreen() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: { backgroundColor: "tomato" },
      }}
    >
      <Stack.Screen
        options={{ title: "Welcome Screen", cardShadowEnabled: true }}
        name="Welcome"
        component={Welcome}
      />
      <Stack.Screen
        options={{
          title: "Home Screen",
          cardShadowEnabled: true,
          headerStyleInterpolator: HeaderStyleInterpolators.forSlideRight,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          title: "Product List",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
        name="ProductList"
        component={ProductList}
      />
      <Stack.Screen
        options={{ title: "Product Detail" }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}
