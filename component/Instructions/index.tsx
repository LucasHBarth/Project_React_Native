import React, { useState } from 'react';
import styles from './styles';
import { Image, View, Text, StatusBar} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import ButtonInstructions from '../ButtonInstructions';


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
        key: '3',
        title: 'Let’s meet our coffee',
        text: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: require('../../assets/illustration.png')
    },
]


export default function Instructions () {
 const [showHome, setShowHome] = useState(false);
 
    function renderSliders({item}){
    
        return(
            <View style={{flex: 1, justifyContent: 'center',alignItems: 'center'}}>
               <StatusBar barStyle= 'dark-content' />
                <Image 
                source={item.image}
               
            />
            <Text  style={styles.title} >
                {item.title}
            </Text>
    
            <Text style={styles.subtitle}>
                {item.text}
            </Text>
            
        </View>
        
        )
        
     }   
     
  
     if(showHome){
        return <Text>ENTROU NA HOME</Text>
     }else{
        return (
        <>
           <AppIntroSlider
            renderItem={renderSliders}
            data={sliders}
            activeDotStyle={{
                backgroundColor: '#04764E',
                width: 30,
            }}/> 


            <ButtonInstructions />
           
        </>
          
       );
         
    }    
}     
