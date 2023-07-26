let pokemonRepository = (function () {

    let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon 
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  function getAll() {
    return pokemonList;
  }
function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);

    button.addEventListener("click", function () {
      showDetails(pokemon);
    });

}

function showDetails(pokemon){
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

function loadList() {
  return fetch(apiUrl).then(function (response){
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url 
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  })
}

function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
 }).then(function (details){
  item.imageUrl = details.sprites.front_default;
  item.height = details.height;
  item.type = details.type;
 }).catch(function (e){
  console.error(e);
 });
}

return {
    getAll: getAll,
    add: add,
    addListItem: addListItem, 
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
}
})();

pokemonRepository.loadList().then(function(){
pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

let message;
message= "Here is a list of my favorite pokemon, enjoy!!";

alert(message);

/*pokemonList.forEach(myLoopFunction); 




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