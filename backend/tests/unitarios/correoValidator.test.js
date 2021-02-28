const correoValidator = require('../../validators/correoValidator.js');

describe('Validador para el correo', () => {
    it('Un correo normal', () => {
       const string = 'rmorenor97@gmail.com';
       expect(correoValidator(string)).toBeTruthy();
    });
    it('Un correo que tiene en el dominio caracteres especiales permitidos', () => {
        const string = 'rmorenor97@gmail-1.com';
        expect(correoValidator(string)).toBeTruthy();
    });
    it('Esto no es un correo porque tiene la extension mas larga de 4', () => {
        const string = 'rmorenor97@gmail.commma';
        expect(correoValidator(string)).toBeFalsy();
    });
    it('Esto no es un correo porque el nombre solo tiene cracteres especiales', () => {
        const string = '/%./@gmail.com';
        expect(correoValidator(string)).toBeFalsy();
    });
    it('Esto no es un correo porque el dominio tiene caracteres especiales no permitidos', () => {
        const string = 'rmorenor97@/_%.com';
        expect(correoValidator(string)).toBeFalsy();
    });
});