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

      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(TEMPLATE_ROUTES)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
