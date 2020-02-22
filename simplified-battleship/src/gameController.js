import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

import Player from './player.js'

//Controls the flow of the game
//Controlling Player = Players[0]
//Non-Controlling Player = Players[1]
export default class GameController {
  
  constructor() {
    this.Players = []
  }

  //Begins game loop
  start() {
    console.log('Game Starting...')
    this.setup()
    this.takeTurn()
  }

  //Ends game
  endGame() {
    console.log(`Congratulations Player ${this.Players[0].ID}, you sunk my battleship`)
    console.log('Game Over...')
    //Print Boards
    this.Players = []
    process.exit()
  }

  //Initial game setup, Player creation
  setup() {
    let player1 = new Player('1')
    let player2 = new Player('2')
    this.Players = [player1, player2]
  }

  //Checks if the non-controlling player ship has been sunk
  winConditionMet() {
    return this.Players[1].board.ship.isSunk
  }

  //If a win condition has not been met, switch players
  //If a win condition has been met, end the game
  endTurn() {
    if(this.winConditionMet()){
      this.endGame()
    } else {
      this.swapControllingPlayer()
      this.takeTurn()
    }
  }

  //Change the Player that is taking the shot (Player[0])
  swapControllingPlayer() {
    this.Players = [this.Players[1], this.Players[0]]
  }

  getUserInput(){
    return new Promise((resolve, reject) => {
      rl.question(`Player ${this.Players[0].ID}: Provide a location to hit Player ${this.Players[1].ID} ship. Format: B5\n`, resolve)
    })
  }

  //Allow the controlling player to fire a shot
  async takeTurn() {
    // take input and fire
    let input = await this.getUserInput()
    // validate shot or ask for input again
    input == 'Q' ? this.endGame() : this.endTurn()
    
  }
}