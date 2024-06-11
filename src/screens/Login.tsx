import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "@/app/(tabs)";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import axios from "axios";

type LoginProps = StackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: LoginProps) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  //using firestore auth and database
  // const handleLogin = async () => {
  //   if (email != "" && password != "") {
  //     await auth()
  //       .signInWithEmailAndPassword(email, password)
  //       .then((response) => {
  //         // Alert.alert("Login successfully!");
  //         getUserData(response.user.uid);
  //         console.log("response :", response.user.uid);
  //         navigation.navigate("Welcome", { username: username });
  //       })
  //       .catch((error) => {
  //         if (error.code === "auth/wrong-password") {
  //           Alert.alert("Password is not correct!");
  //         }
  //         console.log("error :", error);
  //       });
  //   } else {
  //     createAlert();
  //   }
  // };
  // const createAlert = () => {
  //   Alert.alert("Fields Required", "All fields are required", [
  //     {
  //       text: "Cancel",
  //       onPress: () => console.log("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //     { text: "OK", onPress: () => console.log("OK Pressed") },
  //   ]);
  // };

  // const getUserData = async (uid: string) => {
  //   try {
  //     const user = await firestore().collection("Users").doc(uid).get();
  //     // .then((querySnapshot) => {
  //     //   querySnapshot.forEach((snapshot) => {
  //     //     // console.log(id, imageUrl, productName);
  //     //     console.log(snapshot);
  //     //   });
  //     // });
  //     // console.log(user.data()?.name);
  //     setUserName(user.data()?.name);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //using to do api
  const userLogin = async () => {
    if (email != "" && password != "") {
      setLoading(true);
      try {
        const response = await axios.post(
          "https://complete-todolist.onrender.com/api/v1/login",
          {
            email: email,
            password: password,
          }
        );
        if (response.status === 200) {
          setLoading(false);

          navigation.navigate("Welcome", {
            username: response.data.user.name,
            token: response.data.token,
          });

          // console.log(response.data.token);

          setToken(response.data.token);
        }
      } catch (error) {
        console.log("Login failed", error);
        Alert.alert("Login failed", "Invalid email/password");
        setLoading(false);
      }
    } else {
      Alert.alert("Field required", "Please enter email/password.");
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
                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your Email"
                />
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter Password"
                />
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.forgotPassword}> Forgot password?</Text>
                </Pressable>
              </View>

              <Pressable
                style={styles.button}
                onPress={userLogin} // goe to first screen and remove stack
              >
                <Text style={styles.btnText}>Login</Text>
              </Pressable>
              <View style={styles.footer}>
                <Text>
                  <Pressable>
                    <Text style={styles.paragraph}>
                      Don't have an account!{" "}
                    </Text>
                  </Pressable>
                  <Pressable onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.signUp}> Sign Up</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
  },
  subContainer: {
    marginBottom: 50,
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
