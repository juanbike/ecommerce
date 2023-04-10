import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './components/inicio/inicio.component';
import { ConsultarProductoComponent } from './components/consultar-producto/consultar-producto.component';
import { AgregarProductoComponent } from './components/agregar-producto/agregar-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent},
  { path: 'agregar-producto', component: AgregarProductoComponent },
  { path: 'actualizar-producto', component: ActualizarProductoComponent },
  { path: 'eliminar-producto', component: EliminarProductoComponent },
  { path: 'consultar-producto', component: ConsultarProductoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
