import React, {Component} from "react";
import { View,TextInput, StyleSheet, Text ,ImageBackground, TouchableHighlight,Image,Alert } from 'react-native'
import Login from "./Login";
import auth from '@react-native-firebase/auth';

export default class Register extends Component{

 
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false
    }
    
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
   registerUser = () => {
    if(this.state.email ===''  && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: false,
      })
      
      auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res);
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
  return(

    <View style= {styles.container}>
          
    <ImageBackground source={require('./assets/bg.jpg')}
    style={styles.img}>
      <Image source={require('./assets/logo.png')}
      style={styles.logo}>


      </Image>
      <Text style={styles.size}>Welcome to Musica</Text>
      <TextInput style={styles.inputview}
      placeholder='Email'
      placeholderTextColor={'white'}
       onChangeText={(val) => this.updateInputVal(val, 'email')}> 
      </TextInput>
      <TextInput style={styles.inputview}
      placeholder='username'
      placeholderTextColor={'white'}
      maxLength={10}
      onChangeText={(val) => this.updateInputVal(val, 'username')}> 
      </TextInput>
      <TextInput style={styles.inputview}
      placeholder="password"
      placeholderTextColor={'white'}
      secureTextEntry={true}
      onChangeText={(val) => this.updateInputVal(val, 'password')}> 
      </TextInput>
    <TouchableHighlight style={styles.touch}
    onPress={() => this.registerUser()}>
      <Text style={styles.buttext}> SignIn </Text>
      
    </TouchableHighlight>
    <TouchableHighlight>
      <Text style={styles.butom}
      
      onPress={()=> this.props.navigation.navigate('Login')}> Already an account/ Just Login</Text>
      
    </TouchableHighlight>
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
      alignItems:'center',
      justifyContent:'center',
      },
      Tex:{
        width:'100%',
        height:55,
        borderwidth:1,
        
        
      },
      logo:{
        
          height:100,
          width:100,
          marginBottom:10,

      },
      size:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        // marginTop:10,
        // marginBottom:10,

      },
      inputview:{
      
          width:'80%',
          height:55,
          textShadowColor:'white',
          color:'white',
          borderWidth: 2,
          borderRadius:30,
          borderColor:'white',
          marginTop:30,
          paddingLeft: 20,
 


      },
      touch:{
        height:55,
        width:'40%',
        backgroundColor:'violet',
        marginTop:30,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center',
      },
      buttext:{
        fontSize:22,
        fontWeight:'bold',
        color:'white',
      },
      butom:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        marginTop:20,
      }
      }

)

      


  















