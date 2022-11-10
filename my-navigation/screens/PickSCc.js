
import React, {useCallback, useState } from 'react';
import { SafeAreaView, Switch, View, StyleSheet } from 'react-native';



const PickSCc = () => {
  const [value, setValue] = useState(false);

  const handleChange=useCallback(()=>{
    if(value===true){
      alert('the switch is off');
      setValue(false);
    }
    else{
      alert('the switch is on');
      setValue(true)
    }
  },)

 



  

  
  return (
    <SafeAreaView style={[styles.main,styles.border,{ flex: 1 }]}>
      <View style={styles.container}>
        <Switch value={value} onValueChange={handleChange} 
        trackColor={{true:'black',false:'red'}} thumbColor={'yellow'} />
      </View>
    </SafeAreaView>
  );
}

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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default PickSCc;