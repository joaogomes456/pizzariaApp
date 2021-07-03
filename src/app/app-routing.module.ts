import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'mussarela',
    loadChildren: () => import('./pizzas/mussarela/mussarela.module').then( m => m.MussarelaPageModule)
  },
  {
    path: 'calabresa',
    loadChildren: () => import('./pizzas/calabresa/calabresa.module').then( m => m.CalabresaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
