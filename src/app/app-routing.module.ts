import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FilmeapiComponent } from './filmeapi/filmeapi.component';


const routes: Routes = [
  {path: '', component: FilmeapiComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }