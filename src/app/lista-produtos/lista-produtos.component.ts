import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';
import { Produtos } from './produtos';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'button'];
  dataSource: Produtos[];
  
  title = 'Almoxarifado';
  produtos: Produtos[];

  constructor(private service: ListaService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.dataSource = dados);
    
  }

}
