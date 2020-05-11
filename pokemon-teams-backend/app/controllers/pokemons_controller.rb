class PokemonsController < ApplicationController
    def index
        render json: Pokemon.all
    end

    def update
        pokemon = Pokemon.find_by(id: params[:id])
        pokemon.trainer_id = params[:pokemon][:trainer_id]
        pokemon.save!
    end

end
