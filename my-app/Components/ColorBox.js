import React from "react";
import { View,Text,StyleSheet} from "react-native";


const ColorBox=(props)=>{
const colorback={
    backgroundColor:props.Colorcode,
};
const textcolor={
    color :
     parseInt(props.Colorcode.replace('#',''), 16)> 0xffffff / 1.1 ? 'black': 'white' ?'white':'white'
     

};
    return(
    <View style={[styles.second,colorback]}>
<Text style={[styles.textdesign,textcolor]}> {props.colorname} </Text>

</View>
)};
const styles=StyleSheet.create({
    second:{
        margin:10,
      
      padding:19,
      alignItems:"center",
      alignContent:'center',
      justifyContent:'center'

      },
      textdesign:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',

        
      
      },
})

export default ColorBox;