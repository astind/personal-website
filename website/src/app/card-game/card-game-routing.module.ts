import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CgBaseComponent } from './components/cg-base/cg-base.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';

const routes: Routes = [
    { 
      path: '',
      component: CgBaseComponent,
      children: [
        { path: 'lobby/:gameId', component: LobbyComponent },
        { path: 'main-menu', component: MainMenuComponent },
        { path: '', redirectTo: '/card-game/main-menu'}
      ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardGameRoutingModule { }