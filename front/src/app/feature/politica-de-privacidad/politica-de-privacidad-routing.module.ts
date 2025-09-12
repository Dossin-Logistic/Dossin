import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad.component';

const routes: Routes = [
  { path: '', component: PoliticaDePrivacidadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PoliticaDePrivacidadRoutingModule { }