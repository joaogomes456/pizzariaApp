import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalabresaPageRoutingModule } from './calabresa-routing.module';

import { CalabresaPage } from './calabresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalabresaPageRoutingModule
  ],
  declarations: [CalabresaPage]
})
export class CalabresaPageModule {}
