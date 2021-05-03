import React,{useState} from 'react';
import {Text,View,Image,Button} from 'react-native';
//import{createStackNavigator,createAppContainer} from 'react-native-navigation';


const Homepage=()=>{
    const name="I am saikrishna";
    
    return (
        <View>
          <Text>hello {name}</Text>
          {/* <Button title="dashboard" onPress={()=>props.navigation.navigate('Dashboard')}/> */}
          <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />  


        </View>
    )
}

export default Homepage;