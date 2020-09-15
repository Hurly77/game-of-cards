class CardsController < ApplicationController
  def index
    cards = Card.all
    render json: CardSerializer.new(cards)
  end

  def create
    
  end

  def show
    
  end
end
