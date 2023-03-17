import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelecionarMapaPage } from './selecionar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: SelecionarMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelecionarMapaPageRoutingModule {}
