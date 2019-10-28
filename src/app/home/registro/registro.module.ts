import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { MaterialModule } from '../../material.module';
import { UsuarioComponent} from './usuario/usuario.component';
import { DocenteComponent } from './docente/docente.component';

@NgModule({
  declarations: [
  	RegistroComponent,
  	UsuarioComponent,
  	DocenteComponent
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule
  ]
})
export class RegistroModule { }
