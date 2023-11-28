import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLicenseComponent } from 'src/app/idp-license/view-license/view-license.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ViewLicenseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ViewLicenseComponent
      }
    ])
  ],
  bootstrap:[ViewLicenseComponent]
})
export class ViewLicenseModule { }
