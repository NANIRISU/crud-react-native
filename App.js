import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddProduct from './android/components/curd/AddProduct';
import CURD from './android/components/curd/CURD';
import Data from './android/components/curd/Data';

import Dashboard from './android/components/dashboard/Dashboard';
import Homepage from './android/components/homepage/Homepage';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <CURD/> */}
        <AddProduct/>
        {/* <Data/> */}
      {/* <Homepage/>
      <Dashboard/> */}
    
      {/* <Text>hello</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
