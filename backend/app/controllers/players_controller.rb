class PlayersController < ApplicationController
  def index
    player = Player.all
    render json: PlayerSerializer.new(player)
  end

  def show
    player = Player.find_by(id: params[:id])
    render json: PlayerSerializer.new(player)
  end

  def create
    player = Player.create(name: params[:name])
    render json: player
  end

  def update
    player = Player.find(id: params[:name])
    update = Player.update(player)
    render json: update
  end
end
