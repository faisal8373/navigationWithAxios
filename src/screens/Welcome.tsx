import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";

type WelcomeProps = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
