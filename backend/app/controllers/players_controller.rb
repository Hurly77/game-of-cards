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
    player = Player.find_by_id(params[:id])
    player.update(params.permit(:name,:money,:bet,:ratio, :wins, :games_played))
    render json: player
  end
end
