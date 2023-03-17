import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradasMapPage } from './entradas-map.page';

const routes: Routes = [
  {
    path: '',
    component: EntradasMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradasMapPageRoutingModule {}
