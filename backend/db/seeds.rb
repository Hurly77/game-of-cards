# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

@cards = [{rank: "clubs", card_type: "number", color: "black", value: 2, img: "https://www.media4math.com/sites/default/files/library_asset/images/MathClipArt--Playing-Card--The-2-of-Clubs.jpg", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/819px-Playing_card_club_3.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/1200px-Playing_card_club_4.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/1200px-Playing_card_club_5.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/819px-Playing_card_club_6.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 7, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/819px-Playing_card_club_7.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 8, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/1200px-Playing_card_club_8.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 9, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Playing_card_club_9.svg/819px-Playing_card_club_9.svg.png", deck_id: 1},
{rank: "clubs", card_type: "number", color: "black", value: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Playing_card_club_10.svg/1200px-Playing_card_club_10.svg.png", deck_id: 1},
{rank: "clubs", card_type: "Jack", color: "black", value: 10, img: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/120199861_368870487478410_5370471220325167861_n.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=fZgGJ4LL-yEAX9oena3&_nc_ht=scontent-lax3-2.xx&oh=824a8d33fad83762cf8a630cb9771fbf&oe=5F96FC68", deck_id: 1},
{rank: "clubs", card_type: "King", color: "black", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120263441_368870454145080_3612643814946402164_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=WYRQ7Ry7nFkAX-SJD6G&_nc_ht=scontent-lax3-1.xx&oh=4a2bdff0da6a27098e5cfe22ca784f4c&oe=5F96E651C", deck_id: 1},
{rank: "clubs", card_type: "Queen", color: "black", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120222710_368870540811738_270358986819589317_n.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=42QcOLskbd0AX_I8dl9&_nc_ht=scontent-lax3-1.xx&oh=03304dcc473fe01bff1fe20c9a3f310a&oe=5F95831B", deck_id: 1},
{rank: "clubs", card_type: "Ace", color: "black", value: 11, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120121582_368870387478420_2574501003007131479_n.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=OGjy9kckUNoAX99taxT&_nc_ht=scontent-lax3-1.xx&oh=02d24ed0a949eea09720fd5fae5a394d&oe=5F9643D9", deck_id: 1},

{rank: "spades", card_type: "number", color: "black", value: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_spade_2.svg/1200px-Playing_card_spade_2.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_spade_3.svg/1200px-Playing_card_spade_3.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Playing_card_spade_4.svg/1200px-Playing_card_spade_4.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_spade_5.svg/1200px-Playing_card_spade_5.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/614px-Playing_card_spade_6.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 7, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/1200px-Playing_card_spade_7.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 8, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/1200px-Playing_card_spade_8.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 9, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/1200px-Playing_card_spade_9.svg.png", deck_id: 1},
{rank: "spades", card_type: "number", color: "black", value: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/1200px-Playing_card_spade_10.svg.png", deck_id: 1},
{rank: "spades", card_type: "Jack", color: "black", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120062331_368870527478406_3552927966535325726_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=RwPKc85PlvQAX84qA5c&_nc_ht=scontent-lax3-1.xx&oh=f74a89770314c6baeac34dcec6b254c0&oe=5F948298", deck_id: 1},
{rank: "spades", card_type: "King", color: "black", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120229140_368870550811737_5359923468242892281_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=48VJXcdZ0S8AX9LPUgX&_nc_ht=scontent-lax3-1.xx&oh=6097a24d4b8a7945fc22f451618f057c&oe=5F971B86", deck_id: 1},
{rank: "spades", card_type: "Queen", color: "black", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120229140_368870550811737_5359923468242892281_o.jpg?_nc_cat=109&_nc_sid=730e14&_nc_ohc=48VJXcdZ0S8AX9LPUgX&_nc_ht=scontent-lax3-1.xx&oh=6097a24d4b8a7945fc22f451618f057c&oe=5F971B86", deck_id: 1},
{rank: "spades", card_type: "Ace", color: "black", value: 11, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120279243_368870404145085_9115586518123337048_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=zOFv8FzQ0zoAX-aQ9ve&_nc_ht=scontent-lax3-1.xx&oh=73b5f8638efd1030417e1e7441fe0608&oe=5F96C3E2", deck_id: 1},

{rank: "diamonds", card_type: "number", color: "red", value: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Playing_card_diamond_2.svg/819px-Playing_card_diamond_2.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Playing_card_diamond_3.svg/1200px-Playing_card_diamond_3.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/4_of_diamonds.svg/2000px-4_of_diamonds.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Playing_card_diamond_5.svg/819px-Playing_card_diamond_5.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/819px-Playing_card_diamond_6.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 7, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/1200px-Playing_card_diamond_7.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 8, img: "https://livingwithcards.com/wp-content/uploads/2015/11/8_of_diamonds.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 9, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/1200px-Playing_card_diamond_9.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "number", color: "red", value: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/1200px-Playing_card_diamond_10.svg.png", deck_id: 1},
{rank: "diamonds", card_type: "Jack", color: "red", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120197243_368870497478409_5167510771756128768_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=UFzHVAX-IwMAX-AHWxi&_nc_ht=scontent-lax3-1.xx&oh=b2bb7cb744f81f48f0f763723b1205ab&oe=5F94D1E9", deck_id: 1},
{rank: "diamonds", card_type: "King", color: "red", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120141285_368870460811746_1878444993550047512_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=E2x5keAvtHkAX_oug_i&_nc_ht=scontent-lax3-1.xx&oh=e1dc19d1412974893c14dd83239d48d3&oe=5F972712", deck_id: 1},
{rank: "diamonds", card_type: "Queen", color: "red", value: 10, img: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/120233329_368870580811734_2809628759795085523_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=mGuQG8RtTzwAX-bJxbH&_nc_ht=scontent-lax3-2.xx&oh=35630141e8d0456a19ff7cf9fd6cf330&oe=5F96B8AF", deck_id: 1},
{rank: "diamonds", card_type: "Ace", color: "red", value: 11, img: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/120220908_368870407478418_5300928156442249553_n.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=1H_k458gvDIAX9IL2-3&_nc_ht=scontent-lax3-2.xx&oh=a4f47401941c263e7512d7ecb7ecec45&oe=5F956D0E", deck_id: 1},

{rank: "hearts", card_type: "number", color: "red", value: 2, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Playing_card_heart_2.svg/819px-Playing_card_heart_2.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Atlas_deck_3_of_hearts.svg/1200px-Atlas_deck_3_of_hearts.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Playing_card_heart_4.svg/614px-Playing_card_heart_4.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 5, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Playing_card_heart_5.svg/1200px-Playing_card_heart_5.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 6, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/1200px-Playing_card_heart_6.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 7, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/1200px-Playing_card_heart_7.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 8, img: "https://cdn.pixabay.com/photo/2015/08/11/11/56/hearts-884177_1280.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 9, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/1200px-Playing_card_heart_9.svg.png", deck_id: 1},
{rank: "hearts", card_type: "number", color: "red", value: 10, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/1200px-Playing_card_heart_10.svg.png", deck_id: 1},
{rank: "hearts", card_type: "Jack", color: "red", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120137294_368870517478407_117179794000027108_n.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=k3xuJAK81c4AX8otrhD&_nc_ht=scontent-lax3-1.xx&oh=6c7c6422d448547a0cfb846045c65242&oe=5F961661", deck_id: 1},
{rank: "hearts", card_type: "King", color: "red", value: 10, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120286192_368870464145079_2791671458976010840_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=Hl-bYuIKSlEAX_5-W4K&_nc_ht=scontent-lax3-1.xx&oh=fc0426dd20e606d67d63613073c63b08&oe=5F96324E", deck_id: 1},
{rank: "hearts", card_type: "Queen", color: "red", value: 10, img: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/120276698_368870594145066_446698170016783972_n.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=x01NorkBVqMAX8GG5lH&_nc_ht=scontent-lax3-2.xx&oh=f3c0dc65dbceebbd8d1581a88fbd7f89&oe=5F94FD4C", deck_id: 1},
{rank: "hearts", card_type: "Ace", color: "red", value: 11, img: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/120370092_368870394145086_5428704726955667558_n.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=SNwxya3Hmk4AX_1d22U&_nc_ht=scontent-lax3-1.xx&oh=b88abcf036a3045efda93ae0ccc2d8ee&oe=5F94BE51", deck_id: 1}]
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