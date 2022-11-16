import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessComponent } from './business/business.component';
import { ConvertTimePipe } from '../convert-time.pipe';
import { PageTitleComponent } from './page-title/page-title.component';



@NgModule({
  declarations: [
    BusinessComponent,
    ConvertTimePipe,
    PageTitleComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BusinessComponent,
    PageTitleComponent
  ]
})
export class SharedModule { }
