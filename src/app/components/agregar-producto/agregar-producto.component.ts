import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../service/producto.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';

import { ToastrService, GlobalConfig } from 'ngx-toastr';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent  {
 
  

  // ININICIALIZAMOS PRODUCT
  product = {
    nombre: '',
    descripcion: '',
    precio: 0
  };



  constructor(private productoService: ProductoService, private notifyService : NotificacionesService){
    
  }
  
 
onSubmit() {
  this.productoService.agregarProducto(this.product).subscribe(
    response => {
      console.log('Producto agregado:', response);
      
      this.notifyService.showSuccess("Producto agregado", "Exitozamente")
    },
    error => {
      console.error('Error al agregar el producto:', error);
      this.notifyService.showError("Error al agregar el prducto", "verifique conexión a internet")
    }
  );
}

}


