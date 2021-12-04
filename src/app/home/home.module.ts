import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { TemplateRoutingModule } from '../template/template-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {
  
}
