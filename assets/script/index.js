/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
API Practice
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

const search = document.querySelector(".search");
const pokeName = document.querySelector(".pokemonName");
const pokemonBox = document.querySelector(".pokemonBox");

search.addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const pokemonName = lowerCaseName(pokeName.value);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      pokemonBox.innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos center">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Weight: ${data.weight}</p>
        <p>Height: ${data.height}</p>
      </div>`;
    })
    .catch((error) => {
      pokemonBox.innerHTML = `<h4>Sorry, Pokemon not found</h4>`;
      console.log("Pokemon not found", error);
    });
}