import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {BusinessComponent} from "../../shared/business/business.component";
import {HeaderModule} from "../../core/header/header.module";



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule
  ]
})
export class StartGameScreenModule { }
