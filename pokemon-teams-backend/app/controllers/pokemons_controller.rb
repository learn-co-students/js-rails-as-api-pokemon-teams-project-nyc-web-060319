require 'faker'

class PokemonsController < ApplicationController

    def index
        @pokemons = Pokemon.all
        render json: @pokemons.to_json(:include => [:trainer])
    end

    def show
        @pokemon = Pokemon.find(params[:id])
        render json: @pokemon.to_json()
    end

    def create
        @trainer = Trainer.find(params[:pokemon]["trainer_id"])
        if @trainer.pokemons.length < 6
            @pokemon = Pokemon.create(nickname: Faker::Name.first_name, species: Faker::Games::Pokemon.name, trainer_id: params[:pokemon]["trainer_id"])
            render json: @pokemon.to_json()
        end    
    end

    def destroy
        @pokemon = Pokemon.find(params[:id])
        @pokemon.destroy
        render json: @pokemon.json()
    end
end