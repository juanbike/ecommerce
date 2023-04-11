import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CheckHttpService {
  private apiURL = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  public checkConnection(): Observable<boolean> {
    return this.http.get<boolean>(this.apiURL).pipe(
      map(() => false),
      catchError(() => of(true))
      
    );
  
  }
}

/*
En este método, se envía una solicitud HTTP GET a la URL de la API de productos y se espera una
 respuesta de tipo booleano. Si la respuesta es exitosa, se devuelve un observable que emite true. 
 Si la respuesta falla, se devuelve un observable que emite false.
*/
