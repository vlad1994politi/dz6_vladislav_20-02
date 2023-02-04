

const PokemonCard = () => {

  return (
    <div className="pokemonCard">
      {/*список покемонов*/}
      <ol className="pokemonLi">
        {pokemons.map((data, i) =>
        <li key={i}>{data.name}</li>
        )
        }
      </ol>
    </div>
  )
}

export default PokemonCard