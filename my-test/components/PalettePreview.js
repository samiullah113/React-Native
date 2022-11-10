
// A component for a palete colors on the home page by making alll thed colors tochableopacity



import {Text,TouchableOpacity,StyleSheet, View,FlatList} from "react-native";




const PalettePreview=({handlePress,colorPalette})=>{
   

    return(
        

    <TouchableOpacity onPress={handlePress}>
  <Text style={styles.txt}>{colorPalette.paletteName}: </Text>
{/* <View style={{flexDirection:'row'}}>
  {colorPalette.colors.slice(0,5).map((item) => {
        return (
          
          
        );
      })}
     </View> */}
 
 <FlatList
  horizontal={true}
  data={colorPalette.colors.slice(0,5)}
  keyExtractor={item=>item.colorName}
  renderItem={({item})=>
  <View style={[styles.list,{backgroundColor:item.hexCode}]}/>}

 
  />  
  
  </TouchableOpacity>
)}

const styles=StyleSheet.create({
txt:{
    marginBottom:10,
    fontWeight:'bold',
    fontSize:18,
},
list:{
    flexDirection:'row',
    marginBottom:10,
    height:30,
    width:30,
    marginRight:10,
    borderRadius:10,
    shadowRadius: 40,
    shadowOffset:{height:5,width:0},
shadowColor:'#000',
elevation:10,

shadowOpacity:1,
},


})

export default PalettePreview;