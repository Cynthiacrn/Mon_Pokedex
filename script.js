class Pokemon{
    constructor(name, type, caught){
        this.name = name;
        this.type = type;
        this.caught = caught;
    }
}



let Bulbizarre = new Pokemon('Bulbizarre', 'Plante', true);
let Salamèche = new Pokemon ('Salamèche', 'Feu', false);
let Carapuce = new Pokemon ('Carapuce', 'Eau', true);
let Pikachu = new Pokemon ('Pikachu', 'Electrique', true);
let Tortank = new Pokemon ('Tortank', 'Eau', false);


/* document.getElementById('pokemon_list').innerHTML = '<li>'+ "Nom: " + Bulbizarre.name + '</li> <li>' + "Type: "+ Bulbizarre.type + '</li> <li>' + "Obtenu: " + Bulbizarre.caught + '</li>' */


//Création d'une fonction que je pourrais appeler dans ma boucle for:
/* function pokedex (pokemon){
    if (pokemon.caught === true){
    return "J'ai déjà " + pokemon.name + " !!" 
}
else{
    return pokemon.name+ " n'est pas encore dans mon Pokédex. Il va falloir le trouver !!" 
}
}


function loveWater (pokemon){
    if(pokemon.type === "Eau"){
    return "J'aime beaucoup " + pokemon.name + "!"}
    else{
        return ""
    }
}

let myPokemons = [Bulbizarre, Salamèche, Carapuce, Pikachu, Tortank]

//Boucle for afin de faire défiler ma liste
for ( const pokemon of myPokemons){
    document.getElementById('pokemon_list').innerHTML += '<li>'+ "Nom: " + pokemon
    .name + '</li> <li>' + "Type: "+ pokemon
    .type + '</li> <li>' + "Obtenu: " + pokedex(pokemon) + '</li></br><h1>' + loveWater (pokemon) + '</h1>'
}





 /*fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
  .then((response) => response.json()) 
  .then((json) => console.log(json)); */

/* const fetchVenusaur = async() => {

    venusaur = await fetch('https://pokeapi.co/api/v2/pokemon/venusaur')
    .then(response => response.json());
};

fetchVenusaur(); */
  
async function myFetch(nom) {

    let response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nom)
    let pokemon = await response.json()
    console.log(pokemon)
    newPokemon(pokemon.name, pokemon.sprites.front_default, pokemon.types[0].type.name)
}

function newPokemon(nom, img, type){
document.getElementById('pokemon_list').innerHTML = `<li> ${nom} <br>
<img src="${img}"/> ${type}</li> `
}


function searchBar(e){
    let pokemonNom = document.getElementById('searchBar').value
    myFetch(pokemonNom)
    /*if (e.key === 'Enter' || e.keyCode === 13){
        myFetch(pokemonNom)
    }
    if(e.pointerType == "mouse"){
        myFetch(pokemonNom)
    }
    console.log(e)*/
}


//document.getElementById('enterButton').addEventListener('click', searchBar)
document.getElementById('searchBar').addEventListener('keyup', function (event){
    searchBar(event)
}) 
    // Do something

console.log(document.getElementById('enterButton'))







  
  
   
  

  
  
   
  
  
  
  
  
  



