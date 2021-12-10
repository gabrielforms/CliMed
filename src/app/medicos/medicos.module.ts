import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MedicosRoutingModule } from './medicos-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MedicosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicosModule { }
