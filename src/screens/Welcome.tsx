import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { RootStackParamList } from "@/app/(tabs)";
import { FlatList, TextInput } from "react-native-gesture-handler";
import axios from "axios";

type WelcomeProps = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome = ({ route }: WelcomeProps) => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    "Learning Programming by 12PM",
    "Learn how to cook by 1PM",
    "Learn how to play at 2PM",
  ]);
  const [id, setId] = useState(tasks.length + 1);

  const sendTaskToApi = async () => {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://complete-todolist.onrender.com/api/v1/addtask",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${route.params.token}`,
      },
      data: {
        name: "Faisal",
        email: "sdfadf",
        password: "12345678",
        task: newTask,
      },
    };
    axios
      .request(config)
      .then((response) => {
        // console.log(response.status);
        // console.log(response.data.taskData[0]._id);

        setNewTask("");
      })
      .catch((error) => {
        console.log("Failed ", error.response);
      });
    // const config = {
    //   headers: {
    //     Authorization: route.params.token,
    //   },
    // };
    // try {
    //   const response = await axios.post(
    //     "https://complete-todolist.onrender.com/api/v1/addtask",
    //     newTask,
    //     config
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const addTask = () => {
    if (newTask) {
      let arr = [...tasks];
      arr.push(newTask);
      setTasks(arr);
      sendTaskToApi();
      // setNewTask("");
    }
  };
  const removeTask = () => {
    let arr = [...tasks];
    arr.splice(id, 1);
    setTasks(arr);
    setId(tasks.length + 10);
    // console.log(index);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.shape}
          source={require("../../assets/images/shape.png")}
        />

        <View style={styles.subContainer}>
          <View style={styles.profile}>
            <Image
              style={styles.user}
              source={require("../../assets/images/user.png")}
            />
            <Text style={styles.newuser}>Welcome {route.params.username}</Text>
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

            <View>
              {tasks.map((task, index) => (
                <BouncyCheckbox
                  style={styles.checkbox}
                  key={index}
                  size={25}
                  fillColor="green"
                  unFillColor="#FFFFFF"
                  text={task}
                  iconStyle={{ borderColor: "green" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={() => {
                    setId(index);
                  }}
                />
              ))}

              {/* <FlatList
                data={taskList}
                keyExtractor={(index) => index.toString()}
                renderItem={({ index }) => (
                  <BouncyCheckbox
                    style={styles.checkbox}
                    key={index}
                    size={25}
                    fillColor="green"
                    unFillColor="#FFFFFF"
                    text={taskList[index]}
                    iconStyle={{ borderColor: "green" }}
                    innerIconStyle={{ borderWidth: 2 }}
                    onPress={(isChecked: boolean) => {
                      console.log(isChecked);
                    }}
                  />
                )}
              /> */}
              <TextInput
                style={styles.input}
                placeholder="Add new task"
                value={newTask}
                onChangeText={setNewTask}
              />
              <View style={styles.actionBtns}>
                <Pressable style={styles.button} onPress={addTask}>
                  <Text style={styles.btnText}>Add Task</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={removeTask}>
                  <Text style={styles.btnText}>Remove Task</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
    width: 150,
    height: 135,
    objectFit: "contain",
  },
  profile: {
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  newuser: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "#50C2C9",
    borderRadius: 10,
    width: 150,
    alignSelf: "center",
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  timeCard: {
    width: "100%",
    padding: 20,
  },
  time: {
    textAlign: "right",
    fontWeight: "bold",
  },
  input: {
    alignItems: "stretch",
    padding: 10,
    paddingLeft: 15,
    borderRadius: 30,
    backgroundColor: "#ebf5ee",
    margin: 10,
    fontSize: 18,
  },
  taskCard: {
    marginBottom: 50,
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
    padding: 10,
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
    flex: 1,

    objectFit: "contain",
    alignSelf: "center",
  },
  actionBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
