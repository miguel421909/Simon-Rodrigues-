import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
	// GRUPO DEL FORMULARIO
	rForm: FormGroup;
	// VARIABLES DEL FORMULARIO
	usuario: string;
	password: string;
	passwordr: string;
	tipo: string;
	activo: boolean;
	nuevo: boolean;
	// ERRORES DEL FORMULARIO
	message: string;
	error: boolean;
	// REGISTRO DEL FORMULARIO
	user: string;
	// OBJETO DEL TIPO DE USUARIO 
	type: Object[] = [
  		{ 
  			title: 'Administrador'
  		},
  		{ 
  			title: 'Usuario'
  		}
  	];

  constructor(private fb: FormBuilder) {

  	this.rForm = fb.group({
  		usuario: new FormControl('', [Validators.required, Validators.minLength(5)]),
  		password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  		passwordr: new FormControl('', [Validators.required, Validators.minLength(7)]),
  		tipo: new FormControl('', Validators.required),
  		activo: new FormControl(true, Validators.required),
  		nuevo: new FormControl(true, Validators.required),

  	});

   
  }

  async addUsuario(post){
  	
  	if(this.rForm.value['password'] != this.rForm.value['passwordr']) {
  		
  		this.error = true;
  		return this.message = "!Las Contraseñas no Coinciden¡";

  		
  	}else{
  		this.error = false;
  		console.log(this.rForm.value);
  		await this.rForm.reset();
  		return this.message = "!Registro Satisfactorio¡";
  		
  	}
  	
  	
  	
  }

}
