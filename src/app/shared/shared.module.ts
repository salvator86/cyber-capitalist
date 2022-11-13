import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business/business.component';
import { ConvertTimePipe } from '../convert-time.pipe';



@NgModule({
  declarations: [
    BusinessComponent,
    ConvertTimePipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BusinessComponent
  ]
})
export class SharedModule { }
