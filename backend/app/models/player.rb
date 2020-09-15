class Player < ApplicationRecord
  has_and_belongs_to_many :table_games
  has_and_belongs_to_many :tables
end
