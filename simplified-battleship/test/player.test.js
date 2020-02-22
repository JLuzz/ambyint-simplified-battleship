import Player from '../src/player.js'

var player

beforeEach(() => {
  player = new Player('1')
})

describe('Player', () => {

  test('Should init player properties', () => {
    expect(player.ID).toEqual('1')
    expect(player.board).toBeObject()
  })

  describe('recieveShot', () => {
    
    test('Should place shot on their board', () => {
      // expect(this.board.placeShot).toHaveBeenCalled
    })

  })

})