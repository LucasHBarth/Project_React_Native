import { Text, View, StatusBar, Image } from 'react-native';
import styles from './styles';
import React, { Component } from 'react';
import ButtonSocialLogin from '../ButtonSocialLogin';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
       <StatusBar barStyle='dark-content' />

     <Image 
     source={require('../../assets/logoLogin.png')} 
     style={styles.logoLogin}
     />
      
      <Text style={styles.titleLogin}>Morning begins with Ombe coffee</Text>

        <ButtonSocialLogin />
        
      
      </View>
    )
  }
}