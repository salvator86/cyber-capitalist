import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartGameScreenComponent} from "./features/start-game-screen/start-game-screen.component";
import {SplashScreenComponent} from "./features/splash-screen/splash-screen.component";
import {ShopComponent} from "./features/shop/shop.component";
import {ManagersComponent} from "./features/managers/managers.component";
import {UpgradesComponent} from "./features/upgrades/upgrades.component";
import {InventoryComponent} from "./features/inventory/inventory.component";
import {LeadersBoardComponent} from "./features/leaders-board/leaders-board.component";

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: 'game', component: StartGameScreenComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'managers', component: ManagersComponent},
  {path: 'upgrades', component: UpgradesComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'leaders-board', component: LeadersBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
