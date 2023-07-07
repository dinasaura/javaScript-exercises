import fetch from "node-fetch"
// let data = [8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1,
//     48, 81, 99, 4, 43, 68, 90, 23 , 97, 10, 55, 11, 20, 50, 70, 83,
//     47, 25, 86, 30, 60, 96, 76, 22, 67, 77, 1];

//     function pariODispari(arr){
//       const result =  arr.reduce((sum, item) => sum + item);
//       if(result % 2 === 0){
//         return 'pari'
//       }
//       return 'dispari'
//     }


// console.log(pariODispari(data))


// esercizio 2


const namePokemon = 'charmeleon'
const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${namePokemon}`

class Pokemon{
    constructor(name, base_experience, abilities, height, id, forms, game_indices, location_area_encounters, order, weight){
        this.name = name;
        this.base_experience = base_experience;
        this.abilities = abilities;
        this.height = height;
        this.id = id;
        this.forms = forms;
        this.game_indices = game_indices;
        this.location_area_encounters = location_area_encounters;
        this.order = order;
        this.weight = weight;
    }

    consoleLogResult (){
        console.log('Name : ', this.name)
        console.log('Base Experience : ', this.base_experience)
        console.log('Abilities : ', this.abilities)
        
    }
}

fetch(urlPokemon)
.then((response)=>{
    return response.json()
})
.then((data) => {
    const name = data.name;
    const base_experience = data.base_experience;
    const abilities = data.abilities.filter((ability) => !ability.is_hidden);
    const height = data.height;
    const id =data.id;
    const forms = data.forms;
    const game_indices = data.game_indices;
    const location_area_encounters = data.location_area_encounters;
    const order = data.order;
    const weight = data.weight;
    const pokemon = new Pokemon(name, base_experience, abilities, height, id, forms, game_indices, location_area_encounters, order, weight);

    pokemon.consoleLogResult()

    console.log(pokemon)
})
.catch((error) => {
    console.error(error)
})


