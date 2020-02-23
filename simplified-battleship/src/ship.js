export default class Ship {
  constructor(){
    this.placement = new Array(3).fill({coordinate: [], hit: false})
    this.isSunk = false
  }

  place(start, end) {
    // determine if its a valid placement
    // let orientation = 'horizontal'
    // // is it vertical or horizontal?
    // if(start[0] != end[0]) {
    //   orientation = 'vertical'
    // }
    // let direction = 'forwards'
    // // is it a valid length
    // if(orientation = 'horizontal'){
    //   if(start[0] + 2 == end[0]){
        
    //   }
    // } else {
    //   if()
    // }
  }

  registerHit(shot) {
    this.placement.forEach((element) => {
      if (element.coordinate[0] == shot[0] && element.coordinate[1] == shot[1]) element.hit = true
    })
  }

  checkSunk() {
    let sunk = true

    this.placement.forEach((element) => {
      if(!element.hit) sunk = false
    })

    this.isSunk = sunk
  }
}