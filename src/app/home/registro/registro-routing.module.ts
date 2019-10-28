import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { DocenteComponent } from './docente/docente.component';
const routes: Routes = [
	{path: '', component: RegistroComponent},
	{path: 'usuario', component: UsuarioComponent},
	{path: 'docente', component: DocenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroRoutingModule { }
