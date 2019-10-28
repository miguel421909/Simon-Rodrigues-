import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule, 
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}