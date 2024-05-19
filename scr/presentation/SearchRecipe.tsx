import React from 'react';
import { View, Text } from 'react-native';

export default function SearchRecipe ( { route, navigation } ) {
  const { searchText } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text>Detalles de la búsqueda: {searchText}</Text>
    </View>
  )
}
