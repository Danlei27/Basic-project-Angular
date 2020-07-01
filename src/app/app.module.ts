import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { AuthService } from './home/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListaProdutosComponent,
    LogoutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    
     
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
