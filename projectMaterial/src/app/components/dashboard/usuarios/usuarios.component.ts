import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/menu';
import { GuardService } from 'src/app/services/guard.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [];

  
  displayedColumns: string[] = ['name', 'apellido', 'sexo', 'edad', 'iconos'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _usuarioSvc: UsuarioService, private guardSvc: GuardService,
    private router: Router) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.listUsuarios = this._usuarioSvc.getUsuario();
    this.dataSource = new MatTableDataSource(this.listUsuarios);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  eliminarUsuario(i: number) {
    console.log(i);
    this._usuarioSvc.delete(i);
    this.cargarUsuario();
  }
}
