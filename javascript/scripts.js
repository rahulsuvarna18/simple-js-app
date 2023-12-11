//Height is in m
//weight is in kg

// const pokemonList = [
// {
//   id: 1,
//   name: "Bulbasaur",
//   height: 0.7,
//   weight: 6.9,
//   type: ["grass", "poison"],
// },
// {
//   id: 2,
//   name: "Charmander",
//   height: 0.6,
//   weight: 8.5,
//   type: ["fire"],
// },
// {
//   id: 3,
//   name: "Squirtle",
//   height: 0.5,
//   weight: 9,
//   type: ["water"],
// },
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
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  /*   async function loadList() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      // console.log(data.results[0]);

      const pokemons = data.results.forEach((item) => {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url,
        };
        // console.log(pokemon);
        add(pokemon);
        return pokemon;
      });

      console.log(pokemons);
    } catch (error) {
      throw new Error(error);
    }
  } */

  function add(pokemon) {
    // console.log("add function triggered");
    // console.log(pokemon);
    pokemonList.push(pokemon);
  }

  // console.log(pokemonList);

  function getAll() {
    return pokemonList;
  }

  // function showDetails(pokemon) {
  //   console.log(pokemon);
  // }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon.name, pokemon.height);
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    let modalContainer = document.querySelector("#modal-container");
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  function showModal(title, text) {
    let modalContainer = document.querySelector("#modal-container");

    // Clear all existing modal content
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    // Add the new modal content
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = title;

    let contentElement = document.createElement("p");
    contentElement.innerText = text + "0 cm";

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

    modalContainer.addEventListener("click", (e) => {
      // Since this is also triggered when clicking INSIDE the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
      console.log(modal);
      console.log(e.target);
    });
  }

  function addListItem(pokemon) {
    let ulItem = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");

    button.innerText = pokemon.name;

    button.classList.add("pokemon-button");

    listItem.appendChild(button);
    ulItem.appendChild(listItem);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            // imageUrl: "",
          };

          // console.log(pokemon);
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;

    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // console.log(details);
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  /*   async function loadList() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await res.json();

    const pokemons = data.results.forEach((item) => {
      // console.log(item.name);
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };

      console.log(pokemon.name);

      return pokemon;
    });

    console.log(pokemons);

    // add([data.results]);
  } */

  return {
    add,
    getAll,
    addListItem,
    loadList,
    showDetails,
  };
})();

// console.log("getall");
// pokemonRepository.getAll();
// pokemonRepository.loadList();

// console.log(pokemonRepository.getAll());

// pokemonRepository.getAll().forEach((pokemon) => {
//   // console.log("pokemon");
//   // console.log(pokemon);
//   pokemonRepository.addListItem(pokemon);
// });

pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
