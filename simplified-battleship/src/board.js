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
  

  placeShot(coordinate) {

  }

  printBoard() {
    
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