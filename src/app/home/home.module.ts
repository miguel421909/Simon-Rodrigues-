import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HOMERoutingModule } from './home-routing.module';
import { HOMEComponent } from '../home/home.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
  	HOMEComponent,
  ],
  imports: [
    CommonModule,
    HOMERoutingModule,
    MaterialModule
  ]
})
export class HOMEModule { }
