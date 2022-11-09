import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartGameScreenComponent} from "./features/start-game-screen/start-game-screen.component";
import {SplashScreenComponent} from "./features/splash-screen/splash-screen.component";

const routes: Routes = [
  {path: '', component: SplashScreenComponent},
  {path: 'game', component: StartGameScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
