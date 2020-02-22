import GameController from "../src/gameController.js"

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

  describe('endGame', () => {

    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})

    beforeEach(() => {
      GC.setup()
    })
    
    test('Should empty the player array', () => {
      GC.endGame()
      expect(GC.Players.length).toEqual(0)
      expect(mockExit).toHaveBeenCalled()
    })

  })

  describe('setup', () => {
    
    test('Should add two new players to the Players array', () => {
      GC.setup()
      expect(GC.Players.length).toEqual(2)
    })

  })

  describe('winConditionMet', () => {

    beforeEach(() => {
      GC.setup()
    })
    
    test('Should be true if Player[1] ship is sunk', () => {
      GC.Players[1].Board.Ship.isSunk = true
      expect(GC.winConditionMet()).toBeTruthy()
    })

    test('Should be false if Player[1] ship is not sunk', () => {
      GC.Players[1].Board.Ship.isSunk = false
      expect(GC.winConditionMet()).toBeFalsy()
    })

  })

  describe('endTurn', () => {

    // mock winConditionMet to be true
    test('winConditionMet = true', () => {
      //expect Players array to be length 0
    })

    test('winConditionMet = false', () => {
      //expect Players to have swapped
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

})