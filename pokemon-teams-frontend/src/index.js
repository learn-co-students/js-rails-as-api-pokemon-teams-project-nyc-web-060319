const BASE_URL = "http://localhost:3000";
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;
const mainContainer = document.querySelector("main");

function getTrainers(){
    return fetch(TRAINERS_URL)
        .then(resp => resp.json())
        // .then(resp => {
        //     return resp;
        // })
}

function getTrainerPokemons(trainerID) {
    return fetch(`${POKEMONS_URL}/${trainerID}`).then(resp => resp.json());
}

function renderTrainers() {
    return getTrainers().then(trainers => {
        trainers.forEach(trainer => {
            console.log(trainer.name);
            const divContainer = document.createElement("div");
            divContainer.className = "card";
            divContainer.dataset.id = trainer.id;
            
            const trainerNamePTag = document.createElement("p");
            trainerNamePTag.innerText = trainer.name;
            divContainer.appendChild(trainerNamePTag);
            
            const addPokemonButton = document.createElement("button");
            addPokemonButton.innerText = "Add pokemon";
            divContainer.appendChild(addPokemonButton);

            const listPokemon = document.createElement("ul");
            divContainer.appendChild(listPokemon);

            getTrainerPokemons(trainer.id).then(pokemons => {
                pokemons.forEach(pokemon => {
                    const pokemonLI = document.createElement("li");
                    pokemonLI.innerText = pokemon.nickname;
                    
                    const pokemonReleaseButton = document.createElement("button");
                    pokemonReleaseButton.innerText = "Release";
                    pokemonReleaseButton.className = "release";
                    pokemonReleaseButton.dataset.id = pokemon.id;

                    pokemonLI.appendChild(pokemonReleaseButton);
                    listPokemon.appendChild(pokemonLI);
                })
            })
            mainContainer.appendChild(divContainer);


            
        })    
    }).then(() => {
        
    })

}
renderTrainers();
