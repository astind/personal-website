import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';
import { CommandService } from '../../services/command.service';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  isHost: boolean | null = null;
  gameId: string | null = null;
  
  players: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private cmdService: CommandService,
    private gameState: GameStateService
  ) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.cmdService.connect().subscribe(
      message => {
        if (message.resp === "joinGame") {
          if (message.added) {
            if (message.players.length === 1) {
              this.isHost = true;
            }
            for (const obj of message.players) {
              this.players.push(obj);
            }
          } else {
            this.gameId = "ERROR: Cannot join game, Room might be full";
          }
        } else if (message.resp === "addPlayer") {
          this.players.push(message.player);
        }
      },
      error => {
        console.error(error);
      }
    );
    if (this.getPlayerData()) {
      console.log('join in progress')
      this.joinGameInProgress();
    } else {
      console.log('join normal');
      this.sendJoinGame();
    }
  }

  sendJoinGame() {
    // connect to server using gameId
    this.cmdService.send({
      cmd: 'joinGame',
      gameId: this.gameId,
      playerId: this.gameState.getId(),
      playerName: this.gameState.getName()
    });
  }

  getPlayerData(): boolean {
   return false;
  }

  joinGameInProgress() {

  }

}
