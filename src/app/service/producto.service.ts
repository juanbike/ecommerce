import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Producto } from '../data/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/productos';

  productos: Producto[] = []; //se almacenan todos los productos
  
  constructor(private http: HttpClient) { }

  //Obtenemos todos los productos
  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  //Agregamos un producto

  agregarProducto(nuevoProducto: any) {
    this.productos.push(nuevoProducto);
  }

  addProduct(product: any) {
    return this.http.post(this.apiUrl, product);
  }

}
