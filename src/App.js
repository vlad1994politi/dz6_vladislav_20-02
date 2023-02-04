
import { useEffect, useState } from 'react';
import { fetchPokemonsByName } from './api/fetchPokemonByName';
import { fetchPokemons } from './api/fetchPokemons';
import PokemonCard from './components/PokemonCard';
import './theme/index.css'
import { useTheme } from './theme/useTheme';


function App() {

  const { theme, toggleTheme } = useTheme()
  const [pokemons, setPokemon] = useState ([])

  useEffect(() => {
    fetchPokemons()
      .then((data) => console.log(data))

    // fetchPokemonsByName('pikachu')
    //   .then((data) => console.log(data))
  }, [])

  return (
    <div className={`app ${theme}`}>
      <PokemonCard/>
      <button className='btn' onClick={toggleTheme}>Change color</button>
    </div>
  );
}

export default App;
