let pokemonListArray = [
    { name: 'Snorlax', height: 2.1, types: 'normal'},
    { name: 'Raichu', height: .8, types: 'electric'},
    { name: 'Ponyta', height: 1, types: 'fire'}
];


let personAge = [
    {name: 'person1', age: 16},
    {name:'person2', age: 10},
    {name: 'person3', age: 25}
];

for (let i=0; i < personAge.length; i++){
    if (personAge[i].age <19 && personAge[i].age >13){
        console.log(personAge[i].name + ' is a teenager');
    } else if (personAge[i].age <13){
        console.log(personAge[i].name + ' is a child');
} else { 
    console.log(personAge[i].name + 'is an adult');
}
} 
