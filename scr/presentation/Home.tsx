import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../css/styles';

export default function Home( { navigation } ) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo-recetas.png')}
        style={{ width: '90%', height: '30%' }}
        resizeMode='contain'
        resizeMethod='auto'
      />

      <Text style={styles.txtGeneralDescription}>La aplicación permite a los usuarios agregar nuevas recetas, ver la lista de recetas disponibles, ver los detalles de una receta especifica y eliminar recetas existentes.</Text>

      <Text>Dueño de la Aplicación:</Text>
      <Text>Eduardo Flores.</Text>
    </View>
  )
}