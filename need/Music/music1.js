import { View, StatusBar,Text ,StyleSheet} from 'react-native'
import React from 'react'
import MusicApp from './MusicApp'

const music1 = () => {
  return (
    <View style= {style.container }>
      
      <StatusBar barStyle='light-content'/>
      <MusicApp/>
    </View>
  )
}

export default music1;

const  style = StyleSheet.create({
    container:{
        flex:1,
    },
});