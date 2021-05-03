import React,{useState,useEffect} from "react";
import {
  View,
  Text,
  TextInput,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Button,
  AppRegistry
} from "react-native";

//import DropdownAlert from "react-native-dropdownalert";
import AsyncStorage from "@react-native-community/async-storage";


const AddProduct = () => {
  const [name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [data, setData] = useState([]);
  const [toggle, setToggle] = useState('true');
  const [itemId, setItemId] = useState(null);
  const saveData = async () => {
    if ((name !== null && name !== "", Phone !== null && Phone !== "")) {
      var user = { name, Phone, key: Math.random() };
    }
    const arrData=[user]
    const storedData=await AsyncStorage.getItem('user')
    const storedDataPrased=JSON.parse(storedData);
    setData(storedDataPrased);
    let newData=[];

    if(storedData===null){
    await AsyncStorage.setItem('user',JSON.stringify(arrData));
    }
    else{
      newData=[...storedDataPrased,user];
      await AsyncStorage.setItem('user',JSON.stringify(newData));
    }
    Keyboard.dismiss();
    setName('');
    setPhone('');
   useEffect(()=>{
     retriveData();
   });
   const retriveData=async ()=>{
     try{
       const valueString=await AsyncStorage.getItem('user');
       const value=JSON.parse(valueString);
       setData(value)
     }
     catch(err){
       console.log(err)
     }
   }
   const clearData=async (id)=>{
     if(data !==null){
       const newData=data.filter((_,index)=>index!==id);
       setData(newData);
       await AsyncStorage.setItem('user',JSON.stringify(newData));
     }
   }
   const changeData=async(id)=>{
     setToggle(false);
     const changedData=data.map((item,idx)=>{
       if(idx===id){
         setName(item.name);
         setPhone(item.Phone);
       }
       return item;
       console.log(item,"item")
     });
     setData(changedData);
     setItemId(id);
     await AsyncStorage.setItem('user',JSON.stringify(changedData));
   };
   const updateData= async()=>{
     setToggle(true);
     data[itemId].name=name;
     data[itemId].Phone=Phone;
     await AsyncStorage.setItem('user',JSON.stringify(data));
   }
  };

  return (
    <SafeAreaView>
   <View>
     <View>
       <Text>Details</Text>
       <TextInput placeholder="Name" value={name} onChangeText={text=>setName(name)}/>
       <TextInput placeholder="phone number" value={Phone} onChangeText={text=>setPhone(Phone)}/>
       <Button title={toggle?'save data':'update changes'} name="addbutton" onPress={toggle ?saveData:updateData}/>
      <Text>List</Text>
      <ScrollView >
            {data !== null
              ? data.map((item, index) => {
                  return (
                   <View key={index}>
                     <View>
                       <Text>
                         {index+1}
                       </Text>
                       <View>
                         <Text>{item.name}</Text>
                         <Text>{item.Phone}</Text>
                          </View>
                     </View>
                 <View>
                   <TouchableOpacity onPress={()=>clearData(index)}>
                     {/* <Icon name='close' size={20}/> */}
                     </TouchableOpacity>
                   <TouchableOpacity
                          onPress={() => changeData(index)}>
                          {/* <Icon name="create" size={20} /> */}
                        </TouchableOpacity>
                 </View>
                   </View>
                  );
                })
              : null}
          </ScrollView>
     </View>
   </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 6,
  },
});

export default AddProduct;
