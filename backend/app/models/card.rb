class Card < ApplicationRecord
  belongs_to :deck
  validate :on => :create do 
    if self.deck && self.deck.cards.length >= 52
      errors.add("deck already has 52 cards")
    end
  end
end