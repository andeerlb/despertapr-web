import { AbstractControl } from '@angular/forms';

export class EqualPassword {

  static MatchPassword(AC: AbstractControl) {
    let senha = AC.get('senha').value; // to get value in input tag
    let repetirSenha = AC.get('repetirSenha').value; // to get value in input tag

    if (senha != repetirSenha) {
      AC.get('repetirSenha').setErrors({ MatchPassword: true })
    } else {
      return null
    }
  }
}
