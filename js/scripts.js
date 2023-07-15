let pokemonRepository = (function () {

    let pokemonList = [
    { name: 'Snorlax', height: 2.1, type: 'normal'},
    { name: 'Raichu', height: .8, type: 'electric'},
    { name: 'Ponyta', height: 1, type: 'fire'}
];

function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      pokemon.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemon;
  }
function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

}

function showDetails(pokemon){
  const button = document.createElement('button');
  console.log()

}
return {
    getAll: getAll,
    add: add,
    addListItem: addListItem, 
    showDetails: showDetails
}
})();

pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});


let message;
message= "Here is a list of my favorite pokemon, enjoy!!";

alert(message);

pokemonList.forEach(myLoopFunction); 




/* previous code, saving as a ref..
for (let i=0;i <pokemonList.length; i++ ){
    if (pokemonList[i].height>1.1){
    document.write(pokemonList[i].name + '&nbsp;' + pokemonList[i].height + ' That is one big sleepy boy!'+ '<br/>');
}else if(pokemonList[i].height<1.1){
    document.write(pokemonList[i].name + '&nbsp;' + pokemonList[i].height + " <br/>");
}
}*/


/*pokemonRepository.getAll().forEach(function (pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
});*/