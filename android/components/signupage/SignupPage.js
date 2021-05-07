import React from 'react'
import { View,Text, Button ,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


const SignupPage=()=> {
    return (
        <View style={{padding:20}}>
        <Image
        source={require("../../img/login.png")}
        style={{width: 200, height: 200,marginLeft:80,marginBottom:30}}
      />  
            <Text style={{color:"#8A2BE2",fontSize:30,fontWeight:"bold",textAlign:"center"}}>Login Template</Text>
            <Text style={{color:"black",fontSize:20,textAlign:"center",marginTop:5}}>The easiest way to start with your amazing application</Text>
           
            <TouchableOpacity style={{backgroundColor:"blue",padding:20,borderRadius:5,marginTop:15 
        }} >
                <Text style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:20}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderColor:"black",padding:20,borderWidth:1,marginTop:20,borderRadius:5}}>
                <Text style={{textAlign:"center",color:"blue",fontWeight:"bold",fontSize:20}}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    )
}
export default SignupPage;