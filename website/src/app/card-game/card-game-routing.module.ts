import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
    { path: '', component: MainMenuComponent },
    { path: 'lobby/:gameId', component: LobbyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardGameRoutingModule { }