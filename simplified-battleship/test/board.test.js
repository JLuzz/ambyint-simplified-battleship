import * as BOARD from '../src/constants/boardConstants.js'
import Board from '../src/board.js'

var board

beforeEach(() => {
  board = new Board()
})

describe('Board', () => {

  test('Should initialize with a ship object', () => {
    expect(board.height).toEqual(8)
    expect(board.width).toEqual(8)
    expect(board.board).toBeArray()
    expect(board.board.length).toBe(8)
    expect(board.board[0].length).toBe(8)
    expect(board.ship).toBeObject()
  })

  describe('placeShip', () => {

    test('should place ship horizontally', () => {

    })

    test('Should place ship verically', () => {

    })

  })

  describe('placeShot', () => {

    let coordinate = [0,0]

    test('Should place a miss on the board when firing at water', () => {
      board.placeShot(coordinate)
      expect(board.board[coordinate[0]][coordinate[1]]).toBe(BOARD.MISS)
    })

    test('Should remain a miss when firing at a miss', () => {
      board.board[0][0] = BOARD.MISS
      board.placeShot(coordinate)
      expect(board.board[coordinate[0]][coordinate[1]]).toBe(BOARD.MISS)
    })

    test('Should place a hit on the board when firing at a ship', () => {
      board.board[0][0] = BOARD.SHIP
      board.placeShot(coordinate)
      expect(board.board[coordinate[0]][coordinate[1]]).toBe(BOARD.HIT)
    })

    test('Should remain a hit when firing at a hit', () => {
      board.board[0][0] = BOARD.HIT
      board.placeShot(coordinate)
      expect(board.board[coordinate[0]][coordinate[1]]).toBe(BOARD.HIT)
    })

  })

  describe('printBoard', () => {

    test('Should return string a representation of the board', () => {
      let boardRepresentation = board.printBoard()
      expect(boardRepresentation).toEqual(
        '   A B C D E F G H\n'+
        '   - - - - - - - -\n'+
        '1 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '2 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '3 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '4 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '5 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '6 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '7 | | | | | | | | |\n'+
        '   - - - - - - - -\n'+
        '8 | | | | | | | | |\n'+
        '   - - - - - - - -\n'
      )
    })

  })

  describe('printRow', () => {
    
    test('Should return a string representation of a row from the board', () => {
      let rowRepresentation = board.printRow(0)
      expect(rowRepresentation).toEqual('1 | | | | | | | | |\n')
    })

  })

  describe('printSymbol', () => {

    test('Print water', () => {
      let symbol = board.printSymbol(BOARD.WATER)
      expect(symbol).toEqual(' ')
    })

    test('Print hit', () => {
      let symbol = board.printSymbol(BOARD.HIT)
      expect(symbol).toEqual('✺')
    })

    test('Print miss', () => {
      let symbol = board.printSymbol(BOARD.MISS)
      expect(symbol).toEqual('☼')
    })

    test('Print ship', () => {
      let symbol = board.printSymbol(BOARD.SHIP)
      expect(symbol).toEqual('S')
    })

    test('Print default', () => {
      let symbol = board.printSymbol(7)
      expect(symbol).toEqual(' ')
    })

  })

})