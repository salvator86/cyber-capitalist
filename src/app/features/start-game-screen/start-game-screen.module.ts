import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {BusinessComponent} from "../../shared/business/business.component";



@NgModule({
  declarations: [BusinessComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class StartGameScreenModule { }
