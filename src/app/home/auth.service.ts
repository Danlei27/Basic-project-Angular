import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;
  
  mostrarMenuEmitter = new EventEmitter<boolean>();
  
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
  
    if (usuario.nome ==  's' && usuario.senha == 's'){

      this. usuarioAutenticado = true;

      this.mostrarMenuEmitter.emit(true);
      
      this.router.navigate(['/usuario']);
            
    }else {

      this.mostrarMenuEmitter.emit(false);
      this.usuarioAutenticado = false;
      alert('Senha ou Usuário incorreto!')
      
    }    
  }
  
  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
