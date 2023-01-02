import {useState, useEffect} from 'react';
import {pokemonApi} from '../api/pokemonApi';
import {PokemonFullInfo} from '../interfaces/pokemonInterfaces';

export const usePokemon = (id: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonFullInfo>(
    {} as PokemonFullInfo,
  );

  const loadPokemon = async () => {
    const res = await pokemonApi.get<PokemonFullInfo>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );

    setPokemon(res.data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
