
//Controls the flow of the game
export default class GameController {
  
  constructor() {
    this.Players = []
  }

  //Initial setup of game, Player creation
  setup() {}

  //Begins game
  start() {}

  //Ends game
  endGame() {}

  //Checks if a players ship has been sunk
  checkWinCondition() {}

  //If a win condition has not been met, switch players
  //If a win condition has been met, end the game
  endTurn() {}

  //Change the Player that is taking the shot
  setControllingPlayer() {}

  //Allow the controlling player to fire a shot
  takeTurn() {}
}