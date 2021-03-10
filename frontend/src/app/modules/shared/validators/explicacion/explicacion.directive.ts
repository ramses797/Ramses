import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

import { explicacionValidator } from 'src/app/modules/shared/validators/explicacion/explicacion.validator';

@Directive({
    selector: '[explicacion]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: explicacionDirective,
            multi: true
        },
    ],
})

export class explicacionDirective implements Validators {
    validate(control: AbstractControl): ValidationErrors | null {
        return explicacionValidator()(control);
    }
}