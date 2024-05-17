import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RootStackParamList } from "@/app/(tabs)";

type WelcomeProps = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ navigation }: WelcomeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.shape}
            source={require("../../assets/images/shape.png")}
          />

          <Image
            style={styles.user}
            source={{ uri: "../../assets/images/favicon.png" }}
          />
          <Text style={styles.newuser}>Welcome New User</Text>
        </View>
        <View style={styles.timeCard}>
          <Text style={styles.time}>Good Afternoon</Text>
          <Image
            style={styles.clock}
            source={require("../../assets/images/clock.png")}
          />

          <Text style={styles.task}>Task List</Text>
        </View>
        <View style={styles.taskCard}>
          <View style={styles.header}>
            <Text style={styles.task}>Daily Task</Text>
            <Text style={styles.plus}>+</Text>
          </View>
          <View style={styles.checkbox}>
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unFillColor="#FFFFFF"
              text="Learning Programming by 12PM"
              iconStyle={{ borderColor: "green" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />

            <BouncyCheckbox
              size={25}
              fillColor="green"
              unFillColor="#FFFFFF"
              text="Learn how to cook by 1PM"
              iconStyle={{ borderColor: "green" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />

            <BouncyCheckbox
              size={25}
              fillColor="green"
              unFillColor="#FFFFFF"
              text="Learn how to play at 2PM"
              iconStyle={{ borderColor: "green" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unFillColor="#FFFFFF"
              text="Have lunch at 4PM"
              iconStyle={{ borderColor: "green" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
            <BouncyCheckbox
              size={25}
              fillColor="green"
              unFillColor="#FFFFFF"
              text="Going to travel 6PM"
              iconStyle={{ borderColor: "green" }}
              innerIconStyle={{ borderWidth: 2 }}
              onPress={(isChecked: boolean) => {
                console.log(isChecked);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

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
    justifyContent: "center",
  },
  shape: {
    width: 200,
    height: 183,
    objectFit: "contain",
  },
  profile: {
    backgroundColor: "#50C2C9",
    width: "100%",
    padding: 10,
  },
  newuser: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  button: {
    padding: 15,
    backgroundColor: "#50C2C9",
    borderRadius: 10,
    paddingHorizontal: 50,
  },
  btnText: {
    fontSize: 24,
    color: "white",
    fontWeight: "500",
  },
  timeCard: {
    width: "100%",
    padding: 20,
  },
  time: {
    textAlign: "right",
    fontWeight: "bold",
  },

  taskCard: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 5,
  },
  checkbox: {
    margin: 20,
    gap: 10,
  },
  plus: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 25,
    color: "#50C2C9",
  },
  task: { textAlign: "left", fontSize: 16, fontWeight: "bold" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user: {
    width: 100,
    height: 100,
  },
  clock: {
    width: 200,
    height: 100,
  },
});
