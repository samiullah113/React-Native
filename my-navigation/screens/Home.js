// import { Picker } from "@react-native-picker/picker";

import React, { useCallback, useEffect, useState } from "react";
import { View, StyleSheet, ToastAndroid, TouchableOpacity, Text } from 'react-native'
import { RefreshControl, ScrollView, } from "react-native-gesture-handler";
import PalettePreview from "../components/PalettePreview";








const Home = ({ navigation, route }) => {
  const newColor = route.params ? route.params.newColor : undefined;

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

  return (
    <View style={[styles.main, styles.border]}>

      <ScrollView


        refreshControl={
          <RefreshControl colors={['red', 'blue']} refreshing={isRefreshing} onRefresh={handleRefresh} size={'default'} />
        }

      >
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('PickSCc')}>

            <Text style={styles.text}>Touch Me</Text>

          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('Textpage')}>

            <Text style={styles.text}>Input Page</Text>

          </TouchableOpacity>
        </View>


        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('PickerSrc')}>

            <Text style={styles.text}>PICKER Page</Text>


          </TouchableOpacity>
        </View>
        

        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('ColorModel')}>

            <Text style={styles.text}>Modal Work</Text>


          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.navigate('DatePicker')}>

            <Text style={styles.text}>Date Picker</Text>


          </TouchableOpacity>
        </View>
       
        <View style={styles.container}>



          {colorPalette.map((item) => {
            return (
              <PalettePreview handlePress={() => { navigation.navigate('Color', item) }} colorPalette={item} />

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