import React from 'react';
import {View, Text} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const params = route.params;
  return (
    <View style={{backgroundColor: params.color}}>
      <Text>pokemon info: </Text>
      <Text>{JSON.stringify(params.singlePokemon, null, 2)}</Text>
    </View>
  );
};
