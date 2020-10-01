class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :bet, :money, :ratio, :wins, :games_played
end
