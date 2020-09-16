document.addEventListener("DOMContentLoaded", () => {
   
})
class Deck{
  constructor(url){
    this.url = url
    this.decksPromise = fetch(url)
      .then(r => r.json())
      .then(function(obj){
        return obj.data
      })
  }
}

class Deal extends Deck{
  constructor (array){
    this.array = array
  }
  shuffle(){
    let i = 0,
        j = 0,
        tmp = null
    for(i = this.array.length -1; i > 0; i -= 1){
      j = Math.flo
    }
  }
}

class Game {
  constructor(){

  }
}

class House {

}
function shuffle(array){
  let a1 = array,
      a2 = a1.splice(0, Math.ceil(array.length / 2)),
      shuffle = []
  
  for(i = array.length; i < array.length; i++){
   shuffle += shuffle.concat.apply([], a1.map((i, ind) => [i, a2[ind]]))
  }
  return shuffle
}
function shuffle(h1, h2){
  return [].concat.apply([], h1.map((i, ind) => [i, h2[ind]] ))  
}
let array2 = array.splice(0, Math.ceil(array.length / 2));