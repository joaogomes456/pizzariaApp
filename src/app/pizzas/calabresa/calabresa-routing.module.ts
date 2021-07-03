import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalabresaPage } from './calabresa.page';

const routes: Routes = [
  {
    path: '',
    component: CalabresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalabresaPageRoutingModule {}
