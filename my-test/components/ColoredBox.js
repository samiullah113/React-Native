//  it is a component for not making all the code hard making it uses props method to dispay the Colors on the COlors Screen 
import React from "react";
import { View,Text,StyleSheet} from "react-native";




const ColoredBox=(props)=>{

    const backcolor={
    backgroundColor:props.code,
};


const textcolor={
    color :
     parseInt(props.code.replace('#',''), 16)> 0xffffff / 1.1 ? 'black': 'white' ?'white':'white'
     

};

    return(
    <View style={[styles.second,backcolor]}>
       
<Text style={[styles.textdesign,textcolor]}> {props.name}</Text>

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
      

        
      
      },
})

export default ColoredBox;
