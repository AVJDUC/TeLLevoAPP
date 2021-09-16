import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'reg-user',
    loadChildren: () => import('./pages/reg-user/reg-user.module').then( m => m.RegUserPageModule)
  },
  {
    path: 'reg-auto',
    loadChildren: () => import('./pages/reg-auto/reg-auto.module').then( m => m.RegAutoPageModule)
  },
  {
    path: 'n-clave',
    loadChildren: () => import('./pages/n-clave/n-clave.module').then( m => m.NClavePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
