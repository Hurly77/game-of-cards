class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :rank
      t.string :color
      t.integer :value
      t.string :img
      t.integer :deck_id

      t.timestamps
    end
  end
end
