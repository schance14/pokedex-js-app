let pokemonList = [
    { name: 'Snorlax', height: 2.1, type: 'normal'},
    { name: 'Raichu', height: .8, type: 'electric'},
    { name: 'Ponyta', height: 1, type: 'fire'}
];
for (let i=0;i <pokemonList.length; i++ ){
    if (pokemonList[i].height>1.1){
    document.write(pokemonList[i].name + '&nbsp;' + pokemonList[i].height + ' That is one big sleepy boy!'+ '<br/>');
}else if(pokemonList[i].height<1.1){
    document.write(pokemonList[i].name + '&nbsp;' + pokemonList[i].height + " <br/>");
}
}