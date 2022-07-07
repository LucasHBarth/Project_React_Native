import { Poppins_600SemiBold } from "@expo-google-fonts/dev";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerButton: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        marginTop: 650,
        marginLeft: 20,
        
      
    },
    button1:{
        borderColor:  '#F6DBB3',
        width: 130,
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        marginLeft: 25,
    },
    button2: {
        backgroundColor: '#04764E',
        borderRadius: 20,
        width: 130,
        height: 50,
        marginLeft: 25,
        
        
    },
    textButton1: {
        color: '#000000',
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15,
        justifyContent: 'center',
           alignItems: 'center',
       },

    textButton2: {
     color: '#fff',
     fontWeight: '700',
     textAlign: 'center',
     marginTop: 15,
     justifyContent: 'center',
        alignItems: 'center',
    },
    
    

  });