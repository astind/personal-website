import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGameRoutingModule } from './card-game-routing.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MaterialModule } from '../main/modules/material/material.module';
import { LobbyComponent } from './components/lobby/lobby.component';
import { SharedModule } from '../main/modules/shared/shared.module';



@NgModule({
  declarations: [MainMenuComponent, LobbyComponent],
  imports: [
    CommonModule,
    CardGameRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class CardGameModule { }
