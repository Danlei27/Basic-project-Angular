import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaService } from './lista.service';
import { Produtos } from './produtos';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.css']
})
export class ListaProdutosComponent implements OnInit {
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
  produtos: Produtos[];
  displayedColumns: string[] = ['id', 'nome', 'quantidades', 'button'];
  
  title = 'Almoxarifado';
  dataSource =  new MatTableDataSource(this.produtos)

  constructor(private service: ListaService) { }

  ngOnInit(): void {
    this.service.list().subscribe(dados => this.dataSource.data =  dados);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
