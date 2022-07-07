import React from "react";
import styles from './styles';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const UselessTextInput = () => {
 

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
      
      />
      <TextInput
        style={styles.input}
       
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};


export default UselessTextInput;