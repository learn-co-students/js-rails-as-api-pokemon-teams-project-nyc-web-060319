class PokemonsController < ApplicationController
    def index
        render json: Pokemon.all
    end

    def show
        # trainer_id = params[:id]
        pokemons = Pokemon.all.where(trainer_id: params[:id])
        render json: pokemons
    end
end
