import { Component } from '@angular/core';
import { AuthService } from './home/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mostrarMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router){

  }

  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
  }

  logout(){
    this.authService.mostrarMenuEmitter.emit(false)
      
    this.router.navigate(['/'])
  }
}
