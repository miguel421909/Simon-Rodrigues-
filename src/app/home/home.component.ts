import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HOMEComponent implements OnInit {
 
  // ARREGLO QUE CONTIENE LOS LINKS
  links: Object[] = [
    {
      title: 'Inicio',
      icon: 'home',
      route: 'home'
    },
    {
      title: 'Registro',
      icon: 'attachment',
      route: 'registro'
    },
    {
      title: 'Consultas',
      icon: 'folder_open',
      route: '/'
    },
    {
      title: 'Seguridad',
      icon: 'security',
      route: '/'
    },
    {
      title: 'Oferta Aademica',
      icon: 'local_printshop',
      route: '/'
    },
  ];
	panelOpenState = false ;

	step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor() { }

  ngOnInit() {
  }

}
