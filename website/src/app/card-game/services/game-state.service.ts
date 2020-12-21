import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'any'
})
export class GameStateService {

  private player: Player | null = null;
  private game: Game | null = null;
  private id: string | null = null;
  private name: string = "";

  constructor() {
    console.log('New game state');
    this.loadState();
  }

  private loadState() {
    const savedPlayer = localStorage.getItem('cg-stored-player');
    const savedGame = localStorage.getItem('cg-stored-game');
    const playerId = localStorage.getItem('cg-player-id');
    if (savedPlayer) {
      this.player = JSON.parse(savedPlayer) as Player;
      this.name = this.player.name;
    }
    if (savedGame) {
      this.game = JSON.parse(savedGame) as Game;
    }
    if (playerId) {
      this.id = playerId;
    }
  }

  public saveState() {
    if (this.player) {
      localStorage.setItem('cg-stored-player', JSON.stringify(this.player));
    }
    if (this.game) {
      localStorage.setItem('cg-stored-game', JSON.stringify(this.game));
    }
    if (this.id) {
      localStorage.setItem('cg-player-id', this.id);
    }
  }

  public setPlayer(player: Player) {
    this.player = player;
  }

  public getPlayer() {
    return this.player
  }

  public setGame(game: Game) {
    this.game = game;
  }

  public getGame() {
    return this.game;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setName(name: string) {
    this.name = name;
  } 

  public getName() {
    return this.name;
  }

}
