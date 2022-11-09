import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplashScreenModule} from "./features/splash-screen/splash-screen.module";
import { StartGameScreenComponent } from './features/start-game-screen/start-game-screen.component';
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    StartGameScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplashScreenModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
