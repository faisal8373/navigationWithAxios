import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";
import axios from "axios";

type RegisterProps = StackScreenProps<RootStackParamList, "Register">;

const Register = ({ navigation }: RegisterProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //using auth and firestore
  const createNewUser = async () => {
    if (name != "" && email != "" && password != "") {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((cred) => {
          addUser(cred.user.uid);
          console.log("User account created & signed in!");
          createAlert("Successful", "New user created");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            console.log("That email address is already in use!");
            createAlert("Duplicate user", error.code);
          }

          if (error.code === "auth/invalid-email") {
            console.log("That email address is invalid!");
            createAlert("Invalid email", "Please porvide valid email address");
          }

          console.error(error);
        });
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      createAlert("Required", "All fields required");
    }
  };
  const createAlert = (title: string, msg: string) => {
    Alert.alert(title, msg, [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      { text: "OK", onPress: () => {} },
    ]);
  };
  const addUser = async (uid: string) => {
    firestore()
      .collection("Users")
      .doc(uid)
      .set({
        name,
        email,
        password,
      })
      .then(() => {
        console.log("User added!");
      });
    navigation.navigate("Welcome", { username: name });
  };

  //using to do api
  const newUser = async () => {
    if (
      name != "" &&
      email != "" &&
      password != "" &&
      password === confirmPassword
    ) {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://complete-todolist.onrender.com/api/v1/register",
          {
            name: name,
            email: email,
            password: password,
          }
        );
        if (response.status === 200) {
          Alert.alert("Sign up", "User added seccessfully");
          setLoading(false);
        } else {
          Alert.alert("Sign up", "Sign up failed");
          setLoading(false);
        }
      } catch (error) {
        console.log("Error", error);
        setLoading(false);
      }
    } else {
      Alert.alert("Required", "All fields required");
    }
  };
  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={"green"} size={60} />
        </View>
      ) : (
        <ScrollView>
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
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Full Name"
                  value={name}
                  onChangeText={setName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your Email"
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Enter Password"
                  value={password}
                  onChangeText={setPassword}
                />

                <TextInput
                  style={[
                    styles.input,
                    password !== confirmPassword
                      ? { borderColor: "red", borderWidth: 2 }
                      : null,
                  ]}
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
              </View>

              <Pressable style={styles.button} onPress={newUser}>
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
        </ScrollView>
      )}
    </>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  subContainer: {
    marginBottom: 20,
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
    marginBottom: 10,
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
    padding: 10,
    paddingLeft: 15,
    borderRadius: 30,
    backgroundColor: "white",
    margin: 10,
    fontSize: 18,
  },
  form: {
    width: "100%",
    marginBottom: 10,
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
