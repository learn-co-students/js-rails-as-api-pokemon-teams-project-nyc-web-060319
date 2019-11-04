const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const mainSection = document.querySelector('main')


function getEverything() {
    fetch(TRAINERS_URL)
        .then(function(resp) {
            return resp.json()
        })
        .then(renderTrainers) 
        .then(addEventListeners)
}

getEverything();

function renderTrainers(trainers) {
    trainers.forEach(function(trainer) {
        mainSection.innerHTML += 
        `<div class='card' data-id=${trainer.id}><p>${trainer.name}</p>
        <button data-trainer-id=${trainer.id}>Add Pokemon</button>
        <ul id='pokemon-list-${trainer.id}'></ul>
      </div>`
      showTrainerPokemon(trainer.pokemons, trainer)
    })
}

function addSinglePokemon(pokemon) {
    // debugger
    const pokemonList = document.querySelector(`#pokemon-list-${pokemon.trainer_id}`)
    const newLI = document.createElement('li')
    newLI.innerHTML = `${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id="${pokemon.id}">Release</button>`
    pokemonList.appendChild(newLI)
}

function showTrainerPokemon(pokemonArray, trainer) {
    pokemonArray.forEach(function(pokemon) {
        const pokemonList = document.querySelector(`#pokemon-list-${trainer.id}`)
        const newLI = document.createElement('li')
        newLI.innerHTML = `${pokemon.nickname} (${pokemon.species})<button class="release" data-pokemon-id="${pokemon.id}">Release</button>`
        pokemonList.appendChild(newLI)
    })
}

function addEventListeners() {
    mainSection.addEventListener('click', function(event) {
        if(event.target.innerText === 'Add Pokemon') {
            // debugger
            getNewPokemon(event.target.dataset.trainerId)
        }
        if(event.target.innerText === 'Release') {
            deletePokemon(event.target.dataset.pokemonId)
        }
    })
}

function getNewPokemon(trainerId) {
    fetch(POKEMONS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            trainer_id: `${trainerId}`
        })
    })
    .then(function(response) {
       return response.json()
    })
    .then(pokemon => addSinglePokemon(pokemon))
}

function deletePokemon(pokemonId) {
    fetch(`http://localhost:3000/pokemons/${pokemonId}`, {
        method: 'DELETE'
    })
    .then(event.target.parentElement.remove())
}
