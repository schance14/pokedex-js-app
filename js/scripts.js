let pokemonRepository = (function () {

    let pokemonList = [
    { name: 'Snorlax', height: 2.1, type: 'normal'},
    { name: 'Raichu', height: .8, type: 'electric'},
    { name: 'Ponyta', height: 1, type: 'fire'}
];

function getAll() {
    return pokemonList;
}
function add (pokemon) {
    pokemonList.push(pokemon);
}

return {
    getAll: getAll,
    add: add
};
})();

document.write(pokemonRepository.getAll());

function myLoopFunction(pokemon) {
    document.write(pokemon.name + ' is ' + pokemon.height + ' mm, and their pokemon type is ' + pokemon.type + " <br/>");
};


pokemonList.forEach(myLoopFunction);


/*for (let i=0;i <pokemonList.length; i++ ){
    if (pokemonList[i].height>1.1){
    document.write(pokemonList[i].name + '&nbsp;' + pokemonList[i].height + ' That is one big sleepy boy!'+ '<br/>');
}else if(pokemonList[i].height<1.1){
    document.write(pokemonList[i].name + '&nbsp;' + pokemonList[i].height + " <br/>");
}
}*/
