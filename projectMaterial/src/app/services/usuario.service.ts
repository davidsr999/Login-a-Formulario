import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {name: 'David', apellido: 'Sanz', sexo: 'Hombre', edad: 23},
    {name: 'Julio', apellido: 'Alvarez', sexo: 'Hombre', edad: 20},
    {name: 'Ana', apellido: 'Leton', sexo: 'Mujer', edad: 23},
    {name: 'Maria', apellido: 'Damasco', sexo: 'Mujer', edad: 23},
    {name: 'Joel', apellido: 'Fuentes', sexo: 'Hombre', edad: 24},
    {name: 'Carlos', apellido: 'Sales', sexo: 'Hombre', edad: 30},
  
  ]



  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }
  delete(i: number) {
    this.listUsuarios.splice(i, 1);
  }

  agregarUsuario(user: Usuario) {
    this.listUsuarios.unshift(user);
  }
}
