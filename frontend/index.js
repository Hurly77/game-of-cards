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
      
    }
  }
}

class Game {
  constructor(){

  }
}

class House {

}