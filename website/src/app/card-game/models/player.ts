import { Deck } from './deck';


export class Player {

  id: string;
  name: string = "";
  score: number = 0;
  handCount: number = 0;
  hand: Deck;

  constructor(id: string) {
    // replace with UUID
    this.id = id;
    this.hand = new Deck();
  }

}
