import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

import { empresaValidator } from 'src/app/modules/shared/validators/empresa/empresa.validator';

@Directive({
    selector: '[empresa]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: empresaDirective,
            multi: true
        },
    ],
})

export class empresaDirective implements Validators {
    validate(control: AbstractControl): ValidationErrors | null {
        return empresaValidator()(control);
    }
}