import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business/business.component';



@NgModule({
  declarations: [
    BusinessComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BusinessComponent
  ]
})
export class SharedModule { }
