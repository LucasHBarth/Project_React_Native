import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ButtonSocialLogin extends Component {
  render() {
    return (
      <View style={styles.containerButton}>
       <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.buttonEmail}>
        <Text style={styles.textButton}>Login with email</Text>
        <Icon style={styles.icon} name="envelope" size={20} color="#fff" />
        
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.buttonFacebook}>
        <Text style={styles.textButton}>Login with facebook</Text>
        <Icon style={styles.icon} name="facebook" size={20} color="#fff" />
      </TouchableOpacity>
     

      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.buttonGoogle}>
        <Text style={styles.textButtonGoogle}>Login with Google</Text>
        <Icon style={styles.icon} name="google" size={20} color="#000" />
      </TouchableOpacity>
      

      
      </View>
    )
  }
}