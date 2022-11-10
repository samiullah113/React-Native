import React, { useState } from 'react';
import {  Text,  StyleSheet, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Textpage= () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
 

  return (
    
      <View style={[styles.mid,styles.border]}>
<View style={{alignContent:'center',alignItems:'center',justifyContent:'center'}}> 
        <Text style={[styles.main,styles.input,{borderWidth:1}]}>
            Login Page
        </Text>
        </View>
    
        <Text style={styles.heading}> Username:</Text>
        <Text> Username {value1}</Text>
    <TextInput style={styles.input} placeholder='Enter Your Email' value={value1} onChangeText={setValue1} selectionColor={'black'} ></TextInput>
    <View style={styles.mic}>

<Text style={styles.heading}> Password:</Text>
<Text>Password {value2}</Text>
<TextInput style={styles.input}  placeholder="Enter Password" value={value2} onChangeText={setValue2} secureTextEntry={true}></TextInput>
    </View>


    <View style={styles.submitbtn}>
        <TouchableOpacity  onPress={()=>{alert(value1+value2)}}>
            <Text style={[styles.input, styles.inputbtn]}> Login</Text> 
            </TouchableOpacity>
    </View>
    </View>
    

  )
}


export default Textpage;

const styles = StyleSheet.create({
  main:{
    backgroundColor:'white',

  },

  border:{
    borderColor:'black',
    borderRadius:10,
    borderWidth:10,
    borderBottomWidth:0,
  },
  input: {
    backgroundColor:'white',
    borderWidth: 5,
    borderColor: 'black',
    borderRadius:5,
    padding: 5,
    marginBottom: 20,
   
  },
 
  mid:{
    backgroundColor:'#b58900',
    flex:1,
    
 alignContent:'center',

justifyContent:'center'
  },
  heading:{
    fontSize:20,
    fontWeight:'bold',
    alignItems:'center'
  },

  submitbtn:{
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'

  },
  inputbtn:{
    backgroundColor:'cyan'
  },
  main:{
    fontSize:27,
    fontWeight:'bold',
    marginBottom:50,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'

  }

});
