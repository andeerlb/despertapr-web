import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Usuario } from '../models/usuario.model';
import { ValidatorFn } from '@angular/forms';
import { CadastroService } from './cadastro.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { EqualPassword } from './validators/equal-password.validator';
import { ActiveRepeatPassword } from './validators/active-repeat-password.validator';

@Component({
  selector: 'dp-cadastro',
  templateUrl: './cadastro.component.html',
  providers: [CadastroService]
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  private regexEmail: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(public service: CadastroService, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.pattern(this.regexEmail)]],
      senha: [undefined, Validators.required],
      repetirSenha: [{ value: undefined, disabled: false }, [Validators.required]],
      ativo: [true, Validators.required]
    }, {
      validator: [ActiveRepeatPassword.enableRepeatPassword, EqualPassword.MatchPassword]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.cadastroForm.controls;
  }

  submit(): void {
    this.service.post("usuario", this.cadastroForm.value)
      .subscribe((usuario: Usuario) => {
        this.toastr.success("Cadastrado com sucesso", usuario.email);
      }, (error: HttpErrorResponse) => this.toastr.error(error.error.message, "Error"))
  }

}
