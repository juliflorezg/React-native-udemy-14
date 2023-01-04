import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SinglePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  // const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
  const [singlePokemonList, setSinglePokemonList] = useState<SinglePokemon[]>(
    [],
  );
  const [isFetching, setIsFetching] = useState(true);
  const loadPokemons = async () => {
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      'http://pokeapi.co/api/v2/pokemon?limit=1200',
    );

    mapPokemonListToSinglePokemon(res.data.results);
  };

  const mapPokemonListToSinglePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SinglePokemon[] = pokemonList.map(pokemon => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2];

      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, name: pokemon.name, picture};

      // console.log(urlParts, id);
    });

    setSinglePokemonList(newPokemonList);
    setIsFetching(false);
  };
  // const nextPageUrl
  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    isFetching,
    singlePokemonList,
  };
};
