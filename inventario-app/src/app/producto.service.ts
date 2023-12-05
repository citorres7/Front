import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase ="http://localhost:8081/inventario-app/producto"
  constructor(privateHttp: HttpClient) { }
}
