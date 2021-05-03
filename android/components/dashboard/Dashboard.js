import React,{useState} from 'react';
import {Button,Text,View} from "react-native";

const Dashboard=(props)=>{
    const [user,setUser]=useState(true);
    return(
        <View>
            <Text>
            I am {props.name} ,I am {user ? "Waiting":"for you"}
            </Text>
            <Button
        onPress={() => {
          setUser(false);
        //   setUser(true)
        }}
        disabled={!user}
        title={user ? "Pour me some milk, please!" : "Thank you!"}
      />
        </View>
    )
}
const  Names=()=>{
    return (
        <View>
        <Dashboard name="saikrishna"/>
        <Dashboard name="Rohith"/>
        </View>
    )
}
export default Names;