import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicasComponent } from './clinicas.component';

const CLINICAS_ROUTES: Routes = [
  {
    path: 'clinicas',
    component: ClinicasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(CLINICAS_ROUTES)],
  exports: [RouterModule]
})
export class ClinicasRoutingModule { }
