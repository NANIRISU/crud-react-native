import React, { Component } from 'react'
import { View ,Text, TextInput, Button} from 'react-native';


 class Data extends Component {
     constructor(props){
         super(props);
         
         this.state={
            //  title:"React native crud operation",
             act:0,
             index:'',
             datas:[]
         }
     }
     componentDidMount(){
         this.refs.name.focus();
     }
     fSubmit=(e)=>{
         e.preventDefault();
         console.log('try')

         let datas=this.state.datas;
         let name=this.refs.name.value;
         let address=this.refs.address.value;

         if(this.state.act===0){
             let data={
                 name,address
             }
             datas.push(data);
         }
         else{
             let index=this.state.index;
             datas[index].name=name;
             datas[index].address=address;
         }
         this.setState({
             datas:datas,
             act:0
         });
         this.refs.myFrom.reset();
         this.refs.name.focus();
     }
fRemove=(i)=>{
    let datas=this.state.datas;
    datas.slice(i,1);
    this.setState({datas:datas});
    this.refs.myFrom.reset();
    this.refs.name.focus();
}
fEdit=(i)=>{
    let data=this.state.datas[i];
    this.refs.name.value=data.name;
    this.refs.address.value=data.address;
    this.setState({
        act:1,
        index:i
    });
    this.refs.name.focus();
}
    render() {
        let datas=this.state.datas
        return (
           <View >
               {/* <Text>{this.state.title}</Text> */}
               <View ref='myForm'>
               <TextInput  ref="name" placeholder="your Name"></TextInput>
               <TextInput  ref="address" placeholder="your address"></TextInput>
               {/* <Button onPress={(e)=>this.fSubmit(e)}>  title="Submit"</Button> */}
               <Button
  style={{fontSize: 20, color: 'green'}}
  
  onPress={(e)=>this.fSubmit(e)}  title="Press Me"> 
 
</Button>
               </View>
               <View>
                   {datas.map((data,index)=>
                   <View>
                   <Text  key={index}> {index+1}.{data.name},{data.address}</Text> 
                   <Button onPress={()=>this.fRemove(i)} title="Remove"> </Button>
                   <Button onPress={()=>this.fEdit(i)} title="Edit"> </Button>
                   </View>
                   )}
               </View>

           </View>
        )
    }
}
export default Data;