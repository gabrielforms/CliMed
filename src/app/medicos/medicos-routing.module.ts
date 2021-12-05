import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosComponent } from './medicos.component';

const MEDICOS_ROUTES: Routes = [
  {
    path: 'medicos',
    component: MedicosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(MEDICOS_ROUTES)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
