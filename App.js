import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, LogBox } from "react-native";
import AddProduct from "./android/components/curd/AddProduct";
import Tasks from "./android/components/curd/Task";
import CURD from "./android/components/curd/CURD";
import Data from "./android/components/curd/Data";

import Dashboard from "./android/components/dashboard/Dashboard";
import Homepage from "./android/components/homepage/Homepage";
import SignupPage from "./android/components/signupage/SignupPage";
import LoginPage from "./android/components/signupage/LoginPage";
import CreateAccountPage from "./android/components/signupage/CreateAccountPage";
import RestorePassword from "./android/components/signupage/RestorePassword";
import Logout from "./android/components/signupage/Logout";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
const Stack = createStackNavigator();
export default function App() {
  // LogBox.ignoreLogs([])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="login" component={LoginPage} />
          <Stack.Screen options={{headerShown: false}} name="create-account" component={CreateAccountPage} />
          <Stack.Screen options={{headerShown: false}} name="logout" component={Logout} />
          <Stack.Screen options={{headerShown: false}} name="reset-password" component={RestorePassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

{
  /* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
}
