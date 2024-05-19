import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React, { useContext }  from 'react';
import RegistroContext from './GloblaContext';
import styles from '../css/styles';

export default function ListRecipe() {
  const { registros, setRegistros } = useContext(RegistroContext);

  const handleRemoveRegistro = (id) => {
    const updatedRegistros = registros.filter((registro) => registro.id !== id);
    setRegistros(updatedRegistros);
  };

  const renderedRegistros = registros.map((registro) => (
    <View style={styles.textContainer}>
      <Text>{registro.id} | {registro.Receta} | {registro.Ingrediente} | </Text>
      <Button
        title='Eliminar'
        onPress={() => handleRemoveRegistro(registro.id)}
      />
    </View>
  ));

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../img/logo-recetas.png')}
        style={{ width: '90%', height: '30%' }}
        resizeMode='contain'
        resizeMethod='auto'
      />
      <Text style={{fontSize: 35, marginBottom: 15, textAlign: 'center'}} >Lista de registros:</Text>
      {renderedRegistros}
    </View>
  )
}
