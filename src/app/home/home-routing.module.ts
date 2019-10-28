import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HOMEComponent } from './home.component';

const routes: Routes = [
	{path: '', component: HOMEComponent,
		children: [
			{path: 'registro', loadChildren: () => import ('./registro/registro.module').then(m => m.RegistroModule)}
		]
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HOMERoutingModule { }
