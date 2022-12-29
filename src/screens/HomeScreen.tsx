import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  return (
    <View>
      <Icon name="dot-circle" size={30} color="red" />
      <Text>home</Text>
      <Button
        title="Go to Pokemon page"
        onPress={() => navigation.navigate('PokemonScreen')}
      />
    </View>
  );
};
