//importacion de dependencias y datos
import { useState } from "react";
import pokemonsDB from "../../data/pokemons.json";
import InputFilter from "./InputFilter";
import PokemonCard from "./PokemonCard";

//Esta función toma un array de Pokémon como argumento y devuelve un array único de tipos de Pokémon
function getPokemonTypes(pokemons) {
  const types = [];

  pokemons.forEach((pokemons) => {
    pokemons.types.forEach((type) => {
      types.push(type);
    });
  });

  const set = new Set(types);
  return [...set];
}

//Esta función filtra la lista de Pokémon según el tipo proporcionado. 
function filterPokemonByType(type) {
  if (type === "") return pokemonsDB;
  return pokemonsDB.filter((pokemon) => pokemon.types.includes(type));
}

// Este es el componente principal de la aplicación. Utiliza el hook useState para gestionar el 
// estado local de la lista de Pokémon (pokemons) y el valor seleccionado en el menú desplegable (inputValue).
export default function PokemonApp() {
  const [pokemons, setPokemon] = useState(pokemonsDB);
  const [inputValue, setInputValue] = useState("");

  const typesUnique = getPokemonTypes(pokemonsDB);

  //Esta función se utiliza como un controlador de eventos que se ejecuta cuando cambia la selección en el menú desplegable (InputFilter)
  function handlerChange(newValue) {
    setInputValue(newValue);
    const nextPokemons = filterPokemonByType(newValue);
    setPokemon(nextPokemons);
  }

  return (
    <>
      <h2>Filter</h2>
      <p>
        Descripción: El componente "Filter" de Pokémon fue desarrollado
        utilizando React. Hace uso del estado local y del hook useState para
        gestionar la lista de Pokémon y el valor seleccionado en el menú
        desplegable. Al seleccionar un tipo en el menú, se activa un controlador
        de eventos que actualiza el estado y filtra la lista de Pokémon
        mostrando solo aquellos del tipo seleccionado. La interfaz clara y
        centrada en la exploración se logra mediante componentes adicionales
        como InputFilter para el menú desplegable y PokemonCard para visualizar
        cada Pokémon. Esta implementación demuestra cómo React facilita la
        creación de interfaces interactivas y dinámicas, permitiendo a los
        usuarios explorar y clasificar la información de manera eficiente.
      </p>
      <br />
      <br />
      <div className="fields-container">
        <InputFilter
          value={inputValue}
          onChange={handlerChange}
          types={typesUnique}
        />
      </div>
      <div className="list">
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={index} data={pokemon} />
        ))}
      </div>
    </>
  );
}
