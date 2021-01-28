import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

import { correoValidator } from 'src/app/modules/shared/validators/correo/correo.validator';

@Directive(
    {
        selector: '[correo]',
        providers: [
            {
                provide: NG_VALIDATORS,
                useExisting: correoDirective,
                multi: true
            },
        ],
    })

export class correoDirective implements Validators{
    validate(control: AbstractControl): ValidationErrors | false {
        return correoValidator()(control);
    }
}