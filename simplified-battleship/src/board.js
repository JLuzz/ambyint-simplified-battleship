import * as BOARD from './constants/boardConstants.js'

export default class Board {

  constructor() {
    this.height = 8
    this.width = 8
    this.board = new Array(this.height).fill(BOARD.WATER).map(() => new Array(this.width).fill(BOARD.WATER))
    this.ship = { 
      placement: [{ 
        coordinates: { 
          location:'B5',
          hit: false 
        } 
      }], 
      isSunk: false
    }
  }
  
  placeShip(start, end) {
    //determine if its a valid placement
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
    // let coordinates = this.ship.place(start, end)
    let coordinates = [[0,1],[0,2],[0,3]]
    coordinates.forEach((coordinate) => {
      this.board[coordinate[0]][coordinate[1]] = BOARD.SHIP
    })
  }

  placeShot(coordinate) {
    if(this.board[coordinate[0]][coordinate[1]] == BOARD.SHIP || this.board[coordinate[0]][coordinate[1]] == BOARD.HIT) {
      // this.ship.registerHit(coordinate)
      this.board[coordinate[0]][coordinate[1]] = BOARD.HIT 
    }
    else {
      this.board[coordinate[0]][coordinate[1]] = BOARD.MISS
    }
  }

  printBoard() {
    let boardFill = ''
    
    this.board.forEach((element, index) => {
        boardFill += BOARD.VERTICAL_DIVIDER + this.printRow(index)
    })

    return BOARD.TOPROW +
      boardFill +
      BOARD.VERTICAL_DIVIDER
  }

  printRow(row) {
    let printRow= ''
    
    this.board[row].forEach((element) => {
      printRow += this.printSymbol(element) + '|'
    })

    return `${row + 1}` + ' |' + printRow + '\n'
  }

  printSymbol(status) {
    switch (status) {
      case BOARD.WATER:
        return ' '
        break
      case BOARD.HIT:
        return '✺'
        break
      case BOARD.MISS:
        return '☼'
        break
      case BOARD.SHIP:
        return 'S'
        break
      default:
        return ' '
    }
  }
}