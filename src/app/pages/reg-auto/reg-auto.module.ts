import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegAutoPageRoutingModule } from './reg-auto-routing.module';

import { RegAutoPage } from './reg-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegAutoPageRoutingModule
  ],
  declarations: [RegAutoPage]
})
export class RegAutoPageModule {}
