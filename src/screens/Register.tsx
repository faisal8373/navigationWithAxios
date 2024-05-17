import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";
import { TextInput } from "react-native-gesture-handler";

type RegisterProps = StackScreenProps<RootStackParamList, "Register">;

const Register = ({ navigation }: RegisterProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.shape}
        source={require("../../assets/images/shape.png")}
      />
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Welcome onboard!</Text>
          <Text style={styles.paragraph}>
            Let's help to meet up your tasks.
          </Text>
        </View>

        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Enter your Full Name" />
          <TextInput style={styles.input} placeholder="Enter your Email" />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter Password"
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Confirm Password"
          />
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.btnText}>Register</Text>
        </Pressable>
        <View>
          <Text>
            <Pressable>
              <Text style={styles.footer}>Already have an account! </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signIn}> Sign In</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
    width: 150,
    height: 135,
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
  textContainer: {},
  input: {
    alignItems: "stretch",
    padding: 15,
    borderRadius: 30,
    backgroundColor: "white",
    margin: 10,
    fontSize: 18,
  },
  form: {
    width: "100%",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: 10,
  },
  paragraph: {
    fontSize: 18,
    fontFamily: "",
    textAlign: "center",
    lineHeight: 25,
  },
  signIn: {
    color: "#50c2c9",
    fontSize: 20,
    fontWeight: "bold",
  },
  footer: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
});
