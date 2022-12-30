import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {SinglePokemon} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

const windowWidth = Dimensions.get('window').width;

interface Props {
  pokemon: SinglePokemon;
}

export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <View style={{...styles.cardContainer}}>
        {/* Pokemons Name & id */}
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>
        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={styles.pokemonImage} />
      </View>
      {/* <Text style={{color: 'black'}}>{pokemon.name}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'red',
    height: 120,
    width: windowWidth * 0.4,
    marginBottom: 25,
    borderRadius: 10,
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 9.11,

    elevation: 14,
  },
  name: {
    color: 'wheat',
    fontSize: 20,
    fontWeight: 'bold',
    top: 15,
    left: 10,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    opacity: 0.6,
    overflow: 'hidden',
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
    // opacity: 0.5,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -8,
  },
});