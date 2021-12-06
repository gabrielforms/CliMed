import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspecialidadesComponent } from './especialidades.component';

const ESPECIALIDADES_ROUTES: Routes = [{
  path: 'especialidades',
  component: EspecialidadesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ESPECIALIDADES_ROUTES)],
  exports: [RouterModule]
})
export class EspecialidadesRoutingModule { }
