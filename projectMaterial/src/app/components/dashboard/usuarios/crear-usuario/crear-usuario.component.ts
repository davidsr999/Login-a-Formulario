import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/menu';
import { GuardService } from 'src/app/services/guard.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
 form!: FormGroup;
  constructor(private fb: FormBuilder, private _userSvc: UsuarioService,
    private router: Router, private _snackBar: MatSnackBar, private guardSvc: GuardService) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required]
      
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const user: Usuario = {
      name: this.form.value.name,
      apellido: this.form.value.apellido,
      sexo: this.form.value.sexo,
      edad: this.form.value.edad
    }
    this._userSvc.agregarUsuario(user);
    console.log(user);
    this.router.navigate(['/dashboard/usuarios']);

    this._snackBar.open('Usuario agregado con éxito', 'Ok',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }



  volverFunc() {
    this.router.navigate(['/dashboard/usuarios'])
  }

}
