import {useEffect, useRef, useState} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  PokemonResponse,
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

  // const getSinglePokemon = async (url: string) => {
  //   // console.log(url);

  //   const pokemonResponse = await pokemonApi.get<PokemonResponse>(url);

  //   const mappedPokemon = {
  //     id: String(pokemonResponse.data.id),
  //     name: pokemonResponse.data.name,
  //     picture: pokemonResponse.data.sprites.front_default,
  //     // color?:
  //   };

  //   setSinglePokemonList([...singlePokemonList, mappedPokemon]);
  //   // console.log(JSON.stringify(singlePokemonList, null, 2));
  // };

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    // pokemonList.forEach(pokemon => {
    //   // getSinglePokemon(pokemon.url);
    // });
    // console.log(JSON.stringify(singlePokemonList, null, 2));

    const PokemonList: SinglePokemon[] = pokemonList.map(pokemon => {
      const urlParts = pokemon.url.split('/');
      const id = urlParts[urlParts.length - 2];

      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, name: pokemon.name, picture};

      // console.log(urlParts, id);
    });

    setSinglePokemonList([...singlePokemonList, ...PokemonList]);
  };
  // const nextPageUrl
  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    singlePokemonList,
  };
};
