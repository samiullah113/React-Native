
//  it is a screen where colors are displaying after renderong

import { useState,useCallback} from 'react';
import {Text,StyleSheet,SafeAreaView,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColoredBox from "../components/ColoredBox";
import { useNavigation } from '@react-navigation/native';


const Color=({route})=>{
  const navigation=useNavigation();

  const [isRefreshing,setIsRefreshing]=useState(false)
  
const handleRefresh= useCallback(async()=>{

  setIsRefreshing(true);
  
  setTimeout(()=>{
    setIsRefreshing(false);
  },3000)

},[])

  
  // const [name,setName]=useState(0)
    
  // useEffect(() => {
  //     console.log("USeEffect CAlled")
  //     ToastAndroid.show("You are on Color Page",ToastAndroid.SHORT);
  //     alert("useEffect called")
      
  //     return () => {
  //         console.log("Return called ")
  //         ToastAndroid.show("You returned to previous page",ToastAndroid.SHORT);
          
  //     }
  // }, [name]);

    const {colors,paletteName}=route.params;
    
    
    console.log(route.params);
    return (
      
                <SafeAreaView style={[styles.conatiner,styles.border,styles.main]}>

        
        <FlatList
        data={colors}
        keyExtractor={item => item.colorName}
        renderItem={({item})=> (
        <ColoredBox name={item.colorName} code={item.hexCode} />
        )}
        refreshing={isRefreshing }
        onRefresh={handleRefresh}
        ListHeaderComponent={<Text style={styles.text}> {paletteName}:</Text>}
        />
        
       
        </SafeAreaView>
 )}
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
        conatiner:{
            flex: 1,
          },
          text:{
            fontSize:25,
            fontWeight:'bold'
          },
          second:{
            margin:10,
          backgroundColor:'pink',
          padding:19,
          alignItems:"center",
          alignContent:'center',
          justifyContent:'center'
    
          },
          textdesign:{
            fontSize:15,
            fontWeight:'bold',
            color:'white'
          },
    }
  );

export default Color;