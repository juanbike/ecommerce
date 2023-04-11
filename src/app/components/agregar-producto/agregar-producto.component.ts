import { Component, OnInit } from '@angular/core';
import { ProductoService} from '../../service/producto.service';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { CheckHttpService } from 'src/app/service/check-http.service'; 
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';


@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent  {
  httpStatus: boolean = true;
  status: OnlineStatusType = 0; //Enum provided by ngx-online-status
  onlineStatusCheck: any = OnlineStatusType;
  

  // ININICIALIZAMOS PRODUCT
  product = {
    nombre: '',
    descripcion: '',
    precio: 0
  };


//INYECTAMOS LOS SERVICIOS EN EL CONSTRUCTOR
  constructor(private productoService: ProductoService, private notifyService : NotificacionesService, 
    private checkHttpService:CheckHttpService, private onlineStatusService: OnlineStatusService ){
      this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
        // Retrieve Online status Type
        this.status = status;
        console.log("Internet esta:",this.status)
        this.notifyService.showInfo("Internet esta, `{this.status}`", "Mensaje")
      });
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


/*
onSubmit(){
  this.checkHttpService
    .checkConnection()
    .subscribe((connected) => {
      
      if (connected) {
          this.notifyService.showSuccess("Producto agregado", "Exitosamente");
         
      } else {
        this.notifyService.showError("Error al agregar el producto", "verifique conexión a internet")
      }
    })

}

*/

ngOnInit() {
  this.checkHttpService.checkConnection().subscribe(status => {
    this.httpStatus = status;
  });
}





}
