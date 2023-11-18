//Height is in m
//weight is in kg

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    height: 0.7,
    weight: 6.9,
    type: ["grass", "poison"],
  },
  {
    id: 2,
    name: "Charmander",
    height: 0.6,
    weight: 8.5,
    type: ["fire"],
  },
  {
    id: 3,
    name: "Squirtle",
    height: 0.5,
    weight: 9,
    type: ["water"],
  },
];

for (let i = 0; i < pokemons.length; i++) {
  const pokemon = pokemons[i];
  const pokemonHeight = pokemons[i].height;
  const html = `<h1>${pokemon.name}</h1>
                <h3>${
                  pokemonHeight >= 0.7
                    ? `Height: ${pokemonHeight}m - Wow! That is big!`
                    : `Height: ${pokemonHeight}m`
                }</h3>`;
  document.write(html);
}
