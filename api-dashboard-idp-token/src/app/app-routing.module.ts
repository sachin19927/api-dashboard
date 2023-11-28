import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'idp/token',
    pathMatch: 'full'
  },
  {
    path: 'idp/token',
    loadChildren: ()=> import('./idp-license/idp-license.module').then(m=>m.IdpLicenseModule),
  },
  {
    path: '**',
    redirectTo: 'idp/token'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
