import { Component, OnInit } from '@angular/core';
import { CommandService } from '../../services/command.service';
import { GameStateService } from '../../services/game-state.service';

@Component({
  selector: 'app-cg-base',
  templateUrl: './cg-base.component.html',
  styleUrls: ['./cg-base.component.scss']
})
export class CgBaseComponent implements OnInit {

  constructor(
    private cmdService: CommandService,
    private gameState: GameStateService
  ) { }

  ngOnInit(): void {

    this.cmdService.connect().subscribe(
      message => {
        console.log('msg', message);
        if (message.resp === "connected") {
          this.gameState.setId(message.id);
        }
      }
    )
  }

}
