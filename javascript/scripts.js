//Height is in m
//weight is in kg

// const pokemonList = [
//   {
//     id: 1,
//     name: "Bulbasaur",
//     height: 0.7,
//     weight: 6.9,
//     type: ["grass", "poison"],
//   },
//   {
//     id: 2,
//     name: "Charmander",
//     height: 0.6,
//     weight: 8.5,
//     type: ["fire"],
//   },
//   {
//     id: 3,
//     name: "Squirtle",
//     height: 0.5,
//     weight: 9,
//     type: ["water"],
//   },
// ];

// for (let i = 0; i < pokemonList.length; i++) {
//   const pokemon = pokemonList[i];
//   const pokemonHeight = pokemonList[i].height;
//   const html = `<h1>${pokemon.name}</h1>
//                 <h3>${
//                   pokemonHeight >= 0.7
//                     ? `Height: ${pokemonHeight}m - Wow! That is big!`
//                     : `Height: ${pokemonHeight}m`
//                 }</h3>`;
//   document.write(html);
// }

let pokemonRepository = (function () {
  const pokemonList = [
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add,
    getAll,
  };
})();

// console.log(pokemonRepository.getAll());

const pokemonLoop = pokemonRepository.getAll().forEach((pokemon) => {
  document.write(`<h1>${pokemon.name}</h1>
                <h3>${
                  pokemon.height >= 0.7
                    ? `Height: ${pokemon.height}m - Wow! That is big!`
                    : `Height: ${pokemon.height}m`
                }</h3>`);
});
