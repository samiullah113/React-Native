import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';


const FOODS = [
  'apples',
  'doughnits',
  'Yorkshire pie',
  'pizza',
  'jellied eels'
]
const DFOOD= [
  'facewash'
]

const DIFOOD= [
  'Burger',
  'Fries',
  'Shawarma',
  'Grilled',
  'BBQ'
]
const DROPFOOD= [
  'Mutton',
  'chicken',
  'Beaf',
  'ColdDrink',
  'Salad'
]






const PickerSrc = () => {
  const [value, setValue] = useState("pizza");

  const [selectedDfood,setSelectedDfood]=useState();

    const [selectedDifood,setSelectedDifood]=useState();
      const [selectedDropfood,setSelectedDropfood]=useState();
    

   
  return (
    <View style={{flex:1}}>
      <Text style={{textAlign:'center',fontSize:18,fontWeight:'bold'}}>Picker Examples</Text>
      
      
      
      <View style={styles.container}>
      
     <Text>Selected: {value} </Text>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue) =>
          setValue(itemValue)
        }>
        {FOODS.map(food => (
          <Picker.Item label={food} value={food} /> 
        ))}
      </Picker>

       <Text>Diabled Picker: {selectedDfood} </Text>
      <Picker
        selectedValue={selectedDfood}
        onValueChange={(itemValue) =>
          setSelectedDfood(itemValue)

          
        }
        enabled={false}
        
        >
        {DFOOD.map(dfood => (
          <Picker.Item label={dfood} value={dfood}  color="grey"/> 
        ))}
      </Picker>


      <Text>Dialoge: {selectedDifood} </Text>
      <Picker
        selectedValue={selectedDifood}
        onValueChange={(itemValue) =>
          setSelectedDifood(itemValue)
          
        }
        prompt='Select Your Item:'
        mode={'dialog'}
        >
        {DIFOOD.map(difood => (
          <Picker.Item label={difood} value={difood}   /> 
        ))}
      </Picker>

          <Text>DropDown: {selectedDropfood} </Text>
      <Picker
        selectedValue={selectedDropfood}
        onValueChange={(itemValue) =>
          setSelectedDropfood(itemValue)
        }
        mode={'dropdown'}
        >
        {DROPFOOD.map(dropfood => (
          <Picker.Item label={dropfood} value={dropfood} /> 
        ))}
      </Picker>

      
      




      </View>


<TouchableOpacity style={{backgroundColor:'cyan',padding:10 }} onPress={()=>alert("Your Order is:"+value+" "+selectedDifood+" "+selectedDropfood)}>
     <Text style={{textAlign:'center',marginBottom:10,fontSize:18,fontWeight:'bold'}}>submit</Text>
    </TouchableOpacity>

    
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
 
});

export default PickerSrc;