import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagersComponent } from './managers.component';



@NgModule({
  declarations: [
    ManagersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ManagersComponent
  ]
})
export class ManagersModule { }
