import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticaDePrivacidadRoutingModule } from './politica-de-privacidad-routing.module';
import { PoliticaDePrivacidadComponent } from './politica-de-privacidad.component';

@NgModule({
  declarations: [PoliticaDePrivacidadComponent],
  imports: [
    CommonModule,
    PoliticaDePrivacidadRoutingModule
  ]
})
export class PoliticaDePrivacidadModule { }
