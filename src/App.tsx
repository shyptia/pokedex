import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './styles/App.css';

import { getPokemons, getOnePokemon } from './api/pokemons';
import { Pokemon } from './types/Pokemon';
import { Loader } from './components/Loader';
import { GridComponent } from './components/GridComponent';
import { MessageNotification } from './components/MessageNotification';
import { linkToGetTwelvePokemons } from './utils/links';
import { LoadButton } from './components/LoadButton';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { SelectedPokemon } from './components/SelectedPokemon';

export const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isPokemonsLoading, setIsPokemonsLoading] = useState(false);
  const [isLoadingFinish, setIsLoadingFinish] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [linkToLoadNextPokemons, setLinkToLoadNextPokemons] = useState('');
  const [selectedIdPokemon, setSelectedIdPokemon] = useState(0);
  const [selectedTypeFilters, setSelectedTypeFilters] = useState<string[]>([]);

  const loadPokemons = useCallback(async (url = linkToGetTwelvePokemons) => {
    try {
      setPokemons([]);
      setSelectedTypeFilters([]);
      setIsPokemonsLoading(true);

      const data = await getPokemons(url);

      if (data.next) {
        setLinkToLoadNextPokemons(data.next);
      }
      
      const loadedPokemons: Pokemon[] = await Promise.all(
        data.results.map(item => getOnePokemon(item.url))
      );

      setPokemons(loadedPokemons);
    } catch {
      setErrorMessage('Something went wrong');
    } finally {
      setIsPokemonsLoading(false);
      setIsLoadingFinish(true);
    }
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  const selectedPokemon = useMemo(() => {
    return pokemons.find(pokemon => pokemon.id === selectedIdPokemon);
  }, [pokemons, selectedIdPokemon]);

  const visiblePokemons = useMemo(() => {
    if (!selectedTypeFilters.length) {
      return pokemons;
    }

    return pokemons.filter(pokemon => pokemon.types.some(
      type => selectedTypeFilters.includes(type.type.name)
    ));
  }, [pokemons, selectedTypeFilters]);

  const isDataLoaded = pokemons.length > 0 && isLoadingFinish;
  const isNoSuitablePokemons =
    visiblePokemons.length === 0
    && isLoadingFinish
    && !errorMessage;
  
  return (
    <>
      <Header />

      <main className='main'>
        <div className='main__container'>
          {isPokemonsLoading && <Loader />}

          {isDataLoaded && (
            <>
              <FilterBar
                selectedTypeFilters={selectedTypeFilters}
                setSelectedTypeFilters={setSelectedTypeFilters}
              />
              
              <GridComponent
                pokemons={visiblePokemons}
                setSelectedIdPokemon={setSelectedIdPokemon}
              />

              {isNoSuitablePokemons && (
                <MessageNotification
                  message='There is no suitable pokemons'
                  type="info"
                  setErrorMessage={setErrorMessage}
                />
              )}

              <LoadButton
                content='Load more'
                linkToLoadNextPokemons={linkToLoadNextPokemons}
                loadPokemons={loadPokemons}
              />
            </>
          )}

          {errorMessage && (
            <MessageNotification
              message={errorMessage}
              type="error"
              setErrorMessage={setErrorMessage}
            />
          )}
        </div>
        
        {selectedPokemon && (
          <SelectedPokemon
            selectedPokemon={selectedPokemon}
            setSelectedIdPokemon={setSelectedIdPokemon}
          />
        )}
      </main>
    </>
  );
}
