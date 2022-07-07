import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';
import React, { Component } from 'react';

export default class ButtonInstructions extends Component {
  render() {
    return (
      <View style={styles.containerButton}>
       <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button1}>
        <Text style={styles.textButton1}>BACK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button2}>
        <Text style={styles.textButton2}>NEXT</Text>
      </TouchableOpacity>
           
      </View>
    )
  }
}