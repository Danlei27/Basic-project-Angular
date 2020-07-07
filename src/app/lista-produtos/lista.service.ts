import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from './produtos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private readonly API  = `${environment.API}produtos`;
  
  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Produtos[]>(this.API);
  }
}
