class Pokemon < ApplicationRecord
  belongs_to :trainer, optional: true

  def self.create_random_pokemon
    Pokemon.create!(species: Faker::Games::Pokemon.name, nickname: Faker::Name.name, trainer: nil)
  end
end
