import AsyncStorage from "@react-native-community/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState( );

  useEffect(() => {
    const getUser = async () => {
      const loggedInUser = await AsyncStorage.getItem("loggedIn");
      if (loggedInUser) {
        navigation.navigate("logout");
      }
      var userLogin = await AsyncStorage.getItem("users");
      console.log(JSON.parse(userLogin));
      setUsers(JSON.parse(userLogin));
    };
    getUser();
  }, []);
  const emailChangeHandler = async (e) => {
    setEmail(e);
  };
  const passwordChangeHandler = async (e) => {
    setPassword(e);
  };
  const signup = () => {
    navigation.navigate("create-account");
  };
  const resetPassword = () => {
    navigation.navigate("reset-password");
  };
  const loginClickHandler = () => {
    if (email === "" || password === "") {
      alert("please be fileds corret details");
    }
    if (
      users !== null &&
      users.length > 0 &&
      users.some(
        (user) => user.useremail === email && user.password === password
      )
    ) {
       AsyncStorage.setItem("loggedIn", true);
     
      setLoggedIn(loggedIn);
      
      console.log("users", users);
      navigation.navigate("logout");
      // alert("login succesfully")
    } else {
      console.log("users", users);
      alert("user not registered");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require("../../img/login.png")}
        style={{ width: 200, height: 200, marginLeft: 80 }}
      />
      <Text
        style={{
          color: "#8A2BE2",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Welcome back.
      </Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={emailChangeHandler}
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 15,
          marginTop: 25,
          borderRadius: 5,
        }}
      ></TextInput>
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={passwordChangeHandler}
        style={{
          borderColor: "black",
          borderWidth: 1,
          padding: 15,
          marginTop: 25,
          borderRadius: 5,
        }}
      ></TextInput>
      <TouchableOpacity onPress={resetPassword}>
        <Text
          style={{
            textAlign: "right",
            marginTop: 5,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={loginClickHandler}
        style={{
          backgroundColor: "blue",
          padding: 20,
          borderRadius: 5,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signup}>
        <Text style={{ color: "black", fontSize: 15, marginTop: 5 }}>
          Don't have an account?
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#8A2BE2" }}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginPage;
