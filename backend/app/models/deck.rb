class Deck < ApplicationRecord
  belongs_to :table
  has_many :cards, :dependent => :destroy
  validates :cards, length: {maximum: 52}
end
