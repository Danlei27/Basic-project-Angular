import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AuthGuard } from './guards/auth.guard';
import { NovoProdutoComponent } from './novo-produto/novo-produto.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lista', component: ListaProdutosComponent},
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
  { path: 'produto', component: NovoProdutoComponent, canActivate: [AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
