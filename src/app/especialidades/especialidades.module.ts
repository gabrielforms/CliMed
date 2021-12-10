import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    EspecialidadesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EspecialidadesModule { }
