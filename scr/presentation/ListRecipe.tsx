import { Text, View, Image, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import React, { useContext, useState }  from 'react';
import RegistroContext from './GloblaContext';
import styles from '../css/styles';

export default function ListRecipe( { navigation } ) {

  const [searchText, setSearchText] = useState('');
  const { registros, setRegistros } = useContext(RegistroContext);
  const { searchRecipes, setSearchRecipes } = useContext(RegistroContext);
  const [searchRecipe, setSearchRecipe] = useState('');
  
  const handleRemoveRegistro = (id) => {
    const updatedRegistros = registros.filter((registro) => registro.id !== id);
    setRegistros(updatedRegistros);
    Alert.alert('Se eliminó el registro correctamente.');
  };

  const handleSearch = () => {
    const searchData = registros.filter(item => item.Receta === searchText);
    setSearchRecipe(searchData);
    navigation.navigate('SearchRecipeSrc', { searchRecipe });
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

      <View style={{ padding: 20 }}>
        <TextInput
          placeholder="Buscar..."
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />

        <TouchableOpacity onPress={handleSearch}>
          <Button title="Buscar" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
