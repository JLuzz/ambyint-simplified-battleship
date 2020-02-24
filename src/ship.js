export default class Ship {
  constructor(){
    this.placement = new Array(3)
    this.isSunk = false
  }

  place(start, end) {
    // determine orientation of ship
    let orientation = 'horizontal'
    if(start[0] != end[0]) {
      orientation = 'vertical'
    }

    //determine which way the ship is facing
    //determine if ship is of valid length
    let direction
    if(orientation == 'horizontal'){
      direction = 'right'
      if (start[1] > end[1]) direction = 'left'
      if(!(Math.abs(start[1] - end[1]) == 2)) throw "Ship is not length of 2"
    } else if(orientation == 'vertical') {
      direction = 'down'
      if(start[0] > end[0]) direction = 'up'
      if(!(Math.abs(start[0] - end[0]) == 2)) throw "Ship is not length of 2"
    }

    //create extra coordinate
    let newCoordinate = []
    if(orientation == 'horizontal') {
      if(direction == 'right') {
        newCoordinate = [start[0], start[1] + 1]
      } else if(direction == 'left') {
        newCoordinate = [start[0], start[1] - 1]
      }
    } else if (orientation == 'vertical') {
      if(direction == 'down') {
        newCoordinate = [start[0] + 1, start[1]]
      } else if(direction == 'up') {
        newCoordinate = [start[0] - 1, start[1]]
      }
    }
  
    //fill ships placement array
    this.placement[0] = { coordinate: [start[0], start[1]], hit: false}
    this.placement[1] = { coordinate: [newCoordinate[0], newCoordinate[1]], hit: false }
    this.placement[2] = { coordinate: [end[0], end[1]], hit: false }

    return [start, newCoordinate, end]
  }

  registerHit(shot) {
    this.placement.forEach((element) => {
      if (element.coordinate[0] == shot[0] && element.coordinate[1] == shot[1]) element.hit = true
    })
    this.checkSunk()
  }

  checkSunk() {
    let sunk = true

    this.placement.forEach((element) => {
      if(!element.hit) sunk = false
    })

    this.isSunk = sunk
  }
}