import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: ContactoComponent },
  { path: ':formulario', component: ContactoComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
