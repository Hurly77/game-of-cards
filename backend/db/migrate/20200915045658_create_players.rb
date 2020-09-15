class CreatePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.integer :money
      t.integer :bet
      t.string :name
      t.string :win_to_loses

      t.timestamps
    end
  end
end
