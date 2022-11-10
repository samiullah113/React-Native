

import Home from './Screens/Home';
import ColorMode from './Screens/ColorMode';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Color from './Screens/Color';



const Stack=createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='ColorMode' component={ColorMode}/>
          <Stack.Screen name='Color' component={Color}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

