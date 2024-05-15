import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";

type ProductListProps = StackScreenProps<RootStackParamList, "ProductList">;

const ProductList = ({ navigation }: ProductListProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductDetail")}
      >
        <Text style={styles.btnText}>Product Name</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.btnText}>Go Back</Text>
      </Pressable>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
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
