import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: Usuario = new Usuario(); 
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
   
  }
    
  fazerLogin(){
    this.authService.fazerLogin(this.usuario)  
    
  }

}
