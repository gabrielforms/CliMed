import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './template.component';

const TEMPLATE_ROUTES: Routes = [
  {
    path: '',
    component: TemplateComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./../medicos/medicos.module').then(m => m.MedicosModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../especialidades/especialidades.module').then(m => m.EspecialidadesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TEMPLATE_ROUTES)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
