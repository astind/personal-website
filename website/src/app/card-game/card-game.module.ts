import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameRoutingModule } from './card-game-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MaterialModule } from '../main/modules/material/material.module';
import { LobbyComponent } from './components/lobby/lobby.component';
import { SharedModule } from '../main/modules/shared/shared.module';
import { CgBaseComponent } from './components/cg-base/cg-base.component';
import { CommandService } from './services/command.service';
import { GameStateService } from './services/game-state.service';



@NgModule({
  declarations: [MainMenuComponent, LobbyComponent, CgBaseComponent],
  imports: [
    CommonModule,
    CardGameRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [ 
    CommandService,
    GameStateService
  ]
})
export class CardGameModule { }
