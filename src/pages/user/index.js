import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useEffect} from 'react'
import { styles } from './styles';
import MainCard from "../components/MainCard"


export default function usuario({navigation}) {
  
  async function setCampo(){
    //aqui chama a api que ira preencher as view
  }


  useEffect(() => {
    setCampo()
  }, [])

  return (
    <View style={styles.container}>
    <View >
      <MainCard icon='morning' title={"Temperatura"}  texto={"27°"} colorTexte={ 'orange'} ></MainCard>
    </View>
    <View >
      <MainCard icon='afternoon' title={"Umidade"}  texto={"27"} colorTexte={ 'blue'} ></MainCard>
    </View>
    <View >
      <MainCard icon='night' title={"Pressão"}  texto={"117 Pa"} colorTexte={ 'green'} ></MainCard>
    </View>
  </View>
  
  );
}