import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnexComponent } from './anex/anex.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { ManifestComponent } from './manifest/manifest.component';

@NgModule({
  declarations: [
    AppComponent,
    AnexComponent,
    ChecklistComponent,
    SolicitudComponent,
    ManifestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
