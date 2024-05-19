import React, {useState, useContext } from 'react';
import {View,Text,TextInput,Button,Image,FlatList,Alert} from 'react-native';
import RegistroContext from './GloblaContext';
import styles from '../css/styles';

export default function AddRecipe() {
  const [nombreReceta, setNombreReceta] = useState('');
  const [ingrediente, setIngrediente] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { registros, setRegistros } = useContext(RegistroContext);

  const handleAddRecipe = () => {
    if (nombreReceta.length == 0) {
      Alert.alert('El nombre de la receta es obligatorio.');
      return;
    }

    if (ingrediente.length == 0) {
      Alert.alert('Los Ingredientes de la receta es obligatorio.');
      return;
    }

    const newRecipe = {nombreReceta, ingrediente};
    setRecipes([...recipes, newRecipe]);
    onSave();
    setNombreReceta('');
    setIngrediente('');
  };

  const onSave = () => {
    const inpNombreReceta = nombreReceta;
    const inpIngrediente = ingrediente;
    
    // Crear un nuevo registro
    const newRegistro = {
      id: registros.length > 0 ? registros[registros.length - 1].id + 1 : 1,
      Receta: inpNombreReceta,
      Ingrediente: inpIngrediente,
    };
    
    // Actualizar el estado
    setRegistros([...registros, newRegistro]);
  };

  const renderedRegistros = registros.map((registro) => (
    <View style={styles.textContainer}>
      <Text style={{fontSize: 18, marginEnd: 5}}>{registro.id} | {registro.Receta} | {registro.Ingrediente} </Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <Image
        source={require('../img/logo-recetas.png')}
        style={{ width: '90%', height: '30%' }}
        resizeMode='contain'
        resizeMethod='auto'
      />

      <Text style={{fontSize: 35, marginBottom: 15, textAlign: 'center'}} >Ingreso de Recetas</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre Receta"
        value={nombreReceta}
        onChangeText={text => setNombreReceta(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingredientes"
        value={ingrediente}
        onChangeText={text => setIngrediente(text)}
      />
      <Button title="Agregar" onPress={handleAddRecipe} />
      {renderedRegistros}
    </View>
  )
}
