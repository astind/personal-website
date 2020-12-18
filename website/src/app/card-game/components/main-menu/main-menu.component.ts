import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandService } from '../../services/command.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  playerName: string;
  roomCode: string = "";

  constructor(
    private router: Router,
    private commands: CommandService
    ) {
    this.playerName = this.loadPlayerName();
   }

  ngOnInit(): void {
    this.commands.connect().subscribe(
      message => {
        console.log('msg', message);
        if (message.resp === "newGame") {
          this.router.navigate([`card-game/lobby/${message.id}`]);
        }
      },
      error => {
        console.error(error);
      }
    );
  }


  loadPlayerName(): string {
    let savedPlayer = localStorage.getItem("cg-saved-name");
    if (savedPlayer === null) {
      return "";
    } else {
      return savedPlayer;
    }
  }

  savePlayer() {
    localStorage.setItem('cg-saved-name', this.playerName);
  }

  createGame() {
    // save the player data to local storage
    this.savePlayer();
    // connect to server and create a new game
    this.commands.send({
      cmd: 'newGame'
    });
    // get the game id back
    //this.router.navigate([`card-game/lobby/${roomId}`]); 
  }

  joinGame() {
    // save the player data to local storage
    this.savePlayer();
    this.router.navigate([`card-game/lobby/${this.roomCode}`]);
  }

  sendMsg() {
    this.commands.send({ message: 'hello world'});
  }

}
