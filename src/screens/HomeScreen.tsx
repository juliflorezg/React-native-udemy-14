import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text, Button, Image, ActivityIndicator, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import {styles} from '../theme/appTheme';
// import {FadeInImage} from '../components/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';

interface Props extends StackScreenProps<any, any> {}

export const HomeScreen = ({navigation, route}: Props) => {
  const {top} = useSafeAreaInsets();
  const {isLoading, singlePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      {/* <Icon name="dot-circle" size={30} color="red" /> */}

      <View style={{...styles.globalMargin, alignItems: 'center'}}>
        <FlatList
          data={singlePokemonList}
          renderItem={({item}) => (
            // <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
            <PokemonCard pokemon={item} navigation={navigation} route={route} />
          )}
          keyExtractor={pokemon => pokemon.id}
          //infinite scroll
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={30} color="black" />
          }
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={{...styles.title, ...styles.globalMargin}}>
              Pokedex
            </Text>
          }
          // contentContainerStyle={{
          //   justifyContent: 'center',
          //   alignItems: 'center',
          // }}
        />
      </View>
      {/* <Button
        title="Go to Pokemon page"
        onPress={() => navigation.navigate('PokemonScreen')}
      /> */}
    </>
  );
};
