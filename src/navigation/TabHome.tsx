import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {PokemonScreen} from '../screens/PokemonScreen';
import {SinglePokemon} from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {
    singlePokemon: SinglePokemon;
    color: string;
    textColor: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const TabHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};
