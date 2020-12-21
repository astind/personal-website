import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommandService } from '../../services/command.service';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  playerName: string = "";
  roomCode: string = "";
  sub: Subscription | null = null;

  constructor(
    private router: Router,
    private commands: CommandService,
    private gameState: GameStateService
  ) {
  }

  ngOnInit(): void {
    this.playerName = this.gameState.getName();
    this.sub = this.commands.connect().subscribe(
      message => {
        if (message.resp === "newGame") {
          this.router.navigate([`card-game/lobby/${message.id}`]);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

  // ngOnDestroy() {
  //   this.sub.
  // }


  createGame() {
    // connect to server and create a new game
    this.gameState.setName(this.playerName);
    this.commands.send({
      cmd: 'newGame'
    });
  }

  joinGame() {
    // save the player data to local storage
    this.gameState.setName(this.playerName);

    this.router.navigate([`card-game/lobby/${this.roomCode}`]);
  }

  sendMsg() {
    this.commands.send({ message: 'hello world'});
  }

}
