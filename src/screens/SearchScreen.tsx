import {StackScreenProps} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {View, Platform, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const SearchScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {isFetching, singlePokemonList} = usePokemonSearch();
  const [singlePokemonSearchResults, setSinglePokemonSearchResults] =
    useState(singlePokemonList);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setSinglePokemonSearchResults([]);
    } else if (isNaN(Number(term))) {
      setSinglePokemonSearchResults(() => {
        return singlePokemonList.filter(singlePokemon =>
          singlePokemon.name.toLowerCase().includes(term.toLowerCase()),
        );
      });
    } else {
      setSinglePokemonSearchResults(() => {
        const pokemonById = singlePokemonList.find(
          singlePokemon => singlePokemon.id === term,
        );
        return pokemonById ? [pokemonById] : [];
      });
    }
  }, [term]);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={(value: string) => {
          setTerm(value);
        }}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: '100%',
          top: Platform.OS === 'ios' ? top : top + 20,
        }}
      />

      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
            }}>
            {term}
          </Text>
        }
        data={singlePokemonSearchResults}
        renderItem={({item}) => (
          <PokemonCard pokemon={item} navigation={navigation} route={route} />
        )}
        keyExtractor={pokemon => pokemon.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
