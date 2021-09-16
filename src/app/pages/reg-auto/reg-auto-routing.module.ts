import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegAutoPage } from './reg-auto.page';

const routes: Routes = [
  {
    path: '',
    component: RegAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegAutoPageRoutingModule {}
