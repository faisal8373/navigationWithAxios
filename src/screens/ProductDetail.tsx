import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";

type ProductDetailProps = StackScreenProps<RootStackParamList, "ProductDetail">;

const ProductDetail = ({ navigation }: ProductDetailProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btnText}>Product Details Here</Text>

      <Pressable
        style={styles.button}
        // onPress={() => navigation.push("Home")} // push given screen on top of stack
        // onPress={() => navigation.navigate("Welcome")} //this navigates to welcome screen and delete stack
        // onPress={() => navigation.replace("Welcome")} // this does same but keep stack
        // onPress={() => navigation.pop(5)} // this goes back number of given screens
        onPress={() => navigation.popToTop()} // goe to first screen and remove stack
      >
        <Text style={styles.btnText}>Go to Welcome</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.goBack()} // goe to first screen and remove stack
      >
        <Text style={styles.btnText}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#1e9e9a",
  },
  button: {
    padding: 15,
    backgroundColor: "tomato",
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  btnText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
  },
});
