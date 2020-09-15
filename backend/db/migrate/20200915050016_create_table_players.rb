class CreateTablePlayers < ActiveRecord::Migration[6.0]
  def change
    create_table :table_players do |t|
      t.integer :table_id
      t.integer :player_id
      t.integer :table_game_id

      t.timestamps
    end
  end
end