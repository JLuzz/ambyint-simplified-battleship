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

    test('Should place a horizontal right facing ship', () => {
      let start = [0,0]
      let end = [0,2]
      ship.place(start, end)
      expect(ship.placement[0].coordinate[0]).toEqual(0)
      expect(ship.placement[0].coordinate[1]).toEqual(0)
      expect(ship.placement[1].coordinate[0]).toEqual(0)
      expect(ship.placement[1].coordinate[1]).toEqual(1)
      expect(ship.placement[2].coordinate[0]).toEqual(0)
      expect(ship.placement[2].coordinate[1]).toEqual(2)
    })

    test('Should place a horizontal left facing ship', () => {
      let start = [0,2]
      let end = [0,0]
      ship.place(start, end)
      expect(ship.placement[0].coordinate[1]).toEqual(2)
      expect(ship.placement[0].coordinate[0]).toEqual(0)
      expect(ship.placement[1].coordinate[0]).toEqual(0)
      expect(ship.placement[1].coordinate[1]).toEqual(1)
      expect(ship.placement[2].coordinate[0]).toEqual(0)
      expect(ship.placement[2].coordinate[1]).toEqual(0)
    })

    test('Should place a vertical down facing ship', () => {
      let start = [0,0]
      let end = [2,0]
      ship.place(start, end)
      expect(ship.placement[0].coordinate[0]).toEqual(0)
      expect(ship.placement[0].coordinate[1]).toEqual(0)
      expect(ship.placement[1].coordinate[0]).toEqual(1)
      expect(ship.placement[1].coordinate[1]).toEqual(0)
      expect(ship.placement[2].coordinate[0]).toEqual(2)
      expect(ship.placement[2].coordinate[1]).toEqual(0)
    })

    test('Should place a vertical up facing ship', () => {
      let start = [2,0]
      let end = [0,0]
      ship.place(start, end)
      expect(ship.placement[0].coordinate[0]).toEqual(2)
      expect(ship.placement[0].coordinate[1]).toEqual(0)
      expect(ship.placement[1].coordinate[0]).toEqual(1)
      expect(ship.placement[1].coordinate[1]).toEqual(0)
      expect(ship.placement[2].coordinate[0]).toEqual(0)
      expect(ship.placement[2].coordinate[1]).toEqual(0)
    })

  })

  describe('registerHit', () => {

    test('Should register a hit', () => {
      let shot = [0,0]
      ship.placement[0] = { coordinate: [0,0], hit: false }
      ship.registerHit(shot)
      expect(ship.placement[0].hit).toBeTruthy()
    })

  })

  describe('checkSunk', () => {

    test('Should register ship as sunk', () => {
      ship.placement[0] = { coordinate: [0,0], hit: false }
      ship.placement.forEach((element) => {
        element.hit = true
      })
      ship.checkSunk()
      expect(ship.isSunk).toBeTruthy()
    })

    test('Should register ship as not sunk', () => {
      ship.placement[0] = { coordinate: [0,0], hit: false }
      ship.checkSunk()
      expect(ship.isSunk).toBeFalsy()
    })

  })

})