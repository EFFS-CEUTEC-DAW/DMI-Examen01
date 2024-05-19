import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// Imports Propios
import RegistroContext from './GloblaContext';
import Home from './Home';
import AddRecipe from './AddRecipe';
import ListRecipe from './ListRecipe';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation() {
  const [registros, setRegistros] = useState([]);

  return (
    <RegistroContext.Provider value={{ registros, setRegistros }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="AddRecipeScr" component={AddRecipe} />
          <Stack.Screen name="ListRecipeScr" component={ListRecipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </RegistroContext.Provider>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScr" component={Home} />
      <Tab.Screen name="AddRecipeScr" component={AddRecipe} />
      <Tab.Screen name="ListRecipeScr" component={ListRecipe} />
    </Tab.Navigator>
  );
};