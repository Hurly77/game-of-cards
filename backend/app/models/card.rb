class Card < ApplicationRecord
  belongs_to :deck
  validate :limit_num_of_cards, :on => :create

  def limit_num_of_cards
    if self.deck.cards(:reload).count == 52
      errors.add(:base, "Exceeded card limit per deck")
    end
  end
end