import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NClavePageRoutingModule } from './n-clave-routing.module';

import { NClavePage } from './n-clave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NClavePageRoutingModule
  ],
  declarations: [NClavePage]
})
export class NClavePageModule {}
