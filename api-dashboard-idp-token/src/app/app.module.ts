import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IdpLicenseModule } from './idp-license/idp-license.module';
import { SessionExtensionModalComponent } from './shared/session-extension-modal/session-extension-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SessionExtensionModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
