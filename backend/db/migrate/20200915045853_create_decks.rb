class CreateDecks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.integer :table_id

      t.timestamps
    end
  end
end
