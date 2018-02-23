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
  View,
  TextInput
} from 'react-native';

let Dimensions = require('Dimensions');
let PixelRatio = require('PixelRatio');
let totalWidth = Dimensions.get('window').width;
let totalHeight = Dimensions.get('window').height;
let pixelRatio = PixelRatio.get();
let startPoint = totalWidth * 0.05;
let viewWidth = totalWidth * 0.9;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
      super(props);
      this.state = {
        inputedNum: "",
        inputedPW:""
      };
      this.updatePW = this.updatePW.bind(this);
  }
  updateNum(newText){
    console.log('this in updateNum');
    console.log(this);
    //常规使用
    this.setState((state) => {
      return {
        inputedNum: newText,
      };
    });
    //简化一
    // this.setState({
    //     inputedNum: newText,
    // });
    // this.setState((oldState) => {
    //     for(var aName in oldState){
    //       console.log(aName);
    //     }
    //     return {
    //       inputedNum: newText,
    //     }
    // },this.changeNumDone);
  }
  // //简化二
  // updateNum(inputedNum){
  //     this.setState({inputedNum});
  // }

  changeNumDone(){
    console.log('');
  }
  updatePW(newText){
    this.setState(() => {
      return {
        inputedPW: newText,
      };
    });
  }
  //用来判断是否渲染组件
  // shouldComponentUpdate(){
  //   if (this.state.inputedNum.length<3) return false;
  //   return true;
  // }
  render() {
    console.log('this in render');
    console.log(this);//应当少使用log，会影响性能
    
    return (
      <View style={styles.container}>
      {/* JSX注释 */}
      <TextInput placeholder='请输入手机号' style={styles.phoneInputStyle} onChangeText={this.updateNum}/>
      <Text style={styles.textPromptStyle}>你输入的手机号为：{this.state.inputedNum}</Text>
      <TextInput placeholder='请输入密码' style={styles.passwordInputStyle} secureTextEntry={true} onChangeText={this.updatePW}/>
      <Text style={styles.buttonStyle}>确定</Text>
      </View>
    );
  }
}
let styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  phoneInputStyle:{
    marginTop:20,
    left:startPoint,
    width:viewWidth,
    backgroundColor:'gray',
    fontSize:20,
  },
  textPromptStyle:{
    marginTop:20,
    left: startPoint,
    width:viewWidth,
    fontSize:20,
    // ios需指定height属性
  },
  passwordInputStyle:{
    marginTop:20,
    left:startPoint,
    width:viewWidth,
    backgroundColor:'gray',
    fontSize:20,
  },
  buttonStyle:{
    marginTop:20,
    left:startPoint,
    width:viewWidth,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:60,
  }
});


