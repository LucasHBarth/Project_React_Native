import React from 'react';
import styles from './styles';
import { StyleSheet, Image, View, StatusBar } from 'react-native';
export default function Splash() {
  return (
    <View style={styles.container}>                
      <StatusBar barStyle='light-content' />
     <Image source={require('../../assets/logo.png')} />
    </View>
  );
  
}

