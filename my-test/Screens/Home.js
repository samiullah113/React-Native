// import { Picker } from "@react-native-picker/picker";

import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, ToastAndroid, TouchableOpacity, Text } from 'react-native'
import { RefreshControl, ScrollView, } from "react-native-gesture-handler";
import PalettePreview from "../components/PalettePreview";
import { Switch } from "react-native";








const Home = ({ navigation, route }) => {
  const newColor = route.params ? route.params.newColor : undefined;

  
const [EditedColors,setEditedColors]=useState();
  const [colorPalette, setcolorPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);







  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch("https://color-palette-api.kadikraman.vercel.app/palettes ");

    if (result.ok) {
      const palettes = await result.json();
      setcolorPalettes(palettes);
      ToastAndroid.show("Page Loaded Succesfully", ToastAndroid.SHORT);
    }

    else {
      ToastAndroid.show("Invalid URL", ToastAndroid.SHORT);
    }
  }, [])

  useEffect(() => {

    fetchColorPalettes();
  },
    []);

  const handleRefresh = useCallback(async () => {

    setIsRefreshing(true);
    try {

      await fetchColorPalettes();
    } catch (error) {
      console.log(error);
    }
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000)

  }, [])

  useEffect(() => {
    if (newColor) {
      setcolorPalettes(palettes => [ newColor,...palettes])
    }
  }, [newColor])

  
    const handleChange=useCallback((value,color)=>{
        if(value===true){
        setEditedColors(colors=>[...colors,color])
        }
    
        
        else {
            setEditedColors(colors=>colors.filter(EditedColors=>color.colorName!==EditedColors.colorName),);
        }
    },[])

 


  return (
    <View style={[styles.main, styles.border]}>

      <ScrollView


        refreshControl={
          <RefreshControl colors={['red', 'blue']} refreshing={isRefreshing} onRefresh={handleRefresh} size={'default'} />
        }

      >
       
        

        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('ColorMode')}>

            <Text style={styles.text}>Modal Work</Text>


          </TouchableOpacity>
        </View>
        
       
        <View style={styles.container}>



          {colorPalette.map((item) => {
            return (
                <View style={{flexDirection:'row', alignContent:'center',justifyContent:'space-between',alignItems:'center'}}>
                
              <PalettePreview handlePress={() => { navigation.navigate('Color', item) }} colorPalette={item} />
              {/* <TouchableOpacity  style={{backgroundColor:'black'}} onPress={selected=>{handleChange(selected,item)}}>
              <Text style={{color:'white'}}>Delete</Text>
              </TouchableOpacity> */}
  <Switch value={
                        !!selectedColors.find(color=>color.colorName===item.colorName)} 
                        onValueChange={selected=>{handleChange(selected,item)}}></Switch>

              </View>

            );
          })}




        </View>
        
        {/* <FlatList 
            data={colorPalette}
            keyExtractor={item=> item.paletteName}

            
            renderItem={({item})=>(
               
                  <PalettePreview handlePress={()=>{navigation.navigate('Color',item)}} colorPalette={item}/> )}
                  refreshing={true}
                  onRefresh={true}
            /> */}




      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    flex:1,

  },

  border: {
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 10,
    borderBottomWidth: 0,
  },
  list: {
    flex: 1,
    backgroundColor: 'white',



  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10

  },
  btn: {
    backgroundColor: 'red',
    margin: 10,
  },
  container: {
    margin: 10,
    marginBottom: 0,

  }


});



export default Home;