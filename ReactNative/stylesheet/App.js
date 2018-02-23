/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
// export default class App extends Component<Props> {}
export default class App extends Component<Props>{
  render(){
    return (
      <View style={style.container}>
        <View style={style.top}></View>
        <View style={style.bottom}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    backgroundColor:"red",
    width:300,
    height:500,
  },
  top:{
    backgroundColor:"green",
    width:280,
    height:150,
    margin:10,
  },
  bottom:{
    backgroundColor:"yellow",
    width:280,
    height:150,
    margin:10,

  },
});
