import { AntDesign } from '@expo/vector-icons';
import {  useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [Item,setItem]=useState([{}]);
  const [id,setId]=useState(0);
  const [editItem,setEditItem]=useState({name:''});
  const [button,setButton]=useState('Add');

  



  const handleName=(text)=>{
    setEditItem({...editItem,name: text})
  }


  const AddItem=()=>{

    if(editItem.name==''|| editItem=='undefined')
    {
      alert('Your Field is empty')
    }
    else{
       setItem([{name:editItem.name,id:id},...Item]);
     setId(id+1)
    setEditItem({name:''})
    setButton('Add')

  

    
    }
    
  }

  const handleDelete=(id)=>{
      
        const  newItems =Item.filter((editItem)=> editItem.id != id);
        setItem(newItems);
      
       
        
      
      };
      
      const handleEdit=(id)=>{
        const filteredItem= Item.find((editItem)=>editItem.id==id)
        //   const  newItems =Item.filter((editItem)=> editItem.id != id);
        // setItem(newItems);
        setButton('Update')
        setEditItem({name:filteredItem.name})
          const  newItems =Item.filter((editItem)=> editItem.id != id);
        setItem(newItems);
        
       
        
      }
    

  return (
    <View style={[styles.container,{marginTop:35}]}>
      <Text style={styles.heading}> My CRUD App</Text>
      <TextInput style={styles.input} value={editItem.name} onChangeText={(text)=>handleName(text)}
                placeholder="Enter  Name"></TextInput>
       
      
      <Button title={button} onPress={AddItem}> </Button>
      <ScrollView>
      {Item.map((editItem)=>{
      if(editItem.name==undefined){
        return;
      }


        return (
          
          <View style={{flexDirection:'row',justifyContent:'space-between' ,margin:10,backgroundColor:'grey', padding:20}}>
          <Text  style={{textAlign:'center',alignSelf:'center'}}key={editItem}>{editItem.name} </Text>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=>handleDelete(editItem.id)} style={{marginHorizontal:10,}}>
          <AntDesign name="delete" size={24} color="black" />
</TouchableOpacity>
<TouchableOpacity onPress={()=>handleEdit(editItem.id,editItem.name)} >
          <AntDesign name="edit" size={24} color="black" />
</TouchableOpacity>

      </View>
      </View>
      )
        
})}
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  heading:{
    fontSize:18,
    fontWeight:'bold',
    color: 'black',
    textAlign:'center',
    backgroundColor:'grey',
    
    padding:10
  },

  input:{
    margin:10,
    padding:10,
    borderBottomColor:'grey',
    borderBottomWidth:1,

  },

});
