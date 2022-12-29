import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SinglePokemon,
} from '../interfaces/pokemonInterfaces';

export const usePokemonPaginated = () => {
  // const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');
  const [singlePokemonList, setSinglePokemonList] = useState<SinglePokemon[]>(
    [],
  );
  const loadPokemons = async () => {
    const res = await pokemonApi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );

    nextPageUrl.current = res.data.next;
    mapPokemonListToSimplePokemon(res.data.results);

    console.log(res.data.next);
  };

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    pokemonList.forEach(pokemon => {
      console.log(pokemon.name);
    });
  };
  // const nextPageUrl
  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    simplePokemonList: singlePokemonList,
  };
};
