import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/services/guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar, private router: Router, private guardSvc: GuardService) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    if(usuario == 'david' && password == '123'){
      this.fakeLoading();
      this.guardSvc.getValid();

     
    } else {
      this.error();
      this.form.reset();
      this.guardSvc.notvalid();
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña invalidos', 'Ok',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  fakeLoading() {
    this.loading = true;
    setTimeout(() => this.router.navigate(['dashboard']), 500)
  }
}
