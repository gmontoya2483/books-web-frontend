import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, NgModel, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    if (this.authService.isUserAlreadyLoggedIn()){
      this.router.navigate(['/dashboard']).then();
    }

    this.crearFormulario();
    this.cargarDataEnFormulario();
  }

  campoNoValido(campo: string){
    if (!this.loginForm.get(campo)){
      return;
    }
    return this.loginForm.get(campo).invalid && this.loginForm.get(campo).touched;
  }


  cargarDataEnFormulario(){

    const email = localStorage.getItem('email') || null;

    if ( email ){
      this.loginForm.reset({
        email,
        recuerdame: true,
        password: ''
      });
    }
  }


  private crearFormulario() {
    this.loginForm = this.fb.group({
      email  : ['', [
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'),
        Validators.required]],
      password: ['', [Validators.required]],
      recuerdame: [false, [Validators.required]]
    });

  }

  ngOnInit(): void {
  }

  ingresar( ) {

    if (this.loginForm.invalid){
      Object.values( this.loginForm.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }

    this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password,
      this.loginForm.value.recuerdame).subscribe((resp: any) => {

        this.router.navigate(['/dashboard']).then();
    });
  }






}