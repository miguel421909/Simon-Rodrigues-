import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LOGINComponent {

  // VALIDAR EL FORMULARIO
	form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  // FUNCION PARA ENVIAR EL FORMULARIO
  submit() {}
  
}


