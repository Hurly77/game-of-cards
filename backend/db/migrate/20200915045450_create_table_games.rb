class CreateTableGames < ActiveRecord::Migration[6.0]
  def change
    create_table :table_games do |t|
      t.string :name
      t.string :rules
      t.integer :games_played
      t.integer :table_id

      t.timestamps
    end
  end
end
