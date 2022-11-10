import React from "react";
import { View,Text, TouchableOpacity } from "react-native";


const Todo=(props)=>{
return(
     <View style={{flexDirection:'row',justifyContent:'space-between',margin:10,backgroundColor:'cyan',padding:10}} >
            
            <Text style={{fontWeight:'bold',alignSelf:'center'}}>{props.text}</Text>
            <TouchableOpacity onPress={()=>props.onSelect(props.id)}>
                <Text style={{backgroundColor:'red',color:'white',padding:5}}> Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{backgroundColor:'red',color:'white',padding:5}}>Edit</Text>
            </TouchableOpacity>
            
        </View>
)

}

export default Todo;