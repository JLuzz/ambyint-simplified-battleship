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
    // put BOARD.SHIP in locations 
    // give this.ship its location
  }

  placeShot(coordinate) {
    this.board[coordinate[0]][coordinate[1]] == BOARD.SHIP || this.board[coordinate[0]][coordinate[1]] == BOARD.HIT ? 
    this.board[coordinate[0]][coordinate[1]] = BOARD.HIT : 
    this.board[coordinate[0]][coordinate[1]] = BOARD.MISS
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