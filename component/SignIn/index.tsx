import { Text, View ,StatusBar, Image, Button } from 'react-native';
import styles from './styles';
import { Form, FormItem } from 'react-native-form-component';
import React, { Component } from 'react';
import UselessTextInput from '../forms';


export default class Signin extends Component {
  render() {
    return (
        <>
      <View style={styles.container}>
       <StatusBar barStyle='dark-content' />

        <Image 
        source={require('../../assets/logohorizontal.png')} 
        style={styles.logohorizontal}
        />
      </View>

      <View style={styles.signintext}>

      <Text style={styles.texttitle}>Sign In</Text>
      <Text style={styles.textsubtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </Text>
      
      </View>
      
     <View>
     <UselessTextInput />
     </View>

      </>
    )
  }
}