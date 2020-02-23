import Ship from '../src/ship.js'

var ship

beforeEach(() => {
  ship = new Ship()
})

describe('Ship', () => {

  test('Should initialize a new ship', () => {
    expect(ship.placement).toBeArray()
    expect(ship.isSunk).toBeFalsy()
  })

  describe('place', () => {

  })

  describe('registerHit', () => {

    test('Should register a hit', () => {
      let shot = [0,0]
      ship.placement[0].coordinate = [0,0]
      ship.registerHit(shot)
      expect(ship.placement[0].hit).toBeTruthy()
    })

  })

  describe('checkSunk', () => {

    test('Should register ship as sunk', () => {
      ship.placement.forEach((element) => {
        element.hit = true
      })
      ship.checkSunk()
      expect(ship.isSunk).toBeTruthy()
    })

    test('Should register ship as not sunk', () => {
      ship.checkSunk()
      expect(ship.isSunk).toBeFalsy()
    })

  })

})