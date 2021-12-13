import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BySpecialtyRoutingModule } from './byspecialty-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({

  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BySpecialtyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BySpecialtyModule { }
