import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Producto } from '../data/producto';
import { NotificacionesService } from 'src/app/service/notificaciones.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/productos';

  productos: Producto[] = []; //se almacenan todos los productos

 
  
  constructor(private http: HttpClient, private notifyService : NotificacionesService) {
   
   }

  //Obtenemos todos los productos
  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

/*
  agregarProducto(product: any) {
    return this.http.post(this.apiUrl, product).pipe(
            catchError(this.handleError<Producto>())
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(`${operation} failed: ${error.message}`);
      this.notifyService.showError("Error de conexion", "verifique Internet")
      return of(result as T);
    };
  }
  */

  agregarProducto(product: any):void{
    this.http.post(this.apiUrl, product).pipe(
      try {
        console.log('Conexión HTTP exitosa');
      } catch (error) {
        
        console.log('Error de conexión HTTP');
        // Aquí puedes agregar el código para manejar el error
      }
    );
  }


  
}

/* ------------------------------ EXPLICAION DEL METODO AGREGARPRODUCTO --------------------------------------
Este es un ejemplo de un método en un servicio Angular llamado agregarProducto(), que se encarga de agregar un nuevo producto a través de una solicitud HTTP POST a un servidor externo.

1- La función toma un objeto product como parámetro, que contiene la información del producto que se va a agregar.

2- El método hace uso del servicio HttpClient para realizar la solicitud HTTP POST.

3- El método pipe() se utiliza para agregar operadores de RxJS adicionales a la secuencia de observables que se crea a partir de la solicitud HTTP. En este caso, estamos usando el operador catchError()
  para manejar cualquier error que se produzca durante la ejecución de la solicitud HTTP.

4- La función handleError() es una función genérica que puede manejar cualquier tipo de error que se produzca en cualquier operación. En este caso, la función simplemente devuelve un observable
   que emite un valor predeterminado (en este caso null), lo que permite que la aplicación siga funcionando en caso de que se produzca un error en la solicitud HTTP.

EN RESUMEN, este método se utiliza para agregar un nuevo producto a través de una solicitud HTTP POST y manejar cualquier error que se produzca durante la ejecución de 
la solicitud utilizando el operador catchError().

*/


/*  ------------------------------ EXPLICAION DEL METODO handleError --------------------------------------
1- La función toma dos parámetros. El primer parámetro es operation, que es una cadena que describe la operación que se estaba realizando cuando se produjo el error.
   El segundo parámetro es result, que es un valor opcional que se utiliza para proporcionar un valor predeterminado en caso de que se produzca un error.

2- La función devuelve una función de flecha que toma un parámetro error y devuelve un observable. La función de flecha utiliza el operador console.error() para imprimir un mensaje de error
 en la consola que describe la operación que se estaba realizando y el mensaje de error que se produjo.

3- Luego, la función de flecha utiliza el operador of() para crear un observable que emite el valor predeterminado proporcionado como segundo parámetro, que puede ser cualquier tipo de datos genéricos.
 La función de flecha emite el observable resultante.
*/


