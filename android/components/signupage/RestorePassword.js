import React from "react";
import { View, Text, Button, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { block, color } from "react-native-reanimated";
const RestorePassword = ({ navigation }) => {
  const login = () => {
    navigation.navigate("login");
  };
  return (
    <View style={{ padding: 20 }}>
      <Image
        source={require("../../img/login.png")}
        style={{ width: 200, height: 200, marginLeft: 40, marginBottom: 20 }}
      />
      <Text
        style={{
          color: "#8A2BE2",
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Restore Password
      </Text>

      <TextInput
        placeholder="Email-address"
        style={{
          borderColor: "gray",
          borderWidth: 1,
          padding: 15,
          marginTop: 25,
          borderRadius: 5,
        }}
      ></TextInput>
      <Text>you will receive email with password reset link</Text>

      <TouchableOpacity
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
          Reset
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={login}>
      <Text style={{ color: "black", fontSize: 15, marginTop: 5 }}>
        Already have an account?
        <Text style={{ fontWeight: "bold", fontSize: 15, color: "#8A2BE2" }}>
          Login
        </Text>
      </Text>
      </TouchableOpacity>
    </View>
  );
};
export default RestorePassword;
