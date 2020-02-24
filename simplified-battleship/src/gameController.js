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
    this.setupPlayer('1')
    .then((player1) => this.setupPlayer('2')
    .then((player2) => {
      this.Players = [player1, player2]
      this.takeTurn()
    }))
  }

  quit() {
    console.log('Goodbye')
    console.log('Please play again soon!')
    process.exit()
  }

  //Ends game
  endGame() {
    console.log(`Congratulations Player ${this.Players[0].ID}, you sunk my battleship`)
    console.log('Game Over...')
    console.log('Player 1 Board:')
    console.log(this.Players.find(player => player.ID == '1').board.printBoard())
    console.log('Player 2 Board:')
    console.log(this.Players.find(player => player.ID == '2').board.printBoard())
    this.Players = []
    process.exit()
  }

  async setupPlayer(id) {
    let player = new Player(id)
    let placement
    let placementSplit
    let start
    let end

    let takingInput = true

    while (takingInput) {
      placement = await this.getPlayerPlacement(player.ID)
      placementSplit = placement.split(' ')

      try {
        start = this.translateInput(placementSplit[0])
        end = this.translateInput(placementSplit[1])
      } catch(e) {
        Console.log('Please enter a valid format : ', e)
      }

      try {
        player.placeShip(start, end)
        takingInput = false
      } catch (e) {
        console.log('Please give valid ship coordinates : ', e)
      }

    }

    return player
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

  getPlayerShot() {
    return new Promise((resolve, reject) => {
      rl.question(`Player ${this.Players[0].ID}: Provide a location to hit Player ${this.Players[1].ID} ship. Format: B5\n`, resolve)
    })
  }

  getPlayerPlacement(id) {
    return new Promise((resolve, reject) => {
      rl.question(`Please enter the ship location for Player ${id}. Format: A3 A5\n`, resolve)
    })
  }

  translateInput(input) {

    if(input.length > 2) {
      throw 'Enter coordiates in the format : B5'
    }

    let integerInput = parseInt(input.charAt(1)) - 1

    if(integerInput < 0 || integerInput > 7) {
      throw 'Number must be between 1 - 8'
    } 

    switch(input.charAt(0).toUpperCase()) {
      case 'A':
        return [0, integerInput]
      case 'B':
        return [1, integerInput]
      case 'C':
        return [2, integerInput]
      case 'D':
        return [3, integerInput]
      case 'E':
        return [4, integerInput]
      case 'F':
        return [5, integerInput]
      case 'G':
        return [6, integerInput]
      case 'H':
        return [7, integerInput]
      case 'Q':
        return 'Q'
      default:
        throw 'Alpha char must be A-H or Q'
    }
  }

  //Allow the controlling player to fire a shot
  async takeTurn() {
    let takingInput = true
    let shot

    while (takingInput) {
      shot = await this.getPlayerShot()

      try {
        shot = this.translateInput(shot)
        takingInput = false
      }
      catch(e) {
        console.log("Please enter a valid format : ", e)
      }

    }
    
    if(shot == 'Q') {
      this.quit()
    } else {
      this.Players[1].recieveShot(shot);
      this.endTurn()
    }
  }
}