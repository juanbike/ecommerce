import { Component } from '@angular/core';
import { ProductoService} from '../../service/producto.service';
import { Producto } from 'src/app/data/producto';
@Component({
  selector: 'app-consultar-producto',
  templateUrl: './consultar-producto.component.html',
  styleUrls: ['./consultar-producto.component.css']
})
export class ConsultarProductoComponent {
  productos: Producto[] = [];
  constructor(private productoService: ProductoService){}

  ngOnInit(){
    this.productoService.getProducts().subscribe(
      productos => {
        this.productos = productos
      }
    );
  }
}
