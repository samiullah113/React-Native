
import { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Form from './Components/Form';



export default function App() {
  const [name,setName]=useState('');
  const [todos,setTodos]=useState([]); 
  return (
    
    <View>
      <View style={styles.container}>
      <Text style={{fontWeight:'bold',fontSize:20}}>CRUD Operation APP</Text>
      </View>
      <View >
      <Form name={name}
      setName={setName}
      todos={todos}
      setTodos={setTodos}
      
      ></Form>

      
    </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf:'center',
    marginTop:35
    
  },
});
