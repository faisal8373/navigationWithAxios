import { StyleSheet, Text, View, StatusBar, Pressable } from "react-native";
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
        <Text>Product Name</Text>
        <Text>Product Image</Text>
        <Text>Product Price</Text>
      </Pressable>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    justifyContent: "center",
  },
  button: {
    padding: 15,
    backgroundColor: "tomato",
    borderRadius: 10,
    paddingHorizontal: 50,
  },
});
