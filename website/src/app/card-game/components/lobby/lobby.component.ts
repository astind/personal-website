import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../../models/player';
import { CommandService } from '../../services/command.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  ifHost: boolean | null = null;
  gameId: string | null = null;

  player: Player | null = null;
  playerName: string = "";

  players: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private cmdService: CommandService
  ) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.cmdService.connect().subscribe(
      message => {
        if (message.resp === "joinGame") {
          if (message.added) {
            for (const obj of message.players) {
              this.players.push(obj.name);
            }
          }
        } else if (message.resp === "addPlayer") {

        }
      },
      error => {
        console.error(error);
      }
    );
    if (this.getPlayerData()) {
      this.joinGameInProgress();
    } else {
      this.sendJoinGame();
    }
  }

  sendJoinGame() {
    console.log('hello');
    // connect to server using gameId
    this.cmdService.send({
      cmd: 'joinGame',
      gameId: this.gameId,
      playerName: this.playerName
    });
  }

  getPlayerData(): boolean {
    let savedPlayer = localStorage.getItem("cg-player") as string;
    if (savedPlayer !== null) {
      this.player = JSON.parse(savedPlayer) as Player;
      this.playerName = this.player.name;
      return true;
    } else {
      let name = localStorage.getItem('cg-saved-name');
      if (name){
        this.playerName = localStorage.getItem('cg-saved-name') as string;
      } else {
        // go back
        this.playerName = "Player";
      }
      return false;
    }
  }

  joinGameInProgress() {

  }

}
