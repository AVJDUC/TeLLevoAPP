import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NClavePage } from './n-clave.page';

const routes: Routes = [
  {
    path: '',
    component: NClavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NClavePageRoutingModule {}
