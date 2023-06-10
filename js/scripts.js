let pokemonList = [
    { name: 'Snorlax', height: 2.1, types: 'normal'},
    { name: 'Raichu', height: .8, types: 'electric'},
    { name: 'Ponyta', height: 1, types: 'fire'}
];
for (let i=0;i <pokemonList.length; i++ ){
    if (pokemonList[i].height<1.1)
    console.log(pokemonList[i].name + pokemonList.height + 'That is one big sleepy boy!');
}else if(pokemonList[i].height>1){
    console.log(pokemonList.name + pokemonList.height);
}