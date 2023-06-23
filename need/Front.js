import React, { Component } from "react";
import {ImageBackground, StyleSheet, Text, View,TextInput,Image,ActivityIndicator} from 'react-native'
import { FlatList, TouchableHighlight } from "react-native-gesture-handler";

export default class Front extends Component{
//     constructor(){
//         super();
//         this.state ={
//             loader:false,
//             DATA:[]
//         }
//     }
//  getData(){
//     this.setState({loader:true})
//     fetch('https://api.sampleapis.com/coffee/hot')
//     .then((responce) => responce.json())
//     .then((responce)=> { 
//         if(responce.length>0){
//             this.setState({DATA:responce})
//         }
//         this.setState({loader:false})
//         console.log('your Responce Is:', responce)
//     })
//     .catch((error)=> {
//         this.setState({loader:false})
//         console.log('ERROR IS:',error)
//     })
//  }
//  componentDidMount(){
//      this.getData()
//  }
// render(){
//     const renderItem =({item})=>(
//         <View style={styles.item}> 
//         <Text style={styles.itemtxt}>{item.title}</Text>
//         <Text>{item.description}</Text>
//         </View>
//     )
render(){
return(


    
    <View style={styles.container}>
       <View style={styles.new}>
       <Image source={require('../assets/logo.png')}
      style={styles.logo}/>
<TextInput style={styles.inputview}
    
    
      placeholder='Search your Music`s'
      placeholderTextColor={'white'}> 
        
    </TextInput>
    </View>
        <ImageBackground source={require('./misc/abg.jpg')}
        style={styles.img}>
           
      <Text style={styles.inside}> Welcome to Musica</Text>
    {/* {    <FlatList style={{width: '95%',marginTop:10 }}
                data={this.state.DATA}
                 renderItem={renderItem}/>

       } */}
       <ActivityIndicator size={30} color='blue' animating ={true} >
            </ActivityIndicator>
        <TouchableHighlight style={styles.list}
        onPress={() => this.props.navigation.navigate('MusicApp')}>
             <Text style={styles.inside1}>Explore the music </Text>
        </TouchableHighlight > 
          </ImageBackground>
        
        
       
    </View>

)

}
}
const styles=StyleSheet.create({

    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'#fffff',
        
    },
        img:{
        height:'100%',
        width:'100%',
        
       
        },
        Tex:{
          width:'100%',
          height:55,
          borderwidth:1,
          
          
        },
        inputview:{
            
          
                width:'80%',
                height:45,
                textShadowColor:'white',
                color:'white',
                borderWidth: 2,
                borderRadius:30,
                borderColor:'white',
                marginHorizontal:10,
                paddingLeft: 20,
                margin:10
            },
            logo:{
        
                height:40,
                width:40,   
        },
        new:{
            alignItems:'center',
            flexDirection:'row',
            paddingHorizontal:20,
            backgroundColor:'violet'
            
        },
        inside:{
          
            fontWeight:'bold',
            fontSize:20,
            fontFamily:'serif-bold',
            paddingTop:30,
            paddingRight: 200,
            
        },
        inside1:{
          
            fontWeight:'bold',
            fontSize:20,
            fontFamily:'serif-bold',
            
           
            
        },
        list:{
    
        height:75,
        width:300,
        backgroundColor:'violet',
        marginTop:60,
        marginLeft:60,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
        },
        item:{
            width:'100%',
            padding:10,
            backgroundColor:'green',
            elevation:4,
            marginBottom:10,
            borderRadius:30,
            justifyContent:'center',
            alignItems:'center'
        },
        itemtxt:{
            fontSize:16,
            fontWeight:'bold',
            
        }

   
    })