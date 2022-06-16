import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnexComponent} from "./anex/anex.component";
import {ChecklistComponent} from "./checklist/checklist.component";
import {SolicitudComponent} from "./solicitud/solicitud.component";
import { ManifestComponent } from './manifest/manifest.component';

const routes: Routes = [
  { path: '', redirectTo: 'anex', pathMatch: 'full' },
  { path: 'anex', component: AnexComponent },
  { path: 'checklist', component: ChecklistComponent },
  { path: 'solicitud', component: SolicitudComponent },
  { path: 'manifest', component: ManifestComponent },
  { path: '**', component: AnexComponent } // If no matching route found, go back to anex route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
