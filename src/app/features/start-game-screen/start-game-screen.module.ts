import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {BusinessComponent} from "../../shared/business/business.component";
import {HeaderModule} from "../../core/header/header.module";
import {FooterModule} from "../../core/footer/footer.module";



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
    FooterModule
  ]
})
export class StartGameScreenModule { }
