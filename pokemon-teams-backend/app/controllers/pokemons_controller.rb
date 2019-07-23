class PokemonsController < ApplicationController
    def show
        # trainer_id = params[:id]
        pokemons = Pokemon.all.where(trainer_id: params[:id])
        render json: pokemons
    end
end
