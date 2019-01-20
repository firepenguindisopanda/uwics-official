import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';

import { AppComponent } from './app.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AdminModule} from './admin/admin.module';
import {AppMaterialModule} from './app-material/app-material.module';
import {PublicModule} from './public/public.module';
import {TemplatesModule} from './templates/templates.module';
import {PublicRoutingModule} from './public/public-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TemplatesModule,
    PublicModule,
    AdminModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatRippleModule,
    MatSnackBarModule,
    MatDialogModule,
    AppMaterialModule,
    AppRoutingModule,
    PublicRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],

})

export class AppModule {
  constructor(update: SwUpdate, public snackbar: MatSnackBar) {
    update.available.subscribe(() => {
      console.log('Update Available');
      const snack = snackbar.open('A new version of this application is available! :D', 'Reload');

      snack.onAction().subscribe(() => {
        window.location.reload(true);
      });

    });
  }
}
