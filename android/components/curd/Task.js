import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Button,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import { block } from "react-native-reanimated";
const Tasks = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState("true");
  const [itemId, setItemId] = useState(null);

  const saveData = async () => {
    if ((name !== null && name !== "", phone !== null && phone !== "")) {
      let user = {
        name,
        phone,
        key: Math.random(),
      };

      if (phone.length !== 10) {
        const arrData = [user];

        const storedData = await AsyncStorage.getItem("user");
        const storedDataParsed = JSON.parse(storedData);
        setData(storedDataParsed);

        let newData = [];

        if (storedData === null) {
          // save
          await AsyncStorage.setItem("user", JSON.stringify(arrData));
        } else {
          newData = [...storedDataParsed, user];
          await AsyncStorage.setItem("user", JSON.stringify(newData));
        }

        Keyboard.dismiss();
        setName("");

        setPhone("");
      }
    }
  };

  useEffect(() => {
    //AsyncStorage.clear();
    retrieveData();
  });

  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem("user");
      const value = JSON.parse(valueString);
      setData(value);
    } catch (error) {
      console.log(error);
    }
  };

  const clearData = async (id) => {
    if (data !== null) {
      const newData = data.filter((_, index) => index !== id);
      setData(newData);
      await AsyncStorage.setItem("user", JSON.stringify(newData));
    }
  };

  const changeData = async (id) => {
    setToggle(false);
    const changedData = data.map((item, index) => {
      if (index === id) {
        setName(item.name);
        setPhone(item.phone);
      }
      return item;
    });

    setData(changedData);
    setItemId(id);
    await AsyncStorage.setItem("user", JSON.stringify(changedData));
  };

  const updateData = async () => {
    setToggle(true);
    data[itemId].name = name;
    data[itemId].phone = phone;

    await AsyncStorage.setItem("user", JSON.stringify(data));
    Keyboard.dismiss();
    setName("");
    setPhone("");
  };

  return (
    <SafeAreaView>
      <View >
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "#000080", fontWeight: "bold", fontSize: 25 }}>
            Personal details
          </Text>
          <TextInput
            style={{
              height: 50,
              fontSize: 15,
              backgroundColor: "white",
              // color: "black",
              borderRadius: 10,

              borderColor: 'gray', borderWidth: 1,
               
            }}
            placeholder="Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={{
              height: 50,
              fontSize: 15,
              backgroundColor: "white",
              color: "black",
              borderRadius: 10,
              marginTop: 10,
              borderColor: 'gray', borderWidth: 1,
            }}
            placeholder="Phone"
            value={phone}
            keyboardType="phone-pad"
            onChangeText={(text) => setPhone(text)}
          />
          <Button
            color="green"
            title={toggle ? "save data" : "update changes"}
            name="add"
            onPress={toggle ? saveData : updateData}
          />
          <Text>List of Individuals</Text>
          <ScrollView >
            {data !== null
              ? data.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        backgroundColor: "#E0FFFF",
                        marginTop: 2,
                        borderRadius: 5,
                        borderbottomColor:'balck', borderBottomWidth:1,

                        paddingHorizontal: 10,

                      }}
                    >
                      <View>
                        {/* <Text >{item}</Text> */}
                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 20,
                            marginLeft: 2,
                          }}
                        >
                          {/* {index + 1}.Name:  */}
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            // fontWeight: "bold",
                            fontSize: 20,
                            marginLeft: 2,
                            textAlign: "left",
                          }}
                        >
                          {/* Number: */}
                          {item.phone}
                        </Text>

                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            // width:100
                          }}
                        >
                          <Button
                            color="red"
                            onPress={() => clearData(index)}
                            title="Clear"
                          ></Button>
                          <Button
                            color="#FFD700"
                            onPress={() => changeData(index)}
                            title="Edit"
                          ></Button>
                        </View>
                      </View>
                    </View>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tasks;
