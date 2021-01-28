import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function empresaValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if(!control.value) {
            return null;
        }
        return !/^[a-zA-ZÀ-ÿ\s]*$/.test(control.value) ? { empresa: true } : null;
    };
}