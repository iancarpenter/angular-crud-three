import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateVillainComponent } from './components/create-villain/create-villain.component';
import { ListVillainsComponent } from './components/list-villains/list-villains.component';


const routes: Routes = [
  { path: "createvillain", component: CreateVillainComponent },
  { path: "", component: ListVillainsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
