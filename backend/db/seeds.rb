# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first


@cards = [{rank: "clubs", card_type: "number", color: "black", value: 2, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 3, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 4, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 5, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 6, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 7, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 8, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 9, img: "", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 10, img: "", deck_id: 1},
{rank: "clubs", card_type: "Jack", color: "black", value: 10, img: "", deck_id: 1},
{rank: "clubs", card_type: "King", color: "black", value: 10, img: "", deck_id: 1},
{rank: "clubs", card_type: "Queen", color: "black", value: 10, img: "", deck_id: 1},
{rank: "clubs", card_type: "Ace", color: "black", value: 11, img: "", deck_id: 1},

{rank: "spades", card_type: "number", color: "black", value: 2, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 3, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 4, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 5, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 6, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 7, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 8, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 9, img: "", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 10, img: "", deck_id: 1},
{rank: "spades", card_type: "Jack", color: "black", value: 10, img: "", deck_id: 1},
{rank: "spades", card_type: "King", color: "black", value: 10, img: "", deck_id: 1},
{rank: "spades", card_type: "Queen", color: "black", value: 10, img: "", deck_id: 1},
{rank: "spades", card_type: "Ace", color: "black", value: 11, img: "", deck_id: 1},

{rank: "diamonds", card_type: "number", color: "red", value: 2, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 3, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 4, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 5, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 6, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 7, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 8, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 9, img: "", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 10, img: "", deck_id: 1},
{rank: "diamonds", card_type: "Jack", color: "red", value: 10, img: "", deck_id: 1},
{rank: "diamonds", card_type: "King", color: "red", value: 10, img: "", deck_id: 1},
{rank: "diamonds", card_type: "Queen", color: "red", value: 10, img: "", deck_id: 1},
{rank: "diamonds", card_type: "Ace", color: "red", value: 11, img: "", deck_id: 1},

{rank: "hearts", card_type: "number", color: "red", value: 2, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 3, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 4, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 5, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 6, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 7, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 8, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 9, img: "", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 10, img: "", deck_id: 1},
{rank: "hearts", card_type: "Jack", color: "red", value: 10, img: "", deck_id: 1},
{rank: "hearts", card_type: "King", color: "red", value: 10, img: "", deck_id: 1},
{rank: "hearts", card_type: "Queen", color: "red", value: 10, img: "", deck_id: 1},
{rank: "hearts", card_type: "Ace", color: "red", value: 11, img: "", deck_id: 1}]
Table.create()
Deck.create(table_id: 1) 
Player.create(name: "cameron", ratio:0)

def createDeck(n)
  Deck.create(table_id: 1) 
  @cards.map do |c|
    c[:deck_id] = n
    Card.create(c)
  end
end

def create_x(num)
  i = 1
  while i < num do
    createDeck(i)
    i += 1
  end
end

create_x(6)


#Just a reverence to what attributes my models have.

# create_table "cards", force: :cascade do |t|
#   t.string "rank"
#   t.string "card_type"
#   t.string "color"
#   t.integer "value"
#   t.string "img"
#   t.integer "deck_id"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "decks", force: :cascade do |t|
#   t.integer "table_id"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "players", force: :cascade do |t|
#   t.integer "money"
#   t.integer "bet"
#   t.string "name"
#   t.string "win_to_loses"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "table_games", force: :cascade do |t|
#   t.string "name"
#   t.string "rules"
#   t.integer "games_played"
#   t.integer "table_id"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "table_players", force: :cascade do |t|
#   t.integer "table_id"
#   t.integer "player_id"
#   t.integer "table_game_id"
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end

# create_table "tables", force: :cascade do |t|
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
# end