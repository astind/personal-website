import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Player } from '../../models/player';
import { CommandService } from '../../services/command.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  player: Player;

  roomCode: string = "";

  constructor(
    private router: Router,
    private commands: CommandService
    ) {
    this.player = this.loadPlayer();
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

  loadPlayer(): Player {
    let savedPlayer = localStorage.getItem("cg-saved-player");
    if (savedPlayer === null) {
      return new Player("test");
    } else {
      return JSON.parse(savedPlayer) as Player;
    }
  }

  savePlayer() {
    localStorage.setItem('cg-saved-player', JSON.stringify(this.player));
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
    this.router.navigate([`card-game/lobby/${this.roomCode}`]);
  }

  sendMsg() {
    this.commands.send({ message: 'hello world'});
  }

}
