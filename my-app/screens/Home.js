import React from "react";
import { Text,View,StyleSheet,StatusBar } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home=({navigation})=>{
    <View style={Styles.conatiner}>
    <TouchableOpacity onPress={()=>{navigation.navigate('ColorPalatte')}}>
<Text style={Styles.text}>

Hello Bro
</Text>
</TouchableOpacity>

</View>
}

const Styles=StyleSheet.create={
    conatiner:{
      marginTop: StatusBar.currentHeight || 0,
flex:1

      
    },
    text:{
      fontSize:25,
      fontWeight:'bold'
    },
    }


    export default Home;