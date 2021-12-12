import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BySpecialtyComponent } from './byspecialty.component';

const BYSPECIALTY_ROUTES: Routes = [{
  path: 'byspecialty',
  component: BySpecialtyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(BYSPECIALTY_ROUTES)],
  exports: [RouterModule]
})
export class BySpecialtyRoutingModule { }
