import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelecionarMapaPageRoutingModule } from './selecionar-mapa-routing.module';

import { SelecionarMapaPage } from './selecionar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelecionarMapaPageRoutingModule
  ],
  declarations: [SelecionarMapaPage]
})
export class SelecionarMapaPageModule {}
