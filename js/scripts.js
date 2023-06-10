let pokemonList = [
    { name: 'Snorlax', height: 2.1, types: 'normal'},
    { name: 'Raichu', height: .8, types: 'electric'},
    { name: 'Ponyta', height: 1, types: 'fire'}
];
for (let i=0;i <pokemonList.length; i++ ){
    if (pokemonList[i].height<1.1){
    document.write(pokemonList[i].name + pokemonList[i].height + ' That is one big sleepy boy!'+ "<br/>");
}else if(pokemonList[i].height>1){
    document.write(pokemonList.name + pokemonList[i].height + " <br/>");
}
}