import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private readonly API = 'http://localhost:3000/produtos';
  
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Produtos[]>(this.API);
  }
}
