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
        loadChildren: () => import('./../clinicas/clinicas.module').then(m => m.ClinicasModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../medicos/medicos.module').then(m => m.MedicosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TEMPLATE_ROUTES)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
