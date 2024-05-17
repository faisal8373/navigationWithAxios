import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";

type SplashProps = StackScreenProps<RootStackParamList, "SplashScreen">;

const SplashScreen = ({ navigation }: SplashProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.shape}
        source={require("../../assets/images/shape.png")}
      />
      <View style={styles.subContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/getting_started.png")}
        />
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Gets things with TODs</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam
            facilis, quas suscipit unde accusantium error aut voluptate dolores
            ratione cumque laborum dolor iusto perspiciatis delectus ea ipsa
            animi blanditiis.
          </Text>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.btnText}>Getting Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "flex-start",
    // justifyContent: "space-between",
    // alignItems: "center",
    // justifyContent: "space-evenly",
    // borderWidth: 3,
  },
  subContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  shape: {
    width: 200,
    height: 183,
    objectFit: "contain",
  },
  image: {
    width: 350,
    height: 180,
    objectFit: "contain",
  },
  button: {
    padding: 15,
    backgroundColor: "#50C2C9",
    width: 380,
    paddingHorizontal: 50,
    borderRadius: 8,
  },
  btnText: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "500",
    textAlign: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  paragraph: {
    fontSize: 13,
    fontFamily: "",
    textAlign: "center",
    lineHeight: 25,
  },
  textContainer: {
    width: "70%",
    marginVertical: 10,
  },
});
