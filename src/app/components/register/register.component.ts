import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidadoresService} from '../../services/validadores.service';
import {Usuario} from '../../Interfaces/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder,
              private validadores: ValidadoresService) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  /// Getters
  get password1NoValido(){
    // TODO: Revisar Pattern minimo 8, maximo 30, 1 mayusculo, 1 minuscula 1 un caracter especial
    return this.registroForm.get('password1').invalid && this.registroForm.get('password1').touched;
  }

  get password2NoValido(){
    const pass1 = this.registroForm.get('password1').value;
    const pass2 = this.registroForm.get('password2').value;
    return ( pass1 === pass2 ) ? false : true;
  }

  get emailNoValido(){
    return this.registroForm.get('email').invalid && this.registroForm.get('email').touched;
  }

  get nombreNoValido(){
    return this.registroForm.get('nombre').invalid && this.registroForm.get('nombre').touched;
  }

  get apellidoNoValido(){
    return this.registroForm.get('apellido').invalid && this.registroForm.get('apellido').touched;
  }


  crearFormulario() {
    this.registroForm = this.fb.group({
      nombre  : ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      apellido: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      email  : ['', [Validators.pattern('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$'), Validators.required]],
      password1: ['', [Validators.required,  Validators.minLength(5), Validators.maxLength(255)]],
      password2: ['', [Validators.required]]
    }, {
      validators: this.validadores.passwordsIguales('password1', 'password2')
    });

    // TODO: Agregar validacion asyncrona email existente

  }

  guardar() {
    console.log( this.registroForm );

    if (this.registroForm.invalid){
      Object.values( this.registroForm.controls ).forEach( control => {
        control.markAsTouched();
      });
      return;
    }


    const usuario: Usuario = {
      nombre: this.registroForm.get('nombre').value,
      apellido: this.registroForm.get('apellido').value,
      email: this.registroForm.get('email').value,
      password: this.registroForm.get('password1').value
    };

    console.log( usuario );

  }

}
