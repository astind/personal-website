import { Card } from './card';
import { Deck } from './deck';
import { Player } from './player';

export class Game {

  players: Player[];
  deck : Deck;
  cardsPlayed: Card[];
  discardDeck: Deck;

  constructor() {
    this.players = [];
    this.deck = new Deck();
    this.cardsPlayed = [];
    this.discardDeck = new Deck();
  }

  play(playerid: string, card: Card) {

  }

  cleanRound() {

  }

  addPlayer(player: Player) {
    this.players.push(player);
  }


}
