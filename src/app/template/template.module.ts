import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { AppRoutingModule } from '../app-routing.module';
import { Router, RouterModule } from '@angular/router';
import { TemplateComponent } from './template.component';


@NgModule({
  declarations: [
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TemplateRoutingModule,
    RouterModule,
  ]
})
export class TemplateModule { }
