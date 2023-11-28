import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicGuard } from './service/basic.guard';
import { AppComponent } from './app.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
  canActivate: [BasicGuard],
  pathMatch : 'full'

},
{
  path: 'idp/token',
  loadChildren: () =>
    loadRemoteModule({
      remoteEntry : 'http://localhost:4306/remoteEntry.js',
      remoteName : 'api_dashboar_idp_token',
      exposedModule: 'IdpLicenseModule'
    }).then((m)=>{
      return m.IdpLicenseModule
    }).catch(err => {
      return import('./error/error.module').then(m=>m.ErrorModule)
    }),
    canActivate: [BasicGuard]
},
{
  path : '**',
  redirectTo : ''
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
