import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartGameScreenComponent} from "./features/start-game-screen/start-game-screen.component";
import {SplashScreenComponent} from "./features/splash-screen/splash-screen.component";
import {ShopComponent} from "./features/shop/shop.component";

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: 'game', component: StartGameScreenComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
