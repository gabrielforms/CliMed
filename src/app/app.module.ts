import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TemplateComponent } from './template/template.component';
import { TemplateModule } from './template/template.module';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicosModule } from './medicos/medicos.module';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { EspecialidadesModule } from './especialidades/especialidades.module';


@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    EspecialidadesComponent,
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    MedicosModule,
    EspecialidadesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
