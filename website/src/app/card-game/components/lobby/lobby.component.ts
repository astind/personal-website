import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  ifHost: boolean | null = null;
  gameId: string | null = null;

  players: string[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameId = this.route.snapshot.paramMap.get('gameId');
    this.getLobbyData();
  }

  getLobbyData() {
    // connect to server using gameId
    // fetch player data from local storage 
    this.ifHost = true;
  }



}
