import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

// Imports Propios
import RegistroContext from './GloblaContext';
import Home from './Home';
import AddRecipe from './AddRecipe';
import ListRecipe from './ListRecipe';
import SearchRecipeSrc from './SearchRecipe';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navigation( { navigation } ) {
  const [registros, setRegistros] = useState([]);

  return (
    <RegistroContext.Provider value={{ registros, setRegistros }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tabs">
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </RegistroContext.Provider>
  );
}

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} 
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='home' color='grey' size={20} />
          ),
        tabBarActiveTintColor: '#000000',
        }} />
      <Tab.Screen name="Formulario" component={AddRecipe}  
        options={{
        tabBarLabel: 'Formulario',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='feed' color='grey' size={20} />
          ),
        tabBarActiveTintColor: '#000000',
        }} />
      <Tab.Screen name="Lista" component={ListRecipe} 
        options={{
        tabBarLabel: 'Formulario',
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='format-list-numbered' color='grey' size={20} />
          ),
        tabBarActiveTintColor: '#000000',
        }} />
    </Tab.Navigator>
  );
};