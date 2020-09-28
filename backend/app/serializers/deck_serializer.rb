class DeckSerializer
  include FastJsonapi::ObjectSerializer
  attribute :cards 

  belongs_to :table
  end

