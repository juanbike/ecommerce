import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../service/producto.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { CheckHttpService } from 'src/app/service/check-http.service'; 

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



  constructor(private productoService: ProductoService, private notifyService : NotificacionesService, 
    private checkHttpService:CheckHttpService ){
    
  }
  
/* 
onSubmit() {
  this.productoService.agregarProducto(this.product).subscribe(
    response => {
      console.log('Producto agregado:', response);
      
      this.notifyService.showSuccess("Producto agregado", "Exitosamente")
    },
    error => {
      console.error('Error al agregar el producto:', error);
      this.notifyService.showError("Error al agregar el prducto", "verifique conexión a internet")
    }
  );
}
*/

onSubmit(){
  this.checkHttpService
    .checkConnection()
    .subscribe((connected) => {
      
      if (connected) {
          this.notifyService.showSuccess("Producto agregado", "Exitosamente");
          this.productoService.agregarProducto(this.product).subscribe();
      } else {
        this.notifyService.showError("Error al agregar el producto", "verifique conexión a internet")
      }
    })

}

}
