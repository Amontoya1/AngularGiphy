
import { BuscarComponent } from './buscar/buscar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './gifs/gifs.component';

const routes: Routes = [
  {
    path: "",
    component: BuscarComponent
  },
  {
    path: "gifs",
    component: GifsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
