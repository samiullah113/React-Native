/*import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from "react-native";}*/
{/*
const { SafeAreaView, FlatList } = require("react-native");
*/}

/*const App=()=>{
return (
<View style={styles.coontainer}>
  <View style={styles.header}>
    
  <Text style={styles.designtext}> Hello World</Text>
  </View>
</View>

);
};

const styles=StyleSheet.create({

coontainer:
{
  flex:1,
  backgroundColor:'teal',
  marginTop:33,
},
header:{
  flex:0.7,
  backgroundColor:'white',
  borderColor:'red',
  borderRadius:10,
  borderWidth:100,
  borderTopWidth:20,
  
  justifyContent:'center',
  shadowColor:'black',

},
designtext :{
  textAlign:'center',
  color:'red',
  fontSize:15,
  fontWeight:'bold',
  textShadowColor:'black',
  textShadowRadius:10


  

},


});
*/
{/*
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, SectionList } from 'react-native';



    
    const DATA = [
{
  id:1,
  title:'First Item',
colorname:'red',
},

 {
  id:2,
  title:'Second Item',
  colorname:'pink',
},
 {id:3,
  colorname:'yellow',
  title:'Third Item',},
{id:4,
  colorname:'blue',
  title:'Forth Item',},
{id:5,
  colorname:'green',
  title:'Fifth Item',},
{id:6,
  colorname:'voilet',
  title:'Sixth Item',},
  {
    id:7,
    title:'seventh item'
  },
  {
    id:8,
    title:'eigth item',
  },




    
   
      
    ];

    const FOOD=[

      { title: 'Healthy', data: ['Apples', 'Broccoli']},
      { title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs']},


    ];

   
    
    
    const Data = (props)=> (
    
      <View style={[styles.item]}>
        <Text style={styles.title}>{props.id}</Text>
        <Text style={styles.title}>{props.title}</Text>
      </View>

    );
    const Food=(props)=>(

<View style={styles.food}>
<Text style={styles.title}> {props.name}</Text>
</View>
    );

   


    
    const App = () => {
     
      
    
      return (
        <View style={styles.main}>
        <SafeAreaView style={styles.container}>

          <Text style={styles.title}> Here is my flat list</Text>
          <FlatList
          
            data={DATA}
            renderItem={({item})=> <Data id={item.id} title={item.title}/>}
            keyExtractor={item => item.id}
            ListEmptyComponent={<Text style={styles.title}> The list is empty</Text >}
            ListFooterComponent={<Text style={styles.title}> Footer</Text>}
            ListHeaderComponent={<Text style={styles.title}> Header</Text>}
          />

        </SafeAreaView>

<View style={styles.section}>
  <Text style={styles.title}> Here is my SectionList</Text>
   <SectionList
  
        sections={FOOD}

        keyExtractor={item => item}
        renderItem={data => <Food name={data.item} />}
        renderSectionHeader={({ section }) => (
          <Text style={styles.title}> Section Heading: {section.title}</Text>
        )}
        
      />
      </View>  
        </View>
      );
    }
  
    
    const styles = StyleSheet.create({
      main:{
        flex:1,
        backgroundColor:'red',
      },
      food:{
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'teal',
        marginBottom: 10,
      },
      
      container: {
        flex: 0.5,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor:'white',
      
      },
      section:{
        flex:0.5,
        backgroundColor:'yellow'
      },
      item: {
        backgroundColor:'pink',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius:20,
   
        
      
      },
      title: {
        fontSize: 20,
        color:'black',
        textShadowColor:'white',
        textShadowRadius:9,
        textAlign:'center'
        

      },
    });
    
    export default App;

  */}







/* for row direction}

by using components
<ScrollView style={styles.scroll}>
<View style={styles.main}>
  <Text style={styles.header}>Here are my Different Color Boxes with component</Text>

<ColorBox Colorname="Cyan" Colorcode="#2aa198"></ColorBox>
<ColorBox Colorname="me" Colorcode="#268bd2"></ColorBox>
<ColorBox Colorname="me" Colorcode="#d33682"></ColorBox>
<ColorBox Colorname="me" Colorcode="#cb4b16"></ColorBox>
<ColorBox Colorname="Cyan" Colorcode="#2aa198"></ColorBox>
<ColorBox Colorname="me" Colorcode="#268bd2"></ColorBox>
<ColorBox Colorname="me" Colorcode="#d33682"></ColorBox>
<ColorBox Colorname="me" Colorcode="#cb4b16"></ColorBox>
<ColorBox Colorname="Cyan" Colorcode="#2aa198"></ColorBox>
<ColorBox Colorname="me" Colorcode="#268bd2"></ColorBox>
<ColorBox Colorname="me" Colorcode="#d33682"></ColorBox>
<ColorBox Colorname="me" Colorcode="#cb4b16"></ColorBox>
<ColorBox Colorname="Cyan" Colorcode="#2aa198"></ColorBox>
<ColorBox Colorname="me" Colorcode="#268bd2"></ColorBox>
<ColorBox Colorname="me" Colorcode="#d33682"></ColorBox>
<ColorBox Colorname="me" Colorcode="#cb4b16"> </ColorBox>
<ScrollView style={styles.scroll}>
<Text style={styles.header}> Here are some Colors</Text>
  <View style={styles.container}>

<Text style={styles.textdesign}> Gyan Color</Text>
</View>
<View style={styles.second}>
<Text style={styles.textdesign}> Blue </Text>

</View>
<View style={styles.third}>
  <Text style={styles.textdesign}> Magenta </Text>
</View>
<View style={styles.forth}>
  <Text style={styles.textdesign}> Orange</Text>
</View>
<Text style={styles.header}> Here are some Colors</Text>
  <View style={styles.container}>

<Text style={styles.textdesign}> Gyan Color</Text>
</View>
<View style={styles.second}>
<Text style={styles.textdesign}> Blue </Text>

</View>
<View style={styles.third}>
  <Text style={styles.textdesign}> Magenta </Text>
</View>
<View style={styles.forth}>
  <Text style={styles.textdesign}> Orange</Text>
</View>
</ScrollView>

</View>
</ScrollView>


  */


/*
  
  
  )};
*/
/*
  const styles=StyleSheet.create ({
  
    header:{
      
      color:'white',

      padding:5,
alignItems:'center',
fontSize:20,
fontWeight:'bold',

    },
textdesign:{
  fontSize:15,
  fontWeight:'bold',
  color:'white',

},
container:{
margin:10,
backgroundColor:'#2aa198',

padding:10,
alignItems:'center',

},
second:{
  margin:10,
backgroundColor:'#268bd2',
padding:10,
alignItems:"center",
},
third:{
  margin:10,
  alignItems:'center',
  backgroundColor:'#d33682',
  padding:10,
},
forth:{
  margin:10,
  alignItems:'center',
  backgroundColor:'#cb4b16',
  padding:10,
},
scroll:{
  marginTop:35,
  padding:10,
  backgroundColor:'black',
  borderRadius:20,
 
  
  
  
},

  });
  




export default App;

*/


import React from 'react';
import { SafeAreaView,StyleSheet } from 'react-native-safe-area-context';
import ColorBox from './Components/ColorBox';


const App=()=>{
return (
 <SafeAreaView style={styles.container}>
  <FlatList
  data={COLORS}
renderitem={({item})=>(<ColorBox colorname={item.colorName} colorcode={item.hexcode}></ColorBox>)}

  keyExtractror={item=> item.colorName}
  
  
  />
 </SafeAreaView>



)
}

 const styles=StyleSheet.create({

container:{
flex: 1,


}

 });


export default App;