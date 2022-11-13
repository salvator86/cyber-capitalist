import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SplashScreenModule} from "./features/splash-screen/splash-screen.module";
import { StartGameScreenComponent } from './features/start-game-screen/start-game-screen.component';
import {SharedModule} from "./shared/shared.module";
import {HeaderModule} from "./core/header/header.module";
import {FooterModule} from "./core/footer/footer.module";

@NgModule({
  declarations: [
    AppComponent,
    StartGameScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplashScreenModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
