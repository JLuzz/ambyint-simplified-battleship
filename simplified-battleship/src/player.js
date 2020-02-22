export default class Player {
  
  constructor(id) {
    this.ID = id
    this.board = { 
      board:[],
      ship: {
        location:[],
        isSunk: false
      }
    }
  }

  recieveShot(shot) {
    //this.board.placeShot(shot)
  }

}