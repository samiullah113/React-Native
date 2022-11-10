import React, { useCallback, useState } from "react";
import { View ,Text, TextInput, TouchableOpacity,StyleSheet, } from "react-native";
import Todo from "./Todo";




const Form=({name,setName,todos,setTodos})=>{

    const [itemData,setItemData]=useState([]);
    
    const handleAdd=()=>{  
        setItemData((oldData)=>{
            return[...oldData,name]
        });
        setName('')
    }
    const handleDelete=(id)=>{
        alert('deletd');
        console.log(id);
        setItemData((oldData)=>{
            return oldData.filter((arrElem, index)=>{
                return index !== id;
            });
        })
    };
    

    return(
    <View style={{marginTop:10}}>
        <TextInput value={name}
         placeholder="Enter Text" 
         onChangeText={setName}
        style={styles.input}/>
   
   
   
   <TouchableOpacity style={styles.addbtn} onPress={handleAdd}>
        <Text style={styles.textD}>Add</Text>
    </TouchableOpacity>
    {itemData.map((item,index)=>{
        return (
           <Todo 
            key={index}
           id={index}
          
           text={item}
           
           onSelect={handleDelete}
           />
        )
    })}
    
    </View>

        )
}

const styles=StyleSheet.create({
    input:{borderBottomColor:'black',borderBottomWidth:1},
    addbtn:{backgroundColor:'blue',width:50,alignSelf:'center',justifyContent:'center',alignItems:'center',marginTop:10},
    textD:{fontSize:16,fontWeight:'bold',alignSelf:'center',marginTop:15,color:'white',textAlign:'center'},
})

export default Form;