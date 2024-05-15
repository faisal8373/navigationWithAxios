import { Pressable, StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";

type HomeProps = StackScreenProps<RootStackParamList, "Home">;

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("ProductList")}
      >
        <Text>Go to Products List</Text>
      </Pressable>
    </View>
  );
};

export default Home;

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
