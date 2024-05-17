import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";

type LoginProps = StackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: LoginProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.shape}
        source={require("../../assets/images/shape.png")}
      />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Welcome Back</Text>

        {/* <Pressable
        style={styles.button}
        // onPress={() => navigation.push("Home")} // push given screen on top of stack
        // onPress={() => navigation.navigate("Welcome")} //this navigates to welcome screen and delete stack
        // onPress={() => navigation.replace("Welcome")} // this does same but keep stack
        // onPress={() => navigation.pop(5)} // this goes back number of given screens
        onPress={() => navigation.popToTop()} // goes to first screen and remove stack
      >
        <Text style={styles.btnText}>Go to Welcome</Text>
      </Pressable> */}
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder="Enter your Email" />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter Password"
          />
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.forgotPassword}> Forgot password?</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Welcome")} // goe to first screen and remove stack
        >
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
        <View style={styles.footer}>
          <Text>
            <Pressable>
              <Text style={styles.paragraph}>Don't have an account! </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signUp}> Sign Up</Text>
            </Pressable>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

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
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  input: {
    alignItems: "stretch",
    padding: 15,
    borderRadius: 30,
    backgroundColor: "white",
    margin: 10,
    fontSize: 18,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    fontFamily: "sans-serif",
    textAlign: "center",
    margin: 10,
  },
  form: {
    width: "100%",
  },
  forgotPassword: {
    color: "#50c2c9",
    fontSize: 20,
    fontWeight: "bold",
    margin: 30,
  },
  footer: {
    margin: 30,
  },
  signUp: {
    color: "#50c2c9",
    fontSize: 20,
    fontWeight: "bold",
  },
  paragraph: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "sans-serif",
    textAlign: "center",
  },
});
