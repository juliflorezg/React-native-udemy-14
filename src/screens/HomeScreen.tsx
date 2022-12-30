import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, Button, Image, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const {isLoading, singlePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      {/* <Icon name="dot-circle" size={30} color="red" /> */}
      <Text style={{...styles.title, ...styles.globalMargin, top: top + 20}}>
        Pokedex
      </Text>

      <FlatList
        data={singlePokemonList}
        renderItem={({item}) => (
          <Image
            source={{uri: item.picture}}
            style={{width: 100, height: 100}}
          />
        )}
        keyExtractor={pokemon => pokemon.id}
        //infinite scroll
        onEndReached={loadPokemons}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          <ActivityIndicator style={{height: 100}} size={30} color="black" />
        }
        showsVerticalScrollIndicator={false}
      />
      <Button
        title="Go to Pokemon page"
        onPress={() => navigation.navigate('PokemonScreen')}
      />
    </>
  );
};
