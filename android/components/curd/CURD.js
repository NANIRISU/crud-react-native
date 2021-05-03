import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native';



 class CURD extends Component {
    _storeData = async () => {
        try {
          await AsyncStorage.setItem(
            '@MySuperStore:key',
            'I like to save it.'
          );
        } catch (error) {
          // Error saving data
        }
      };
     
    render() {
        let{container,btnStyle,txtStyle}=styles;
        return (
           <View style={container}>
               {/* <Text>hello</Text> */}
               <TouchableOpacity style={btnStyle}>
                   <Text style={txtStyle}>
                       Save Data
                   </Text>
               </TouchableOpacity>
               <TouchableOpacity style={btnStyle}>
                   <Text style={txtStyle}>
                       Read data
                   </Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={btnStyle}> 
                       <Text style={txtStyle} >
                           Remove data 
                       </Text>
                   
               </TouchableOpacity>

           </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000',
        width:"100%"
      
        
    },
    btnStyle:{
        // borderStartColor:'white',
        justifyContent:'center',
        height:50,
        width:100,
        borderRadius:5,
        marginTop:10,
        alignItems:'center',
        backgroundColor:'#00ff00'

    },txtStyle:{
        color:'white'
    }

})


export default CURD;