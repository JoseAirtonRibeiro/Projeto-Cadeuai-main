import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradasMapPageRoutingModule } from './entradas-map-routing.module';

import { EntradasMapPage } from './entradas-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradasMapPageRoutingModule
  ],
  declarations: [EntradasMapPage]
})
export class EntradasMapPageModule {}
