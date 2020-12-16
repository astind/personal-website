import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  player: Player;

  roomCode: string = "";

  constructor(private router: Router) {
    this.player = this.loadPlayer();
   }

  ngOnInit(): void {
  }

  loadPlayer(): Player {
    let savedPlayer = localStorage.getItem("cg-saved-player");
    if (savedPlayer === null) {
      return new Player("test");
    } else {
      return JSON.parse(savedPlayer) as Player;
    }
  }

  createGame() {
    // save the player data to local storage
    // connect to server and create a new game
    // get the game id back
    let roomId = '1234'
    this.router.navigate([`card-game/lobby/${roomId}`]); 
  }

  joinGame() {
    // save the player data to local storage
    this.router.navigate([`card-game/lobby/${this.roomCode}`]);
  }

}
