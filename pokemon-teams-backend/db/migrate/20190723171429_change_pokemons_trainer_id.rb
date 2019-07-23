class ChangePokemonsTrainerId < ActiveRecord::Migration[6.0]
  def change
    change_column :pokemons, :trainer_id, :integer, :null => true
  end
end
