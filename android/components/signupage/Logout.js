import React from 'react'
import { View,Text, Image, TouchableOpacity } from 'react-native'


const Logout=()=> {
    return (
        <View style={{padding:20}}>
          <Image
    source={require('../../img/login.png')}
        style={{width: 200, height: 200,marginLeft:80,marginBottom:20}}
      />  
            <Text style={{color:"#8A2BE2",fontSize:30,fontWeight:"bold",textAlign:"center"}}>Let's start</Text>
          
          
           <Text  style={{textAlign:"center",color:"black"}}>Your amazing app starts here. Open you favorite code editor and start editing this project</Text>
           
            <TouchableOpacity

              style={{ padding:20,borderRadius:5,marginTop:15,borderColor:"gray",borderWidth:0.5 
        }} >
                <Text style={{color:"#8A2BE2",textAlign:"center",fontWeight:"bold",fontSize:20}}>LOGOUT</Text>
            </TouchableOpacity>
           
             
        </View>
    )
}
export default Logout;