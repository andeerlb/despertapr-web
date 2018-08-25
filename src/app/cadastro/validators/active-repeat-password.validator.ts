import { AbstractControl } from "@angular/forms";

export class ActiveRepeatPassword {
    
    static enableRepeatPassword(AC: AbstractControl) {
        if (AC.get('senha').valid) {
          AC.get('repetirSenha').enable({ onlySelf: true });
        } else {
          AC.get('repetirSenha').disable({ onlySelf: true });
        }
      }
}