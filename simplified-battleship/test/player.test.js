import Board from '../src/board.js'
import Player from '../src/player.js'

jest.mock('../src/board.js')

var player
var boardMockInstance

beforeEach(() => {
  Board.mockClear()
  player = new Player('1')
  boardMockInstance = Board.mock.instances[0]
})

describe('Player', () => {

  test('Should init player properties', () => {
    expect(player.ID).toEqual('1')
    expect(Board).toHaveBeenCalled()
  })

  describe('recieveShot', () => {
    
    test('Should place shot on their board', () => {
      let shot = [0,0]
      player.recieveShot(shot)
      expect(boardMockInstance.placeShot).toHaveBeenCalled()
    })

  })

  describe('placeShip', () => {
    
    test('Should place ship on their board', () => {
      let start = [0,0]
      let end = [0,3]
      player.placeShip(start, end)
      expect(boardMockInstance.placeShip).toHaveBeenCalled()
    })

  })

})