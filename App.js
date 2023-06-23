import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login'
import Register from './Register'
import home from './screen/home'
import Front from './need/Front'
import Account from './need/bottom/Account'
import Search from './need/bottom/Search'
import Explore from './need/bottom/Explore'
import Qwerty from './Navigate/Qwerty'
import MusicApp from './need/Music/MusicApp'
const stack = createStackNavigator()

function Mystack(){
    return(
        <stack.Navigator>
            <stack.Screen
            name='Login'
            component={Login}
            options={{headerShown:false}}
             />
            <stack.Screen
            name='Register'
            component={Register}
            options={{headerShown:false}}
             />
            <stack.Screen
            name='Front'
            component={Front}
            options={{headerShown:false}}
             />
             <stack.Screen
            name='MusicApp'
            component={MusicApp}
            options={{headerShown:false}}
             />
        </stack.Navigator>
    )
}

export default function App(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}