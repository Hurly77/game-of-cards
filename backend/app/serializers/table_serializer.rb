class TableSerializer
  include FastJsonapi::ObjectSerializer
  attributes 
  has_many :decks
  has_many :table_games
end
