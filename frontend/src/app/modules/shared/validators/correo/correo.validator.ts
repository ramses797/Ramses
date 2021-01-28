import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function correoValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if(!control.value){
            return null;
        }
        return !/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(control.value) ? { correo: true } : null;
    };
}