class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t| 
    t.string :name, default: "player1"
    t.integer :money, default: 10
    t.integer :bet, default: 5
    t.integer :ratio, default: 0
    t.integer :wins, default: 0
    t.integer :games_played, default: 0
    end
  end
end
