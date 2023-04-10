import { Component } from '@angular/core';
import { ProductoService} from '../../service/producto.service';
import { Producto } from 'src/app/data/producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
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
