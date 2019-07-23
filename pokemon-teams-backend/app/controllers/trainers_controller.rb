class TrainersController < ApplicationController
    def index
        trainers = Trainer.all
        render json: trainers
    end

    def show
        # trainer_id = params[:id]
        # pokemons = Pokemon.all.where(trainer_id: params[:id])
        # render json: pokemons
        trainer = Trainer.find_by(id: params[:id])
        # byebug
        render json: trainer.pokemons
    end

    def update
        # byebug
        randomPoke = Pokemon.where(trainer_id: nil).sample
        if randomPoke != nil
            randomPoke.trainer_id = params[:id]
            randomPoke.save!
        end
        render json: randomPoke
    end

end
