import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductoService} from '../../service/producto.service';
import { Producto } from 'src/app/data/producto';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent  {
  productoForm: any;
  

  constructor(private productoService: ProductoService){}
  OnInit(){
    const productoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl(''),
      precio: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    const nuevoProducto = {
      nombre: this.productoForm.value.nombre,
      descripcion: this.productoForm.value.descripcion,
      precio: this.productoForm.value.precio
    };

    this.productoService.agregarProducto(nuevoProducto);
  this.productoForm.reset();
}
}