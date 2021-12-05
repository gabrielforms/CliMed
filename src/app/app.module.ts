import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { TemplateComponent } from './template/template.component';
import { TemplateModule } from './template/template.module';
import { ClinicasComponent } from './clinicas/clinicas.component';
import { ClinicasModule } from './clinicas/clinicas.module';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicosModule } from './medicos/medicos.module';
import { MarcacaoComponent } from './marcacao/marcacao.component';
import { MarcacaoModule } from './marcacao/marcacao.module';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacientesModule } from './pacientes/pacientes.module';

@NgModule({
  declarations: [
    AppComponent,
    ClinicasComponent,
    MedicosComponent,
    MarcacaoComponent,
    PacientesComponent,
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ClinicasModule,
    MedicosModule,
    MarcacaoModule,
    PacientesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
