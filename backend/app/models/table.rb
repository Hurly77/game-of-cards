class Table < ApplicationRecord
  has_many :table_games
  has_and_belongs_to_many :players
end