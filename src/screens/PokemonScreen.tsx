import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';
import {PokemonDetails} from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const params = route.params;
  const {top} = useSafeAreaInsets();

  const {isLoading, pokemon: fullPokemonInfo} = usePokemon(
    params.singlePokemon.id,
  );

  // console.log(fullPokemonInfo);
  return (
    <>
      <View style={{...styles.headerContainer, backgroundColor: params.color}}>
        {/* <Text>pokemon info: </Text>
        <Text>{JSON.stringify(params.singlePokemon, null, 2)}</Text> */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{...styles.backButton, top: top + 10}}>
          <Icon
            name="arrow-alt-circle-left"
            color={params.textColor}
            size={40}
          />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 10,
            color: params.textColor,
          }}>
          {params.singlePokemon.name + '\n'}#{params.singlePokemon.id}
        </Text>

        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />

        <FadeInImage
          uri={params.singlePokemon.picture}
          style={styles.pokemonImage}
        />
      </View>

      {/* detalles / loading */}
      {isLoading ? (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator color={params.color} size={70} />
        </View>
      ) : (
        <PokemonDetails pokemon={fullPokemonInfo} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomLeftRadius: 1000,
    borderBottomRightRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    fontSize: 40,
    alignSelf: 'center',
    textAlign: 'center',
    // left: 20,
    textTransform: 'capitalize',
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
