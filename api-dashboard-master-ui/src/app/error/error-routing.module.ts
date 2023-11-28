import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

const routes: Routes = [{
  path: 'error',
  component : ErrorComponent
},
{
  path: '',
  redirectTo : 'error',
  pathMatch: 'full'
},
{
  path: 'idp',
  redirectTo : 'error'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule {
  constructor(){

  }
 }
