import GameController from '../src/gameController.js'

jest.mock('readline')

var GC

beforeEach(() => {
  GC = new GameController()
});

describe('GameController', () => {

  test('Should have an empty player array upon init', () => {
    expect(GC.Players).toBeArray()
    expect(GC.Players.length).toEqual(0)
  })

  describe('start', () => {

    test('Should setup and begin gameplay', () => {
      GC.start()
      expect(GC.Players.length).toEqual(2)
    })

  })

  describe('quit', () => {
    
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})

    beforeEach(() => {
      GC.setup()
    })

    test('Should exit game', () => {
      expect(mockExit).toHaveBeenCalled()
    })

  })

  describe('endGame', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})

    beforeEach(() => {
      GC.setup()
    })
    
    test('Should empty the player array and exit game', () => {
      GC.endGame()
      expect(GC.Players.length).toEqual(0)
      expect(mockExit).toHaveBeenCalled()
    })

  })

  describe('setupPlayer', () => {
    
    test('Should return a new player', () => {
      let player = GC.setupPlayer('1')
      expect(player).toBeDefined()
    })

  })

  describe('winConditionMet', () => {

    beforeEach(() => {
      GC.setup()
    })
    
    test('Should be true if Player[1] ship is sunk', () => {
      GC.Players[1].board.ship.isSunk = true
      expect(GC.winConditionMet()).toBeTruthy()
    })

    test('Should be false if Player[1] ship is not sunk', () => {
      GC.Players[1].board.ship.isSunk = false
      expect(GC.winConditionMet()).toBeFalsy()
    })

  })

  describe('swapControllingPlayer', () => {

    beforeEach(() => {
      GC.setup()
    })

    test('Should swap Player[0] and Player[1]', () => {
      let controllingPlayerBeforeSwap = GC.Players[0]
      let nonControllingPlayerBeforeSwap = GC.Players[1]
      GC.swapControllingPlayer()
      expect(controllingPlayerBeforeSwap).not.toEqual(GC.Players[0])
      expect(nonControllingPlayerBeforeSwap).not.toEqual(GC.Players[1])
    })

  })

  describe('translateInput', () => {
    
    test('Should return coordinate', () => {
      let input = 'A1'
      let translation = GC.translateInput(input)
      expect(translation[0]).toEqual(0)
      expect(translation[1]).toEqual(0)
    })

    test('Should return \'Q\'', () => {
      let input = 'Q'
      let translation = GC.translateInput(input)
      expect(translation).toEqual('Q')
    })

    test('Should throw invalid integer input error', () => {
      let input = 'A9'
      try {
        GC.translateInput(input)
      } catch(e) {
        expect(e).toBe('Number must be between 1 - 8')
      }
    })

    test('Should throw invalid alpha error', () => {
      let input = 'X1'
      try {
        GC.translateInput(input)
      } catch(e) {
        expect(e).toBe('Alpha char must be A-H or Q')
      }
    })

    test('Should throw error if coordinates are too long', () => {
      let input = 'A12'
      try {
        GC.translateInput(input)
      } catch(e) {
        expect(e).toBe('Enter coordinates in the format : B5')
      }
    })

  })

})