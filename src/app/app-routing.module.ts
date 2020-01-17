import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaComponent } from './alta/alta.component';
import { ListadoComponent } from './listado/listado.component';
import { ModificarComponent } from './modificar/modificar.component';


const routes: Routes = [
  {
    path: 'alta',
    component: AltaComponent
  }, {
    path: 'listado',
    component: ListadoComponent
  }, {
    path: 'modificar',
    component: ModificarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
