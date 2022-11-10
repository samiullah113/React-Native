import { View ,StyleSheet,Text} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";



const Welcome=({navigation})=>{
    return(
        <View style={styles.main}>
            <View style={styles.logo}>
<Text style={styles.heading}>
    Welcome To my Practice App

</Text>
</View>
<View style={styles.btnview}>
    <View style={styles.logo}>
    <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Text style={styles.btn}> Welcome</Text></TouchableOpacity>
    </View>
    </View>
        </View>
    )
}
const styles=StyleSheet.create({

    main:{
backgroundColor:'white',
flex: 1,

    },
logo:{
    backgroundColor:'green',
    padding:10,
    borderRadius:5
},
    heading:{
        fontSize:20,
        fontWeight:'bold',
        backgroundColor:'white',
        borderRadius:10,
        

    },

    btn:{
        fontSize:18,
        fontWeight:'bold',
        justifyContent:'center',
        alignContent:'center',
        backgroundColor:'white',
        borderRadius:10
    },
    btnview:{
        flex:1,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        
    }
})

export default Welcome;