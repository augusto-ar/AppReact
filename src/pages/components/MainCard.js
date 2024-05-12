import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'


const MainCard = (props) => {

//   const Icon = () => {
//     if(props.icon === 'morning'){
//         return(
//             <Feather style={styles.cardIcon} name="sun" size={10} color="black" />
//         )   
//     }
//     if(props.icon === 'afternoon'){
//         return(
//             <Fontisto style={styles.cardIcon} name="day-cloudy" size={5} color="black" />
//         )   
//     }
//     if(props.icon === 'night'){
//         return(
//             <Feather style={styles.cardIcon} name="cloud-rain" size={5} color="black" />
//         )   
//     }         
// }

    return(
        <View style={styles.card}>
           
           <Text>
           {/* <Icon></Icon> */}
           <Text style={styles.cardTitle}> {props.title}
            <Text style={[styles.cardText, {color: props.colorTexte}]}> {props.texto}</Text>  
            </Text>  
           </Text>
                  
         </View>
    )
}

const styles = StyleSheet.create({   
    card:{    
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      margin: 10,
      width: 250,
      backgroundColor:'white'
    },
    cardTitle:{
      color: 'black',
      fontSize: 15,
    },
    cardText:{
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardIcon: {
      color: 'black',
    },  
  });

export default MainCard;