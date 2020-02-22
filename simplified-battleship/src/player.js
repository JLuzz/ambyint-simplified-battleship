import Board from "./board.js"

export default class Player {
  
  constructor(id) {
    this.ID = id
    this.board = new Board()
  }

  recieveShot(shot) {
    // this.board.placeShot(shot)
  }

}