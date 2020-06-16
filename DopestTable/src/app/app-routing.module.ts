import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrincipalTableComponent} from './principal-table/principal-table.component';
import {PopUpTableComponent} from './pop-up-table/pop-up-table.component'


const routes: Routes = [
  { path: '', component: PrincipalTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
