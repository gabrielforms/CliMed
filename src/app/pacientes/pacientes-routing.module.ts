import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesComponent } from './pacientes.component';

const PACIENTES_ROUTES: Routes = [
  {
    path: 'pacientes',
    component: PacientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(PACIENTES_ROUTES)],
  exports: [RouterModule]
})
export class PacientesRoutingModule { }
