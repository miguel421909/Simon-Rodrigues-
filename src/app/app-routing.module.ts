import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LOGINComponent } from './login/login.component';

const routes: Routes = [
	{path:'', redirectTo:'login', pathMatch:'full'},
	{path:'login', component: LOGINComponent},
	{path: 'home', loadChildren: () => import ('./home/home.module').then(m => m.HOMEModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
