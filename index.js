/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './Login'
import home from './screen/home'
import Register from './Register'
import Front from './need/Front';
import Account from './need/bottom/Account';
import Explore from './need/bottom/Explore';
import Search from './need/bottom/Search';
import Details from './Navigate/Details'
import Qwerty from './Navigate/Qwerty'
import ProfileScreen from './Navigate/ProfileScreen';
import MusicApp from './need/Music/MusicApp';
import TrackPlayer from 'react-native-track-player';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(...);
TrackPlayer.registerPlaybackService(() => require('./service'));