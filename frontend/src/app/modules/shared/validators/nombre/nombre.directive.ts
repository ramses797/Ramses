import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

import { nombreValidator } from 'src/app/modules/shared/validators/nombre/nombre.validator';

@Directive({
    selector: 'nombre',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: nombreDirective,
            multi: true
        },
    ],
})

export class nombreDirective implements Validators {
    validate(control: AbstractControl): ValidationErrors | null {
        return nombreValidator()(control);
    }
}