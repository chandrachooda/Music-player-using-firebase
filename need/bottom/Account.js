import React, {Component} from "react";
import{
View,
Text,
StyleSheet}from "react-native"
export default class Account extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.carttext}>Hi this is call page</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'white'
    },
    carttext:{
        fontSize:24,
        fontWeight:'bold',
        color:'black'
    }
})

