import React, { useState } from 'react';
import styles from './styles';
import { StyleSheet, Image, View, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_600SemiBold, } from '@expo-google-fonts/poppins';

import AppIntroSlider from 'react-native-app-intro-slider';

const sliders = [
    {
        key: '1',
        title: 'Let’s meet our summer coffee drinks',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: require('../../assets/illustration1.png')
    },
    {
        key: '2',
        title: 'Let’s meet our summer coffee',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: require('../../assets/illustration2.png')
    },
    {
        key: '2',
        title: 'Let’s meet our coffee',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: require('../../assets/illustration.png')
    },
]

export default function Instructions () {
 const [showHome, setShowHome] = useState(false);

 function renderSliders({item}){
    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold, 
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }
    
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image 
            source={item.image}
           
        />
        <Text  style={{color: '#000', fontFamily: 'Poppins_600SemiBold', textAlign: 'center', fontWeight: '600', width: '90%'}} >
            {item.title}
        </Text>

        <Text>
            {item.text}
        </Text>
    </View>
    )
 }

 if(showHome){
    return <Text>ENTROU NA HOME</Text>
 }else{
    return (
       <AppIntroSlider 
        renderItem={renderSliders}
        data={sliders}
        activeDotStyle={{
            backgroundColor: '#009CFF',
            width: 30,
            
        }}
       />
      );
 }
  
  
}

