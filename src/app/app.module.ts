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

@NgModule({
  declarations: [
    AppComponent,
    ClinicasComponent,
  ],
  imports: [
    BrowserModule,
    TemplateModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ClinicasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
