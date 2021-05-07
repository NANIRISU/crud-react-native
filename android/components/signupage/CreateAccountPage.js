import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { View,Text, Button, Image, TextInput, TouchableOpacity } from 'react-native'

const CreateAccountPage=({navigation})=> {

 const[name,setName]=useState("")
const [authemail,setAuthEmail]=useState("");
const [authpassword,setAuthPassword]=useState("");
const [users,setUsers]=useState([]);


const nameChangerHandler=(e)=>{
    setName(e);
};

const emailChangeHandler=(e)=>{
    setAuthEmail(e);
};
const passwordChangeHandler=(e)=>{
    setAuthPassword(e);
}
const login=()=>{
   navigation.navigate('login')
}

const signUpClickHandlerUser=()=>{


    
    users.push({
        username:name,
        useremail:authemail,
        password:authpassword,
        // isLogged:false,
        
    });
    if(authemail===''|| authpassword==='')
    {
        alert("please be enter fileds corret details")

    }
    else{
setUsers(users)
AsyncStorage.setItem("users",JSON.stringify(users));
// alert("data saved")
 console.log("temp",users)
 navigation.navigate('login')
    }
    
   

}

    return (
        <View style={{padding:20}}>
           
          <Image
    source={require('../../img/login.png')}
        style={{width: 200, height: 200,marginLeft:80}}
      />  
            <Text style={{color:"#8A2BE2",fontSize:30,fontWeight:"bold",textAlign:"center"}}>Create Account</Text>
            <TextInput placeholder="Name" value={name} onChangeText={nameChangerHandler} style={{borderColor:"gray",borderWidth:1,padding:15,marginTop:25,borderRadius:5
        }}></TextInput>
           <TextInput placeholder="Email" value={authemail} onChangeText={emailChangeHandler} style={{borderColor:"gray",borderWidth:1,padding:15,marginTop:25,borderRadius:5
        }}></TextInput>
           <TextInput placeholder="Password" value={authpassword} onChangeText={passwordChangeHandler} style={{borderColor:"gray",borderWidth:1,padding:15,marginTop:25,borderRadius:5}}></TextInput>
           
           
            <TouchableOpacity onPress={signUpClickHandlerUser} style={{backgroundColor:"blue",padding:20,borderRadius:5,marginTop:15 
        }} >
                <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:20}}>SIGN UP</Text>
            </TouchableOpacity>
           <TouchableOpacity onPress={login}>
            <Text style={{color:"black",fontSize:15,marginTop:5}}>Already have an account?  <Text style={{fontWeight:"bold",fontSize:15, color:"#8A2BE2"}} >Login</Text> </Text>
            </TouchableOpacity>
        </View>
    )
}
export default CreateAccountPage;