class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t| 
    t.string :name
    t.integer :money, default: 10
    t.integer :bet
    t.integer :ratio
    end
  end
end
