class PlayerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :bet, :money, :ratio
end
