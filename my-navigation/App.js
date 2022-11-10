// A page to make the stack screens for navigation 

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Color from './screens/Color';
import PickSCc from './screens/PickSCc';
import Textpage from './screens/Textpage';
import PickerSrc from './screens/PickerSrc';
import Welcome from './screens/Welcome';
import ColorModel from './screens/ColorModel';
import DatePicker from './screens/DatePicker';

const RootStack=createStackNavigator();
const MainStack=createStackNavigator();

const MainStackScreen=()=>{
return (

  <MainStack.Navigator>
  <MainStack.Screen name='Welcome' component={Welcome}/>
  <MainStack.Screen name="Home" component={Home}/>
  <MainStack.Group>
  <MainStack.Screen name="Color" component={Color} options={({route})=>({title : route.params.paletteName})}/>


 <MainStack.Screen name="PickerSrc" component={PickerSrc} options={{title:'Picker Page'}}/>

 </MainStack.Group>
 <MainStack.Screen name="PickSCc" component={PickSCc} options={{title:'Switch Page'}} />
 <MainStack.Screen name="Textpage" component={Textpage} options={{title:'Login Page'}}/>
  <MainStack.Screen name="DatePicker" component={DatePicker} options={{title:'Date Picking Page'}}/>

 </MainStack.Navigator>


);

};

const App=()=> {
  return (
<NavigationContainer >
<RootStack.Navigator presentation ='modal'>
  <RootStack.Screen name='Main' component={MainStackScreen} options={{headerShown:false}}>
    </RootStack.Screen >  
    <RootStack.Screen name="ColorModel" component={ColorModel}>
    </RootStack.Screen >    
   </RootStack.Navigator >
   
</NavigationContainer>
    
  );
}

export default App;